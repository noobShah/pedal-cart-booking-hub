
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Booking = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bikeType: "",
    preferredDate: "",
    notes: ""
  });

  const packages = [
    {
      id: "basic",
      name: "Basic Wash",
      price: 25,
      duration: "30 minutes",
      features: ["Exterior wash", "Wheel cleaning", "Chain degreasing", "Quick dry"]
    },
    {
      id: "premium",
      name: "Premium Detail",
      price: 75,
      duration: "90 minutes",
      features: ["Everything in Basic", "Deep cleaning", "Polish & wax", "Component maintenance"]
    },
    {
      id: "full-protection",
      name: "Full Protection",
      price: 150,
      duration: "3 hours",
      features: ["Everything in Premium", "Ceramic coating", "Paint protection", "6-month warranty"]
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

  const calculateTotal = () => {
    const packagePrice = packages.find(pkg => pkg.id === selectedPackage)?.price || 0;
    const addonsPrice = selectedAddons.reduce((total, addonId) => {
      const addon = addOns.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return packagePrice + addonsPrice;
  };

  const handleAddonChange = (addonId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, addonId]);
    } else {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    }
  };

  const handleAddToCart = () => {
    if (!selectedPackage) {
      toast.error("Please select a package");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    const selectedAddonItems = addOns.filter(addon => selectedAddons.includes(addon.id));

    const cartItem = {
      id: Date.now().toString(),
      package: selectedPkg,
      addons: selectedAddonItems,
      total: calculateTotal(),
      customerInfo: formData,
      quantity: 1
    };

    // Get existing cart items
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    toast.success("Added to cart successfully!");
    navigate('/cart');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Service</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Select your package, add any extras, and schedule your appointment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Select Your Package</h2>
            <div className="space-y-4 mb-8">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`cursor-pointer transition-all ${
                    selectedPackage === pkg.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.id}
                          checked={selectedPackage === pkg.id}
                          onChange={() => setSelectedPackage(pkg.id)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">{pkg.name}</h3>
                          <p className="text-gray-600">{pkg.duration}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {pkg.features.map((feature, index) => (
                              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">${pkg.price}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons */}
            <h2 className="text-2xl font-bold mb-6">Add-ons (Optional)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {addOns.map((addon) => (
                <div key={addon.id} className="flex items-center space-x-3 p-4 border rounded-lg">
                  <Checkbox
                    id={addon.id}
                    checked={selectedAddons.includes(addon.id)}
                    onCheckedChange={(checked) => handleAddonChange(addon.id, checked as boolean)}
                  />
                  <Label htmlFor={addon.id} className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>{addon.name}</span>
                      <span className="font-semibold text-blue-600">+${addon.price}</span>
                    </div>
                  </Label>
                </div>
              ))}
            </div>

            {/* Customer Information */}
            <h2 className="text-2xl font-bold mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="bikeType">Bike Type</Label>
                <Input
                  id="bikeType"
                  value={formData.bikeType}
                  onChange={(e) => setFormData({...formData, bikeType: e.target.value})}
                  placeholder="e.g., Road bike, Mountain bike"
                />
              </div>
              <div>
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                />
              </div>
            </div>
            <div className="mb-6">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Any special requests or notes about your bike..."
                rows={3}
              />
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedPackage ? (
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold">
                        {packages.find(pkg => pkg.id === selectedPackage)?.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {packages.find(pkg => pkg.id === selectedPackage)?.duration}
                      </p>
                      <p className="font-semibold text-blue-600">
                        ${packages.find(pkg => pkg.id === selectedPackage)?.price}
                      </p>
                    </div>

                    {selectedAddons.length > 0 && (
                      <div className="border-b pb-4">
                        <h4 className="font-semibold mb-2">Add-ons</h4>
                        {selectedAddons.map(addonId => {
                          const addon = addOns.find(a => a.id === addonId);
                          return (
                            <div key={addonId} className="flex justify-between text-sm">
                              <span>{addon?.name}</span>
                              <span className="text-blue-600">+${addon?.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="text-xl font-bold">
                      Total: ${calculateTotal()}
                    </div>

                    <Button onClick={handleAddToCart} className="w-full" size="lg">
                      Add to Cart
                    </Button>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Select a package to see order summary
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
