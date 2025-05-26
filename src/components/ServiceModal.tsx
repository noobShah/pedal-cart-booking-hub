
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Shield, Star, Sparkles, Zap } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    name: string;
    price: number;
    duration: string;
    description: string;
    features: string[];
    popular?: boolean;
  };
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'basic':
        return <Sparkles className="w-8 h-8 text-blue-500" />;
      case 'premium':
        return <Star className="w-8 h-8 text-yellow-500" />;
      case 'full-protection':
        return <Shield className="w-8 h-8 text-green-500" />;
      default:
        return <Zap className="w-8 h-8 text-purple-500" />;
    }
  };

  const getServiceDetails = (serviceId: string) => {
    switch (serviceId) {
      case 'basic':
        return {
          image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=300&fit=crop",
          highlight: "Perfect for Regular Maintenance",
          benefits: ["Quick turnaround", "Essential cleaning", "Affordable pricing"],
          process: ["Initial inspection", "Exterior wash", "Chain cleaning", "Quick dry"]
        };
      case 'premium':
        return {
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=300&fit=crop",
          highlight: "Most Popular Choice",
          benefits: ["Complete detailing", "Professional results", "Great value"],
          process: ["Thorough inspection", "Deep cleaning", "Polish & wax", "Component check"]
        };
      case 'full-protection':
        return {
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=300&fit=crop",
          highlight: "Ultimate Protection Package",
          benefits: ["Long-term protection", "Premium materials", "Extended warranty"],
          process: ["Complete assessment", "Ceramic coating", "Protection film", "Final inspection"]
        };
      default:
        return {
          image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=300&fit=crop",
          highlight: "Professional Service",
          benefits: ["Quality assured", "Expert handling", "Customer satisfaction"],
          process: ["Assessment", "Service", "Quality check", "Delivery"]
        };
    }
  };

  const details = getServiceDetails(service.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            {getServiceIcon(service.id)}
          </div>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {service.name}
          </DialogTitle>
          {service.popular && (
            <Badge className="mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              Most Popular
            </Badge>
          )}
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Image and Highlight */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={details.image}
                alt={service.name}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">{details.highlight}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Key Benefits</h4>
              <ul className="space-y-1">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">${service.price}</div>
              <div className="flex items-center justify-center text-gray-600 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {service.duration}
              </div>
            </div>

            <p className="text-gray-600 text-center">{service.description}</p>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">What's Included:</h4>
              <div className="grid gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Our Process</h4>
              <div className="grid grid-cols-2 gap-2">
                {details.process.map((step, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-2">
                      {index + 1}
                    </div>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1"
          >
            Close
          </Button>
          <Link to="/booking" className="flex-1">
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={onClose}
            >
              Book This Service
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
