import PageHero from '../components/PageHero';
import Produits from '../components/Produits';
import Conveyor from '../components/Conveyor';
import ContactCTA from '../components/ContactCTA';
import useSEO from '../hooks/useSEO';
import { useT } from '../i18n/I18nContext';

export default function ProduitsPage() {
  const { t, lang } = useT();
  useSEO({
    title: t.seo.products.title,
    description: t.seo.products.description,
    keywords: t.seo.products.keywords,
    path: `/${lang}/produits`,
    lang,
  });

  return (
    <>
      <PageHero
        eyebrow={t.pageHero.produits.eyebrow}
        title={t.pageHero.produits.title}
        accent={t.pageHero.produits.accent}
        sub={t.pageHero.produits.sub}
      />
      <Produits />
      <Conveyor />
      <ContactCTA
        title={
          <>
            {t.contactCTA.produitsTitleA}
            <br />
            <span className="text-ink-400">{t.contactCTA.produitsTitleB}</span>
          </>
        }
        sub={t.contactCTA.produitsSub}
      />
    </>
  );
}
