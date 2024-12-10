import React from 'react';
import { MetaTags } from '../components/SEO/MetaTags';
import { Monitor, Shield, Cpu, HardDrive, Wrench, GraduationCap } from 'lucide-react';

export function Services() {
  return (
    <>
      <MetaTags
        title="Nos Services de Dépannage Informatique"
        description="Services professionnels de dépannage informatique à domicile sur Le Mans. Réparation PC et Mac, suppression virus, récupération de données."
        keywords="services informatiques, dépannage PC, réparation ordinateur, maintenance informatique, Le Mans"
      />

      <main>
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Nos Services</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Des solutions informatiques complètes pour particuliers et professionnels
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const servicesList = [
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Dépannage PC & Mac",
    description: "Résolution rapide et efficace de tous vos problèmes informatiques.",
    features: [
      "Diagnostic complet",
      "Réparation matérielle",
      "Résolution des problèmes logiciels",
      "Optimisation système"
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Sécurité & Antivirus",
    description: "Protection complète de votre système contre les menaces.",
    features: [
      "Suppression de virus",
      "Installation antivirus",
      "Sécurisation wifi",
      "Protection des données"
    ]
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Maintenance",
    description: "Entretien régulier pour des performances optimales.",
    features: [
      "Nettoyage système",
      "Mise à jour logiciels",
      "Optimisation performances",
      "Sauvegarde données"
    ]
  },
  {
    icon: <HardDrive className="w-12 h-12" />,
    title: "Récupération Données",
    description: "Récupération de vos fichiers perdus ou supprimés.",
    features: [
      "Analyse disque dur",
      "Récupération fichiers",
      "Réparation système",
      "Sauvegarde sécurisée"
    ]
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Installation & Configuration",
    description: "Installation et paramétrage de vos équipements.",
    features: [
      "Installation Windows/Mac",
      "Configuration matériel",
      "Installation logiciels",
      "Paramétrage réseau"
    ]
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Formation",
    description: "Accompagnement personnalisé pour maîtriser votre matériel.",
    features: [
      "Initiation informatique",
      "Formation logiciels",
      "Conseils personnalisés",
      "Support continu"
    ]
  }
];