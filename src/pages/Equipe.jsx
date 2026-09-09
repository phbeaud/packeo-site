import PageHero from '../components/PageHero';
import Equipe from '../components/Equipe';
import ContactCTA from '../components/ContactCTA';
import useSEO from '../hooks/useSEO';
import { useT } from '../i18n/I18nContext';

export default function EquipePage() {
  const { t, lang } = useT();
  useSEO({
    title: t.seo.team.title,
    description: t.seo.team.description,
    keywords: t.seo.team.keywords,
    path: `/${lang}/equipe`,
    lang,
    breadcrumbs: [
      { name: lang === 'en' ? 'Home' : 'Accueil', path: `/${lang}` },
      { name: lang === 'en' ? 'Team' : 'Équipe', path: `/${lang}/equipe` },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow={t.pageHero.equipe.eyebrow}
        title={t.pageHero.equipe.title}
        accent={t.pageHero.equipe.accent}
        sub={t.pageHero.equipe.sub}
      />
      <Equipe />
      <ContactCTA />
    </>
  );
}
