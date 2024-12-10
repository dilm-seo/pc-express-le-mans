import React from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <>
      <MetaTags
        title="Témoignages Clients"
        description="Découvrez les avis de nos clients satisfaits sur nos services de dépannage informatique à domicile sur Le Mans."
        keywords="avis clients, témoignages, satisfaction client, dépannage informatique Le Mans"
      />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Témoignages de nos Clients</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

const testimonials = [
  {
    content: "Intervention rapide et efficace. Mon PC ne démarrait plus, le problème a été résolu en moins d'une heure. Je recommande vivement !",
    name: "Marie L.",
    location: "Le Mans Centre",
    rating: 5
  },
  {
    content: "Très professionnel et pédagogue. A pris le temps de m'expliquer les manipulations pour éviter que le problème ne se reproduise.",
    name: "Pierre D.",
    location: "Coulaines",
    rating: 5
  },
  {
    content: "Service impeccable ! Disponible rapidement et tarifs très raisonnables. Mon ordinateur fonctionne comme neuf.",
    name: "Sophie M.",
    location: "Arnage",
    rating: 5
  },
  {
    content: "Excellent service de récupération de données. J'avais perdu des photos importantes et tout a pu être récupéré.",
    name: "Jean-Paul B.",
    location: "Allonnes",
    rating: 5
  },
  {
    content: "Formation très utile sur l'utilisation de mon nouvel ordinateur. Explications claires et adaptées à mon niveau.",
    name: "Françoise R.",
    location: "Le Mans Sud",
    rating: 5
  },
  {
    content: "Dépannage efficace de mon réseau wifi. Intervention rapide et professionnelle. Je recommande !",
    name: "Laurent K.",
    location: "Yvré-l'Évêque",
    rating: 5
  }
];