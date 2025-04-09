
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-pitstop-red transition-colors">
              Home
            </Link>
            <Link to="/food" className="font-medium hover:text-pitstop-red transition-colors">
              Food
            </Link>
            <Link to="/drinks" className="font-medium hover:text-pitstop-red transition-colors">
              Drinks
            </Link>
            <Link to="/offers" className="font-medium hover:text-pitstop-red transition-colors">
              Offers
            </Link>
            <Link to="/store-amenities" className="font-medium hover:text-pitstop-red transition-colors">
              Store Amenities
            </Link>
            <Link to="/contact" className="font-medium hover:text-pitstop-red transition-colors">
              Find Us
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+15802267925" className="flex items-center text-pitstop-blue gap-2 hover:text-pitstop-red transition-colors">
              <Phone size={18} />
              <span className="font-medium">+1 (580) 226-7925</span>
            </a>
            <Link to="/contact" className="btn-primary">
              <MapPin className="mr-2" size={18} />
              Find a Store
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-md text-pitstop-darkblue"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium hover:text-pitstop-red transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/food" className="py-2 font-medium hover:text-pitstop-red transition-colors" onClick={toggleMenu}>
              Food
            </Link>
            <Link to="/drinks" className="py-2 font-medium hover:text-pitstop-red transition-colors" onClick={toggleMenu}>
              Drinks
            </Link>
            <Link to="/offers" className="py-2 font-medium hover:text-pitstop-red transition-colors" onClick={toggleMenu}>
              Offers
            </Link>
            <Link to="/store-amenities" className="py-2 font-medium hover:text-pitstop-red transition-colors" onClick={toggleMenu}>
              Store Amenities
            </Link>
            <Link to="/contact" className="py-2 font-medium hover:text-pitstop-red transition-colors" onClick={toggleMenu}>
              Find Us
            </Link>

            <div className="pt-2 flex flex-col gap-4">
              <a href="tel:+15802267925" className="flex items-center text-pitstop-blue gap-2">
                <Phone size={18} />
                <span className="font-medium">+1 (580) 226-7925</span>
              </a>
              <Link to="/contact" className="btn-primary inline-flex w-full justify-center" onClick={toggleMenu}>
                <MapPin className="mr-2" size={18} />
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
