import React from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <>
      <MetaTags
        title="FAQ - Questions Fréquentes"
        description="Trouvez les réponses à vos questions sur nos services de dépannage informatique à domicile sur Le Mans. Tarifs, délais, types d'interventions."
        keywords="FAQ dépannage informatique, questions fréquentes, aide informatique Le Mans, support PC"
      />

      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h1>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

const faqItems = [
  {
    question: "Quels sont vos tarifs ?",
    answer: "Notre tarif est fixe à 30€ de l'heure. Le diagnostic initial est gratuit. Nous vous fournissons un devis détaillé avant toute intervention."
  },
  {
    question: "Dans quels délais intervenez-vous ?",
    answer: "Nous intervenons généralement dans l'heure qui suit votre appel, selon notre disponibilité. En cas d'urgence, nous faisons notre maximum pour être chez vous le plus rapidement possible."
  },
  {
    question: "Quels types d'ordinateurs réparez-vous ?",
    answer: "Nous intervenons sur tous types d'ordinateurs : PC fixes, portables, Mac, sous Windows, MacOS ou Linux. Notre expertise couvre l'ensemble des marques et modèles."
  },
  {
    question: "Proposez-vous un service de récupération de données ?",
    answer: "Oui, nous proposons un service de récupération de données pour les disques durs endommagés, les fichiers supprimés accidentellement ou les systèmes corrompus."
  },
  {
    question: "Quelle zone géographique couvrez-vous ?",
    answer: "Nous intervenons sur Le Mans et ses environs, dans un rayon de 20 km autour de la ville. Le déplacement est inclus dans nos tarifs."
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, nous proposons des contrats de maintenance adaptés aux particuliers et aux professionnels. Contactez-nous pour établir un devis personnalisé."
  }
];