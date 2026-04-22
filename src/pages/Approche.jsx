import PageHero from '../components/PageHero';
import Approche from '../components/Approche';
import Showcase from '../components/Showcase';
import Operations from '../components/Operations';
import Capacites from '../components/Capacites';
import ContactCTA from '../components/ContactCTA';
import useSEO from '../hooks/useSEO';

export default function ApprochePage() {
  useSEO({
    title: 'Notre approche | Packeo — Chaîne d\'approvisionnement structurée',
    description:
      "Comment Packeo élimine les intermédiaires de votre chaîne d'approvisionnement : importation directe, consolidation logistique, entreposage stratégique, livraisons planifiées. Quatre leviers pour réduire vos coûts réels.",
    keywords:
      "chaîne approvisionnement emballage, importation directe manufacturier, consolidation logistique, entreposage emballage Québec, distribution emballage planifiée",
    path: '/approche',
  });

  return (
    <>
      <PageHero
        eyebrow="Approche & opérations"
        title="Comment nous structurons"
        accent="votre approvisionnement."
        sub="Quatre leviers, une chaîne tracée, des capacités complètes — du sourcing manufacturier à la livraison sur votre quai."
      />
      <Approche />
      <Showcase />
      <Operations />
      <Capacites />
      <ContactCTA
        title={
          <>
            Validons ensemble
            <br />
            <span className="text-ink-400">votre flux actuel.</span>
          </>
        }
        sub="Nous proposons une lecture concrète de votre approvisionnement et identifions les leviers d'optimisation qui s'appliquent à vos opérations."
      />
    </>
  );
}
