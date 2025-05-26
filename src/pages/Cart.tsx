
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItem {
  id: string;
  package: {
    id: string;
    name: string;
    price: number;
    duration: string;
  };
  addons: Array<{
    id: string;
    name: string;
    price: number;
  }>;
  total: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    bikeType: string;
    preferredDate: string;
    notes: string;
  };
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const updateCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    updateCart(updatedItems);
    toast.success("Item removed from cart");
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }

    const updatedItems = cartItems.map(item => 
      item.id === itemId 
        ? { 
            ...item, 
            quantity: newQuantity,
            total: (item.package.price + item.addons.reduce((sum, addon) => sum + addon.price, 0)) * newQuantity
          }
        : item
    );
    updateCart(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Create booking records
    const bookings = cartItems.map(item => ({
      id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString(),
      status: "confirmed",
      package: item.package,
      addons: item.addons,
      customerInfo: item.customerInfo,
      total: item.total,
      quantity: item.quantity
    }));

    // Save to bookings
    const existingBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    const allBookings = [...existingBookings, ...bookings];
    localStorage.setItem('userBookings', JSON.stringify(allBookings));

    // Clear cart
    localStorage.removeItem('cartItems');
    setCartItems([]);

    toast.success("Booking confirmed successfully!");
    navigate('/bookings');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart</h1>
            <p className="text-gray-600 mb-8">Your cart is currently empty</p>
            <Button onClick={() => navigate('/booking')}>
              Start Booking
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.package.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.package.duration}</p>
                      <p className="text-gray-600 text-sm">
                        Customer: {item.customerInfo.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Preferred Date: {item.customerInfo.preferredDate}
                      </p>
                      {item.customerInfo.bikeType && (
                        <p className="text-gray-600 text-sm">
                          Bike Type: {item.customerInfo.bikeType}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {item.addons.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Add-ons:</h4>
                      <div className="space-y-1">
                        {item.addons.map((addon) => (
                          <div key={addon.id} className="flex justify-between text-sm text-gray-600">
                            <span>{addon.name}</span>
                            <span>+${addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600">Quantity:</span>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-blue-600">
                      ${item.total}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax</span>
                    <span>Calculated at booking</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-blue-600">${getTotalPrice()}</span>
                    </div>
                  </div>
                  
                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/booking')} 
                    className="w-full"
                  >
                    Continue Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
