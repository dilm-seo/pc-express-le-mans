import React from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Shield, Clock, Wrench, Award } from 'lucide-react';

export function Home() {
  return (
    <>
      <MetaTags
        title="Dépannage Informatique à Domicile"
        description="Expert en dépannage informatique à domicile sur Le Mans. Intervention rapide, diagnostic gratuit. Réparation PC, Mac, virus, problèmes réseau."
        keywords="dépannage informatique, Le Mans, réparation ordinateur, assistance informatique, dépannage PC, maintenance informatique"
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dépannage Informatique à Domicile sur Le Mans
              </h1>
              <p className="text-xl mb-8">
                Expert en réparation et maintenance informatique. Intervention rapide et professionnelle.
              </p>
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Demander une intervention
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Service Garanti</h3>
                <p className="text-gray-600">Satisfaction client garantie sur toutes nos interventions</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Intervention Rapide</h3>
                <p className="text-gray-600">Déplacement dans l'heure selon disponibilité</p>
              </div>
              <div className="text-center">
                <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expertise Technique</h3>
                <p className="text-gray-600">Plus de 10 ans d'expérience en maintenance</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prix Transparent</h3>
                <p className="text-gray-600">Tarif fixe à 30€/heure, sans surprise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const services = [
  {
    title: "Dépannage PC & Mac",
    description: "Résolution des problèmes matériels et logiciels sur tous types d'ordinateurs."
  },
  {
    title: "Suppression Virus",
    description: "Nettoyage complet de votre système et protection contre les menaces."
  },
  {
    title: "Installation & Configuration",
    description: "Installation de logiciels, systèmes d'exploitation et périphériques."
  },
  {
    title: "Récupération de Données",
    description: "Récupération de vos fichiers perdus ou supprimés accidentellement."
  },
  {
    title: "Optimisation Système",
    description: "Amélioration des performances de votre ordinateur."
  },
  {
    title: "Formation",
    description: "Initiation et perfectionnement à l'utilisation de votre matériel."
  }
];