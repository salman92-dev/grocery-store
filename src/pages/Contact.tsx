import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Message:*\n${formData.message}`;
    
    const whatsappUrl = `https://wa.me/923152054175?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message sent!",
      description: "Opening WhatsApp to send your message.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fresh-green mb-6">
              Get in <span className="text-meat-red">Touch</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-neutral-gray leading-relaxed">
              Have questions about our products? Need help with your order? We're here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-card">
                <div className="p-3 bg-fresh-green-light rounded-xl">
                  <Phone className="h-6 w-6 text-fresh-green" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">Phone</h3>
                  <p className="font-body text-neutral-gray">+92 315 2054175</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-card">
                <div className="p-3 bg-sunny-yellow-light rounded-xl">
                  <Mail className="h-6 w-6 text-sunny-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">Email</h3>
                  <p className="font-body text-neutral-gray">info@freshmart.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-card">
                <div className="p-3 bg-meat-red-light rounded-xl">
                  <MapPin className="h-6 w-6 text-meat-red" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">Address</h3>
                  <p className="font-body text-neutral-gray">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-card">
                <div className="p-3 bg-neutral-light rounded-xl">
                  <Clock className="h-6 w-6 text-neutral-gray" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">Business Hours</h3>
                  <p className="font-body text-neutral-gray">24/7 - We're always here for you!</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Contact */}
            <div className="mt-8">
              <Button
                onClick={() => window.open('https://wa.me/923152054175', '_blank')}
                className="w-full bg-gradient-fresh text-white hover:bg-fresh-green shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat with us on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="border-fresh-green-light focus:border-fresh-green"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="border-fresh-green-light focus:border-fresh-green"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-body font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="border-fresh-green-light focus:border-fresh-green"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  required
                  rows={5}
                  className="border-fresh-green-light focus:border-fresh-green resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-fresh text-white hover:bg-fresh-green shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;