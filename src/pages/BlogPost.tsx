import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MetaTags } from '../components/SEO/MetaTags';
import { Calendar, Clock } from 'lucide-react';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <MetaTags
        title={`${post.title} | PC Express Le Mans`}
        description={post.excerpt}
        keywords={post.keywords}
      />

      <main className="py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
            <Clock className="w-4 h-4 ml-4 mr-2" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </article>
      </main>
    </>
  );
}

const blogPosts = [
  {
    title: "10 Signes Que Votre PC A Besoin d'Une Maintenance Urgente",
    slug: "signes-maintenance-pc-urgente",
    date: "15 Mars 2024",
    readTime: "5 min",
    excerpt: "Découvrez les signaux d'alerte qui indiquent que votre ordinateur nécessite une intervention professionnelle. Prévention et solutions.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=1470",
    keywords: "maintenance PC, réparation ordinateur, problèmes informatiques, dépannage PC Le Mans",
    content: (
      <>
        <p className="lead">Votre ordinateur vous envoie souvent des signaux avant une panne majeure. Apprendre à les reconnaître peut vous éviter bien des désagréments et des pertes de données importantes.</p>

        <h2>1. Ralentissements Inhabituels</h2>
        <p>Un ordinateur qui devient progressivement plus lent est souvent le premier signe d'un problème sous-jacent. Cela peut être dû à :</p>
        <ul>
          <li>Un disque dur saturé</li>
          <li>Une fragmentation excessive</li>
          <li>Des processus en arrière-plan gourmands en ressources</li>
          <li>La présence de malwares</li>
        </ul>

        <h2>2. Bruits Anormaux</h2>
        <p>Des cliquetis, grattements ou vibrations inhabituelles peuvent indiquer :</p>
        <ul>
          <li>Un disque dur défaillant</li>
          <li>Un ventilateur encrassé ou défectueux</li>
          <li>Des composants mal fixés</li>
        </ul>

        <h2>3. Plantages Fréquents</h2>
        <p>Les écrans bleus ou les redémarrages intempestifs peuvent signaler :</p>
        <ul>
          <li>Des pilotes obsolètes</li>
          <li>Des problèmes de mémoire RAM</li>
          <li>Une surchauffe du système</li>
        </ul>

        <h2>4. Surchauffe</h2>
        <p>Un ordinateur qui chauffe excessivement peut subir des dommages permanents. Causes possibles :</p>
        <ul>
          <li>Accumulation de poussière</li>
          <li>Pâte thermique desséchée</li>
          <li>Ventilation obstruée</li>
        </ul>

        <h2>5. Problèmes de Démarrage</h2>
        <p>Des difficultés au démarrage peuvent indiquer :</p>
        <ul>
          <li>Un système d'exploitation corrompu</li>
          <li>Des problèmes de disque dur</li>
          <li>Des conflits de pilotes</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-blue-800 font-bold mb-3">Conseil d'Expert</h3>
          <p>Une maintenance préventive régulière peut éviter la plupart de ces problèmes. Nous recommandons un check-up complet tous les 6 mois.</p>
        </div>

        <h2>Conclusion</h2>
        <p>Ne négligez pas ces signes avant-coureurs. Une intervention rapide peut souvent éviter des réparations plus coûteuses. Contactez-nous pour un diagnostic professionnel de votre matériel.</p>
      </>
    )
  },
  {
    title: "Guide Complet : Protégez-vous Contre les Cybermenaces en 2024",
    slug: "guide-protection-cybermenaces-2024",
    date: "12 Mars 2024",
    readTime: "7 min",
    excerpt: "Les meilleures pratiques pour sécuriser vos données personnelles et professionnelles. Antivirus, mots de passe, et plus encore.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1470",
    keywords: "cybersécurité, protection données, antivirus, sécurité informatique, Le Mans",
    content: (
      <>
        <p className="lead">La cybersécurité est devenue un enjeu majeur pour tous les utilisateurs d'ordinateurs. Voici un guide complet pour protéger efficacement vos données en 2024.</p>

        <h2>Les Fondamentaux de la Sécurité</h2>
        <p>La protection de base repose sur plusieurs piliers essentiels :</p>
        <ul>
          <li>Un antivirus à jour</li>
          <li>Un pare-feu correctement configuré</li>
          <li>Des mots de passe robustes</li>
          <li>Des sauvegardes régulières</li>
        </ul>

        <h2>Mots de Passe : Les Bonnes Pratiques</h2>
        <p>Un mot de passe sécurisé doit :</p>
        <ul>
          <li>Contenir au moins 12 caractères</li>
          <li>Mélanger majuscules, minuscules, chiffres et symboles</li>
          <li>Être unique pour chaque service</li>
          <li>Être changé régulièrement</li>
        </ul>

        <h2>Protection Contre les Malwares</h2>
        <p>Les mesures essentielles incluent :</p>
        <ul>
          <li>Installation d'un antivirus reconnu</li>
          <li>Mises à jour régulières du système</li>
          <li>Analyse des fichiers téléchargés</li>
          <li>Méfiance envers les emails suspects</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-yellow-800 font-bold mb-3">Attention aux Arnaques</h3>
          <p>Le phishing reste la menace n°1. Ne cliquez jamais sur des liens suspects et vérifiez toujours l'authenticité des expéditeurs.</p>
        </div>

        <h2>Sauvegardes : Votre Assurance Vie Numérique</h2>
        <p>Adoptez la règle du 3-2-1 :</p>
        <ul>
          <li>3 copies de vos données</li>
          <li>2 types de supports différents</li>
          <li>1 copie stockée hors site</li>
        </ul>

        <h2>Conclusion</h2>
        <p>La sécurité informatique n'est pas une option mais une nécessité. Un investissement dans la protection de vos données est toujours rentable à long terme.</p>
      </>
    )
  },
  {
    title: "Comment Optimiser les Performances de Votre PC Windows",
    slug: "optimisation-performance-pc-windows",
    date: "10 Mars 2024",
    readTime: "6 min",
    excerpt: "Astuces et conseils pratiques pour accélérer votre ordinateur et améliorer ses performances au quotidien.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1470",
    keywords: "optimisation PC, performance Windows, maintenance informatique, PC lent, Le Mans",
    content: (
      <>
        <p className="lead">Un ordinateur lent peut considérablement réduire votre productivité. Découvrez nos conseils d'experts pour optimiser les performances de votre PC Windows.</p>

        <h2>1. Nettoyage du Système</h2>
        <p>Commencez par un nettoyage approfondi :</p>
        <ul>
          <li>Désinstallation des programmes inutiles</li>
          <li>Suppression des fichiers temporaires</li>
          <li>Nettoyage du registre Windows</li>
          <li>Défragmentation du disque dur (pour les HDD)</li>
        </ul>

        <h2>2. Optimisation du Démarrage</h2>
        <p>Pour un démarrage plus rapide :</p>
        <ul>
          <li>Désactivez les programmes au démarrage inutiles</li>
          <li>Mettez à jour les pilotes</li>
          <li>Vérifiez les services Windows</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-green-800 font-bold mb-3">Conseil Pro</h3>
          <p>L'installation d'un SSD peut multiplier par 5 la vitesse de votre système. C'est l'upgrade le plus efficace pour un vieux PC.</p>
        </div>

        <h2>3. Gestion de la Mémoire</h2>
        <p>Optimisez votre RAM :</p>
        <ul>
          <li>Fermez les programmes inutilisés</li>
          <li>Limitez les onglets du navigateur</li>
          <li>Ajustez les paramètres de la mémoire virtuelle</li>
        </ul>

        <h2>4. Maintenance Matérielle</h2>
        <p>Ne négligez pas l'aspect physique :</p>
        <ul>
          <li>Nettoyage régulier de la poussière</li>
          <li>Vérification des températures</li>
          <li>Remplacement de la pâte thermique si nécessaire</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Une maintenance régulière est la clé pour des performances optimales. N'hésitez pas à faire appel à un professionnel pour un check-up complet.</p>
      </>
    )
  }
];