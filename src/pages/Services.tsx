
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceModal from "@/components/ServiceModal";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: "basic",
      name: "Basic Wash",
      price: 25,
      duration: "30 minutes",
      description: "Perfect for regular maintenance and quick cleaning",
      features: [
        "Exterior bike wash",
        "Wheel and tire cleaning",
        "Chain degreasing",
        "Quick dry and buff",
        "Basic frame wipe down"
      ],
      popular: false
    },
    {
      id: "premium",
      name: "Premium Detail",
      price: 75,
      duration: "90 minutes",
      description: "Complete detailing service for the discerning cyclist",
      features: [
        "Everything in Basic Wash",
        "Deep chain maintenance",
        "Frame polish and wax",
        "Interior component cleaning",
        "Brake and gear adjustment check",
        "Tire pressure optimization",
        "Quality guarantee"
      ],
      popular: true
    },
    {
      id: "full-protection",
      name: "Full Protection",
      price: 150,
      duration: "3 hours",
      description: "Ultimate protection package for serious cyclists",
      features: [
        "Everything in Premium Detail",
        "Ceramic coating application",
        "Paint protection film",
        "Anti-corrosion treatment",
        "Premium component lubrication",
        "6-month protection warranty",
        "Follow-up maintenance guide",
        "Priority booking for future services"
      ],
      popular: false
    }
  ];

  const addOns = [
    { id: "headlight-restoration", name: "Headlight Restoration", price: 15 },
    { id: "wheel-protection", name: "Wheel Protection Coating", price: 25 },
    { id: "leather-treatment", name: "Leather Seat Treatment", price: 20 },
    { id: "engine-detail", name: "Engine Bay Detailing", price: 35 },
    { id: "chrome-polish", name: "Chrome Polish", price: 18 },
    { id: "tire-shine", name: "Premium Tire Shine", price: 12 }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional bike detailing packages designed to meet every cyclist's needs
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Service Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${pkg.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">${pkg.price}</div>
                  <div className="text-gray-600">{pkg.duration}</div>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 4 && (
                      <li className="text-blue-600 font-medium">
                        +{pkg.features.length - 4} more features...
                      </li>
                    )}
                  </ul>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => handleServiceClick(pkg)}
                    >
                      View Details
                    </Button>
                    <Link to="/booking" className="block">
                      <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                        Select Package
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Available Add-ons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <Card key={addon.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      +${addon.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Add-ons can be selected during the booking process
            </p>
            <Link to="/booking">
              <Button size="lg">Start Booking</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">Choose your package and schedule your appointment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Drop Off</h3>
              <p className="text-gray-600">Bring your bike to our facility or schedule pickup</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Detail</h3>
              <p className="text-gray-600">Our experts work their magic on your bike</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pickup</h3>
              <p className="text-gray-600">Collect your pristine bike and enjoy the ride</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Services;
