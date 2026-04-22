import Nav from './components/Nav';
import Hero from './components/Hero';
import Manifeste from './components/Manifeste';
import Positionnement from './components/Positionnement';
import Approche from './components/Approche';
import Showcase from './components/Showcase';
import Operations from './components/Operations';
import Produits from './components/Produits';
import Modele from './components/Modele';
import Capacites from './components/Capacites';
import Clienteles from './components/Clienteles';
import Conveyor from './components/Conveyor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <div className="bg-white text-ink-900 antialiased selection:bg-ink-900 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Manifeste />
        <Positionnement />
        <Approche />
        <Showcase />
        <Operations />
        <Produits />
        <Modele />
        <Capacites />
        <Clienteles />
        <Conveyor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
