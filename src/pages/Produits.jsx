import PageHero from '../components/PageHero';
import Produits from '../components/Produits';
import Conveyor from '../components/Conveyor';
import ContactCTA from '../components/ContactCTA';

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Univers produits"
        title="Sept familles."
        accent="Une couverture industrielle complète."
        sub="Sélectionnées et qualifiées pour répondre à la majorité des besoins d'emballage des restaurants, de la transformation alimentaire et des secteurs industriels."
      />
      <Produits />
      <Conveyor />
      <ContactCTA
        title={
          <>
            Besoin d'un format précis ?
            <br />
            <span className="text-ink-400">Demandez vos spécifications.</span>
          </>
        }
        sub="Décrivez-nous votre produit, vos volumes et votre cadence — nous vous revenons avec les options qui s'appliquent à votre opération."
      />
    </>
  );
}
