import Hero from '../components/Hero';
import Manifeste from '../components/Manifeste';
import Positionnement from '../components/Positionnement';
import Modele from '../components/Modele';
import ApercuProduits from '../components/ApercuProduits';
import Clienteles from '../components/Clienteles';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import useSEO from '../hooks/useSEO';
import { useT } from '../i18n/I18nContext';

export default function Accueil() {
  const { t, lang } = useT();
  useSEO({
    title: t.seo.home.title,
    description: t.seo.home.description,
    keywords: t.seo.home.keywords,
    path: `/${lang}`,
    lang,
    breadcrumbs: [{ name: lang === 'en' ? 'Home' : 'Accueil', path: `/${lang}` }],
  });

  return (
    <>
      <Hero />
      <Manifeste />
      <Positionnement />
      <Modele />
      <ApercuProduits />
      <Clienteles />
      <Certifications />
      <Contact />
    </>
  );
}
