import React, { useState,useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Loader from '@/components/Loader';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const { toast } = useToast();
  const [isGettingLocation, setIsGettingLocation] = useState(false);

    const [dataloading, setdataLoading] = useState(true);
  
  
    useEffect(() => {
      const timer: NodeJS.Timeout = setTimeout(() => setdataLoading(false), 500); // simulate delay
      return () => clearTimeout(timer);
    }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    });
  };

  const handleWhatsAppOrder = async () => {
    if (state.items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some items to your cart before ordering.",
        variant: "destructive",
      });
      return;
    }

    setIsGettingLocation(true);

    try {
      const location = await getCurrentLocation();
      
      // Create order message
      const orderItems = state.items
        .map((item) => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
        .join('\n');

      const googleMapsLink = `https://maps.google.com/?q=${location.latitude},${location.longitude}`;
      
      const message = `🛒 *New Order from FreshMart*\n\n*Items:*\n${orderItems}\n\n*Total: $${state.total.toFixed(2)}*\n\n*Delivery Location:*\n${googleMapsLink}\n\nPlease confirm this order. Thank you!`;

      // Replace with your WhatsApp number (without + sign)
      const whatsappNumber = '923152054175'; // Updated WhatsApp number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Opening WhatsApp...",
        description: "Your order details have been prepared for WhatsApp.",
      });

    } catch (error) {
      console.error('Error getting location:', error);
      
      // Fallback without location
      const orderItems = state.items
        .map((item) => `• PKR : ${item.name} x${item.quantity} - PKR : ${(item.price * item.quantity).toFixed(2)}`)
        .join('\n');

      const message = `🛒 *New Order from FreshMart*\n\n*Items:*\n${orderItems}\n\n*Total: PKR : ${state.total.toFixed(2)}*\n\nPlease confirm this order. Thank you!`;

      const whatsappNumber = '923152054175'; // Updated WhatsApp number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Opening WhatsApp...",
        description: "Order prepared without location (location access denied).",
        variant: "default",
      });
    } finally {
      setIsGettingLocation(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-neutral-gray mx-auto mb-6" />
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-lg font-body text-neutral-gray mb-8">Add some fresh products to get started!</p>
            <Button
              onClick={() => window.location.href = '/#shop'}
              className="bg-gradient-fresh text-white hover:bg-fresh-green shadow-button"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      {
        dataloading ? <Loader /> : 
        <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-8">Shopping Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-card">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:justify-between space-x-4">
                    <div className='flex items-center gap-4'>
                      <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-foreground">{item.name}</h3>
                      <p className="text-neutral-gray font-body capitalize">{item.category}</p>
                      <p className="text-xl font-heading font-bold text-fresh-green">PKR : {item.price.toFixed(2)}</p>
                    </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 !ml-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="text-lg font-heading font-semibold w-8 text-center">{item.quantity}</span>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromCart(item.id)}
                        className="border-meat-red text-meat-red hover:bg-meat-red hover:text-white ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between font-body">
                      <span className="text-neutral-gray">{item.name} x{item.quantity}</span>
                      <span className="font-semibold">PKR : {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-xl font-heading font-bold">
                    <span>Total:</span>
                    <span className="text-fresh-green">PKR : {state.total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleWhatsAppOrder}
                  disabled={isGettingLocation}
                  className="w-full bg-gradient-fresh text-white hover:bg-fresh-green shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 mb-4"
                >
                  {isGettingLocation ? (
                    <>
                      <MapPin className="h-5 w-5 mr-2 animate-pulse" />
                      Getting Location...
                    </>
                  ) : (
                    <>
                      <MapPin className="h-5 w-5 mr-2" />
                      Order via WhatsApp
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full border-meat-red text-meat-red hover:bg-meat-red hover:text-white"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;