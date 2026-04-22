import PageHero from '../components/PageHero';
import Approche from '../components/Approche';
import Showcase from '../components/Showcase';
import Operations from '../components/Operations';
import Capacites from '../components/Capacites';
import ContactCTA from '../components/ContactCTA';

export default function ApprochePage() {
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
