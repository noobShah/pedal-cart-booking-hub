
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Mike Rodriguez",
      role: "Founder & Lead Detailer",
      experience: "15+ years",
      bio: "Passionate cyclist and detailing expert with over 15 years of experience in premium bike care."
    },
    {
      name: "Sarah Chen",
      role: "Senior Detailer",
      experience: "8+ years",
      bio: "Specialist in ceramic coatings and paint protection with an eye for perfection."
    },
    {
      name: "David Thompson",
      role: "Technical Specialist",
      experience: "10+ years",
      bio: "Expert in bike mechanics and advanced cleaning techniques for all bike types."
    }
  ];

  const stats = [
    { number: "5000+", label: "Bikes Detailed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24hr", label: "Average Turnaround" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BikeDetails Pro</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in professional bike detailing and care
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BikeDetails Pro was founded in 2009 by Mike Rodriguez, a passionate cyclist who 
                  couldn't find the level of care his prized bikes deserved. What started as a 
                  small operation in a garage has grown into the city's premier bike detailing service.
                </p>
                <p>
                  We understand that your bike is more than just transportation – it's your passion, 
                  your freedom, your trusted companion on countless adventures. That's why we treat 
                  every bike that comes through our doors with the same care and attention we'd give our own.
                </p>
                <p>
                  Over the years, we've detailed thousands of bikes, from vintage classics to 
                  cutting-edge racing machines. Our commitment to excellence and customer satisfaction 
                  has made us the go-to choice for serious cyclists throughout the region.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide exceptional bike detailing services that exceed expectations while 
                fostering the cycling community through education, quality care, and unmatched customer service.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Excellence in every detail</li>
                <li>✓ Respect for every bike and owner</li>
                <li>✓ Continuous learning and improvement</li>
                <li>✓ Environmental responsibility</li>
                <li>✓ Supporting the cycling community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to bike care excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.experience} experience</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Certified Detailing Professionals</h3>
              </div>
              <p className="text-gray-600">All team members are certified by the International Detailing Association</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Eco-Friendly Products</h3>
              </div>
              <p className="text-gray-600">We use only environmentally safe, biodegradable cleaning products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Manufacturer Approved</h3>
              </div>
              <p className="text-gray-600">Approved service provider for major bike manufacturers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust BikeDetails Pro
          </p>
          <div className="space-x-4">
            <a href="tel:555-123-4567" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: (555) 123-4567
            </a>
            <a href="mailto:info@bikedetailspro.com" className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
