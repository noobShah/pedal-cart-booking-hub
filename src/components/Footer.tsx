
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-blue-400 mb-4">BikeDetails Pro</h3>
            <p className="text-gray-300">
              Professional bike detailing services to keep your ride looking pristine and performing at its best.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors story-link">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-blue-400 transition-colors story-link">
                Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-blue-400 transition-colors story-link">
                Gallery
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors story-link">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors story-link">
                Contact
              </Link>
              <Link to="/booking" className="block text-gray-300 hover:text-blue-400 transition-colors story-link">
                Booking
              </Link>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-blue-400 transition-colors cursor-pointer">Basic Wash</p>
              <p className="hover:text-blue-400 transition-colors cursor-pointer">Premium Detail</p>
              <p className="hover:text-blue-400 transition-colors cursor-pointer">Full Protection</p>
              <p className="hover:text-blue-400 transition-colors cursor-pointer">Custom Packages</p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-blue-400 transition-colors">📞 (555) 123-4567</p>
              <p className="hover:text-blue-400 transition-colors">✉️ info@bikedetailspro.com</p>
              <p className="hover:text-blue-400 transition-colors">📍 123 Bike Street, City, State 12345</p>
              <p className="text-sm mt-4">
                <span className="text-green-400">●</span> Open Now - Mon-Fri 8AM-6PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 animate-fade-in">
          <p>&copy; 2024 BikeDetails Pro. All rights reserved. | Professional Bike Detailing Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
