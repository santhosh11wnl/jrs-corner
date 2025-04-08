
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pitstop-darkblue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-pitstop-cream mb-4">
              Your go-to destination for delicious food and quality fuel on the highway.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pitstop-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pitstop-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-pitstop-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-diner mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-pitstop-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/food" className="hover:text-pitstop-red transition-colors">Food Menu</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-pitstop-red transition-colors">Offers & Deals</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pitstop-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pitstop-red transition-colors">Find a Store</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-diner mb-4">Important Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-pitstop-red transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-pitstop-red transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-pitstop-red transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-pitstop-red transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-diner mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-pitstop-red" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-pitstop-red" />
                <span>info@pitstopfeast.com</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-pitstop-red" />
                <span>Open 24/7</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-pitstop-red" />
                <span>Multiple locations across the country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-center text-sm text-pitstop-cream">
            &copy; {currentYear} PitStop Feast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
