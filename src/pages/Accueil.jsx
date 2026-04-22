import Hero from '../components/Hero';
import Manifeste from '../components/Manifeste';
import Positionnement from '../components/Positionnement';
import Modele from '../components/Modele';
import ApercuProduits from '../components/ApercuProduits';
import Clienteles from '../components/Clienteles';
import Contact from '../components/Contact';

export default function Accueil() {
  return (
    <>
      <Hero />
      <Manifeste />
      <Positionnement />
      <Modele />
      <ApercuProduits />
      <Clienteles />
      <Contact />
    </>
  );
}
