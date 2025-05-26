
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">BikeDetails Pro</h3>
            <p className="text-gray-300">
              Professional bike detailing services to keep your ride looking pristine.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/booking" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Booking
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>Basic Wash</p>
              <p>Premium Detail</p>
              <p>Full Protection</p>
              <p>Custom Packages</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@bikedetailspro.com</p>
              <p>Address: 123 Bike Street, City, State 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 BikeDetails Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
