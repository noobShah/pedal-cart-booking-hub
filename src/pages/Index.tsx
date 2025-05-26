
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [{
    title: "Basic Wash",
    description: "Essential cleaning for your bike",
    price: "$25",
    features: ["Exterior wash", "Wheel cleaning", "Quick dry"]
  }, {
    title: "Premium Detail",
    description: "Complete detailing service",
    price: "$75",
    features: ["Deep cleaning", "Chain maintenance", "Polish & wax", "Interior clean"]
  }, {
    title: "Full Protection",
    description: "Ultimate care package",
    price: "$150",
    features: ["Everything in Premium", "Paint protection", "Ceramic coating", "6-month warranty"]
  }];

  const testimonials = [{
    name: "Mike Johnson",
    text: "Absolutely amazing service! My bike looks brand new after their premium detail package.",
    rating: 5
  }, {
    name: "Sarah Williams",
    text: "Professional team and incredible attention to detail. Highly recommended!",
    rating: 5
  }, {
    name: "Tom Davis",
    text: "The full protection package was worth every penny. My bike has never looked better.",
    rating: 5
  }];

  const showcaseBikes = [
    {
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      title: "Sport Racing Bike",
      description: "Custom ceramic coating with premium detailing"
    },
    {
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      title: "Mountain Beast",
      description: "Full protection package with anti-corrosion treatment"
    },
    {
      image: "https://images.unsplash.com/photo-1544191696-15693072b5c8?w=800&h=600&fit=crop",
      title: "Street Cruiser",
      description: "Premium detail with custom polish finish"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      title: "Racing Machine",
      description: "Professional competition-grade detailing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Bike Detailing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your bike with our professional detailing services. 
            From basic washes to complete protection packages.
          </p>
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/booking">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover-scale">
                Book Now
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white hover:bg-white text-blue-600 hover-scale">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bike Showcase Carousel */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
              See the stunning results of our professional detailing services
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {showcaseBikes.map((bike, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-gray-900 border-gray-700 hover-scale transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={bike.image} 
                            alt={bike.title}
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">{bike.title}</h3>
                            <p className="text-sm text-gray-300">{bike.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
            <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
          </Carousel>
        </div>
      </section>

      {/* Services Preview with enhanced animations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional bike detailing packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">✓ {feature}</li>
                      ))}
                    </ul>
                    <Link to="/booking">
                      <Button className="w-full hover-scale">Select Package</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with animations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BikeDetails Pro?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in hover-scale transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Professional detailers with years of experience</p>
            </div>
            
            <div className="text-center animate-fade-in hover-scale transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            
            <div className="text-center animate-fade-in hover-scale transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with enhanced styling */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="animate-fade-in hover-scale transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Detail Your Bike?
          </h2>
          <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Book your appointment today and see the difference professional detailing makes
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover-scale animate-fade-in text-lg px-8 py-4" style={{ animationDelay: '0.4s' }}>
              Book Appointment Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
