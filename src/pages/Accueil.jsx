import Hero from '../components/Hero';
import Manifeste from '../components/Manifeste';
import Positionnement from '../components/Positionnement';
import Modele from '../components/Modele';
import ApercuProduits from '../components/ApercuProduits';
import Clienteles from '../components/Clienteles';
import Contact from '../components/Contact';
import useSEO from '../hooks/useSEO';

export default function Accueil() {
  useSEO({
    title: 'Packeo — Emballage au prix manufacturier direct | Approvisionnement B2B Québec',
    description:
      "Packeo approvisionne les entreprises en emballages directement auprès des manufacturiers. Sans intermédiaires, sans surcoûts. Pour restaurants, transformation alimentaire et secteurs industriels au Québec.",
    keywords:
      "emballage manufacturier, approvisionnement emballage Québec, boîtes carton entreprise, contenants alimentaires foodservice, sous vide transformation alimentaire, fournisseur emballage B2B",
    path: '/',
  });

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
