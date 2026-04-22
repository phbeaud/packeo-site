import PageHero from '../components/PageHero';
import Produits from '../components/Produits';
import Conveyor from '../components/Conveyor';
import ContactCTA from '../components/ContactCTA';
import useSEO from '../hooks/useSEO';

export default function ProduitsPage() {
  useSEO({
    title: "Produits d'emballage industriel | Packeo — Boîtes, contenants, sous vide",
    description:
      "Catalogue complet d'emballages industriels : boîtes et cartons, contenants alimentaires, sacs et pellicules, sous vide, pots et verres, protection industrielle, solutions sur mesure. Prix manufacturier direct.",
    keywords:
      "boîtes carton, contenants alimentaires, sacs kraft, sous vide, pots verre, pellicules étirables, emballage sur mesure, emballage industriel Québec",
    path: '/produits',
  });

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
