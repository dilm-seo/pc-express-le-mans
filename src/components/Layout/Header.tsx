import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, Wrench } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="py-2 border-b border-gray-100 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:0617959759" className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone className="w-4 h-4 mr-1" />
                <span>06 17 95 97 59</span>
              </a>
              <a href="mailto:contact@reparateurpc.com" className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail className="w-4 h-4 mr-1" />
                <span>contact@reparateurpc.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-gray-600">Lun-Sam: 8h-20h</span>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wrench className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">PC Express Le Mans</span>
            </Link>
            
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
              <Link to="/testimonials" className="text-gray-600 hover:text-blue-600">Témoignages</Link>
              <Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}