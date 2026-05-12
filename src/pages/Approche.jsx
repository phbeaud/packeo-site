import PageHero from '../components/PageHero';
import Approche from '../components/Approche';
import Showcase from '../components/Showcase';
import Operations from '../components/Operations';
import Capacites from '../components/Capacites';
import ContactCTA from '../components/ContactCTA';
import useSEO from '../hooks/useSEO';
import { useT } from '../i18n/I18nContext';

export default function ApprochePage() {
  const { t, lang } = useT();
  useSEO({
    title: t.seo.approach.title,
    description: t.seo.approach.description,
    keywords: t.seo.approach.keywords,
    path: `/${lang}/approche`,
    lang,
  });

  return (
    <>
      <PageHero
        eyebrow={t.pageHero.approche.eyebrow}
        title={t.pageHero.approche.title}
        accent={t.pageHero.approche.accent}
        sub={t.pageHero.approche.sub}
      />
      <Approche />
      <Showcase />
      <Operations />
      <Capacites />
      <ContactCTA
        title={
          <>
            {t.contactCTA.approcheTitleA}
            <br />
            <span className="text-ink-400">{t.contactCTA.approcheTitleB}</span>
          </>
        }
        sub={t.contactCTA.approcheSub}
      />
    </>
  );
}
