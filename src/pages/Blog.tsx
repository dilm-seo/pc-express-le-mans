import React from 'react';
import { Link } from 'react-router-dom';
import { MetaTags } from '../components/SEO/MetaTags';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export function Blog() {
  return (
    <>
      <MetaTags
        title="Blog Informatique - Conseils et Astuces"
        description="Découvrez nos articles experts sur la maintenance informatique, la sécurité et l'optimisation de votre ordinateur. Conseils pratiques et solutions."
        keywords="blog informatique, conseils PC, maintenance ordinateur, sécurité informatique, Le Mans, dépannage PC"
      />

      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Blog Informatique</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Lire la suite
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
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
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=1470"
  },
  {
    title: "Guide Complet : Protégez-vous Contre les Cybermenaces en 2024",
    slug: "guide-protection-cybermenaces-2024",
    date: "12 Mars 2024",
    readTime: "7 min",
    excerpt: "Les meilleures pratiques pour sécuriser vos données personnelles et professionnelles. Antivirus, mots de passe, et plus encore.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1470"
  },
  {
    title: "Comment Optimiser les Performances de Votre PC Windows",
    slug: "optimisation-performance-pc-windows",
    date: "10 Mars 2024",
    readTime: "6 min",
    excerpt: "Astuces et conseils pratiques pour accélérer votre ordinateur et améliorer ses performances au quotidien.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1470"
  }
];