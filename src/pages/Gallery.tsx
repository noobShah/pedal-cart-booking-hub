
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Award, Zap, Shield } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Work", icon: Star },
    { id: "racing", name: "Racing Bikes", icon: Zap },
    { id: "cruiser", name: "Cruisers", icon: Award },
    { id: "mountain", name: "Mountain Bikes", icon: Shield },
    { id: "sport", name: "Sport Bikes", icon: Star }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "/ninja.jpg",
      title: "Kawasaki Ninja - Racing Edition",
      category: "racing",
      description: "Full ceramic coating with custom polish",
      service: "Premium Detail",
      rating: 5,
      beforeAfter: false
    },
    {
      id: 2,
      image: "/harley.jpg",
      title: "Harley Davidson - Classic Cruiser",
      category: "cruiser", 
      description: "Premium leather treatment and chrome polish",
      service: "Full Protection",
      rating: 5,
      beforeAfter: false
    },
    {
      id: 3,
      image: "/r1.jpg",
      title: "Yamaha R1 - Track Ready",
      category: "racing",
      description: "Competition-grade detailing package",
      service: "Full Protection",
      rating: 5,
      beforeAfter: false
    },
    {
      id: 4,
      image: "/bmw.jpg",
      title: "BMW Mountain Explorer",
      category: "mountain",
      description: "Anti-corrosion treatment for off-road adventures",
      service: "Premium Detail",
      rating: 4,
      beforeAfter: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop",
      title: "Ducati Panigale V4",
      category: "sport",
      description: "Paint protection film with premium wax",
      service: "Full Protection",
      rating: 5,
      beforeAfter: false
    },
    {
      id: 6,
      image: "/cbr.jpg",
      title: "Honda CBR - Sport Edition",
      category: "sport",
      description: "Complete detailing with headlight restoration",
      service: "Premium Detail",
      rating: 5,
      beforeAfter: false
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getServiceBadgeColor = (service: string) => {
    switch (service) {
      case "Basic Wash":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Premium Detail":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Full Protection":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Work Gallery
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in text-blue-100">
            Witness the transformation power of professional bike detailing
          </p>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`hover-scale transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-white/80 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover-scale transition-all duration-500 hover:shadow-2xl animate-fade-in bg-white/90 backdrop-blur-sm border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative group">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200 mb-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          {item.beforeAfter && (
                            <Badge className="bg-green-500 text-white text-xs">
                              Before/After
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <Badge className={`${getServiceBadgeColor(item.service)} border`}>
                        {item.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-300/10 rounded-full translate-x-30 translate-y-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Want Your Bike to Look This Good?
          </h2>
          <p className="text-xl mb-8 animate-fade-in text-blue-100">
            Book your professional detailing service today and join our satisfied customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover-scale font-semibold px-8">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale font-semibold px-8">
              View Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
