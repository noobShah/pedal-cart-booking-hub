
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Work" },
    { id: "racing", name: "Racing Bikes" },
    { id: "cruiser", name: "Cruisers" },
    { id: "mountain", name: "Mountain Bikes" },
    { id: "sport", name: "Sport Bikes" }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      title: "Kawasaki Ninja - Racing Edition",
      category: "racing",
      description: "Full ceramic coating with custom polish"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
      title: "Harley Davidson - Classic Cruiser",
      category: "cruiser", 
      description: "Premium leather treatment and chrome polish"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544191696-15693072b5c8?w=600&h=400&fit=crop",
      title: "Yamaha R1 - Track Ready",
      category: "racing",
      description: "Competition-grade detailing package"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      title: "BMW Mountain Explorer",
      category: "mountain",
      description: "Anti-corrosion treatment for off-road adventures"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop",
      title: "Ducati Panigale V4",
      category: "sport",
      description: "Paint protection film with premium wax"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      title: "Honda CBR - Sport Edition",
      category: "sport",
      description: "Complete detailing with headlight restoration"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Work Gallery
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in">
            Witness the transformation power of professional bike detailing
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="hover-scale transition-all duration-200"
              >
                {category.name}
              </Button>
            ))}
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
                className="overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative group">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Want Your Bike to Look This Good?
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            Book your professional detailing service today
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover-scale animate-fade-in">
            Book Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
