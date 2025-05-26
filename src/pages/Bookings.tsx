
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Package, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Booking {
  id: string;
  date: string;
  status: string;
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
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    bikeType: string;
    preferredDate: string;
    notes: string;
  };
  total: number;
  quantity: number;
}

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const userBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    setBookings(userBookings.sort((a: Booking, b: Booking) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Bookings</h1>
            <p className="text-gray-600 mb-8">You haven't made any bookings yet</p>
            <Button onClick={() => window.location.href = '/booking'}>
              Make Your First Booking
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
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Bookings</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Track and manage your bike detailing appointments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Booking History ({bookings.length} total)
          </h2>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5 text-blue-600" />
                      <span>{booking.package.name}</span>
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      Booking ID: {booking.id}
                    </p>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Booking Details */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      Booking Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Booked:</span> {formatDate(booking.date)}</p>
                      <p><span className="text-gray-600">Preferred Date:</span> {booking.customerInfo.preferredDate}</p>
                      <p><span className="text-gray-600">Duration:</span> {booking.package.duration}</p>
                      <p><span className="text-gray-600">Quantity:</span> {booking.quantity}</p>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <User className="h-4 w-4 mr-2 text-blue-600" />
                      Customer Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Name:</span> {booking.customerInfo.name}</p>
                      <p><span className="text-gray-600">Email:</span> {booking.customerInfo.email}</p>
                      <p><span className="text-gray-600">Phone:</span> {booking.customerInfo.phone}</p>
                      {booking.customerInfo.bikeType && (
                        <p><span className="text-gray-600">Bike Type:</span> {booking.customerInfo.bikeType}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      Service Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Package:</span> ${booking.package.price}</p>
                      {booking.addons.length > 0 && (
                        <div>
                          <p className="text-gray-600 mb-1">Add-ons:</p>
                          {booking.addons.map((addon) => (
                            <p key={addon.id} className="ml-2">
                              • {addon.name} (+${addon.price})
                            </p>
                          ))}
                        </div>
                      )}
                      <p className="font-semibold text-blue-600 text-base">
                        Total: ${booking.total}
                      </p>
                    </div>
                  </div>
                </div>

                {booking.customerInfo.notes && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">Notes:</h4>
                    <p className="text-sm text-gray-600">{booking.customerInfo.notes}</p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t">
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                    {booking.status === 'confirmed' && (
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      Book Again
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Something Else?</h3>
          <div className="space-x-4">
            <Button onClick={() => window.location.href = '/booking'}>
              Book New Service
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/services'}>
              View Services
            </Button>
            <Button variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bookings;
