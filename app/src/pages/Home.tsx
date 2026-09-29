import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Marquee from '../sections/Marquee';
import Values from '../sections/Values';
import Products from '../sections/Products';
import Markets from '../sections/Markets';
import Logistics from '../sections/Logistics';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Marquee />
      <Values />
      <Products />
      <Markets />
      <Logistics />
      <Contact />
      <Footer />
    </main>
  );
}
