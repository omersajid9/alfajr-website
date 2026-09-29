#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
#  Alfajr → Netlify publish
#
#  Commits pending changes, builds locally, then pushes to git.
#  Netlify's connected repo auto-builds and deploys the push.
#
#  Usage:
#    ./deploy.sh                 → commit + build + push (default message)
#    ./deploy.sh "my message"    → same, with a custom commit message
# ─────────────────────────────────────────────────────────────────────
set -euo pipefail

cd "$(dirname "$0")"            # repo root (kimi/)
BRANCH="$(git branch --show-current)"
MSG="${1:-site: publish Alfajr + ENEOS updates}"

# ── one-time check: git remote ────────────────────────────────────────
if ! git remote get-url origin >/dev/null 2>&1; then
  cat >&2 <<'EOF'
✗ No 'origin' git remote is configured yet.

Netlify deploys from a git repository. Do this ONCE:

  1) Create an empty repo at https://github.com/new  (e.g. "alfajr-site")
  2) Link it here:
         git remote add origin https://github.com/YOUR_USERNAME/alfajr-site.git
  3) Connect that repo to your existing Netlify site:
         netlify.com → open your site (id f52c26ac-68c0-45ac-b3ba-4365a09f04b8)
         → Build & deploy → Continuous deployment → Link site to a repository
       netlify.toml already tells Netlify what to do:
         base app · npm run build · publish dist
  4) Re-run this script. Every push from now on auto-deploys.
EOF
  exit 1
fi

# ── commit pending changes ────────────────────────────────────────────
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "✔ Working tree clean — nothing to commit."
else
  git add -A
  git commit -m "$MSG"
  echo "✔ Committed: $MSG"
fi

# ── build locally first (catch errors before Netlify does) ────────────
echo "→ Building app/ (npm run build)…"
( cd app && npm run build ) || {
  echo "✗ Build failed — fix the errors above, then run ./deploy.sh again."
  exit 1
}
echo "✔ Build OK."

# ── push ──────────────────────────────────────────────────────────────
if git rev-parse --abbrev-ref --symbolic-full-name "@{u}" >/dev/null 2>&1; then
  git push origin "$BRANCH"
else
  git push -u origin "$BRANCH"
fi

echo
echo "✔ Pushed '$BRANCH' → origin."
echo "  Track the deploy: https://app.netlify.com/sites/<your-site>/deploys"