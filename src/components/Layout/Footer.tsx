import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PC Express Le Mans</h3>
            <p className="text-gray-400 mb-4">
              Votre expert en dépannage informatique à domicile sur Le Mans et ses environs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                6 Impasse Élisabeth Vigée-Lebrun, 72000 Le Mans
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                06 17 95 97 59
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                contact@reparateurpc.com
              </p>
              <p className="flex items-center text-gray-400">
                <Clock className="w-5 h-5 mr-2" />
                Lun-Sam: 8h-20h
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">Nos Services</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white">Témoignages</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PC Express Le Mans. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}