import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <footer className="bg-white border-t border-fresh-green-light/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-fresh rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-fresh-green">FreshMart</h3>
                <p className="text-sm text-neutral-gray font-body">Farm Fresh Groceries</p>
              </div>
            </div>
            <p className="font-body text-neutral-gray leading-relaxed">
              Your trusted partner for fresh, quality groceries delivered straight from local farms to your doorstep.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-fresh-green-light/20 rounded-lg hover:bg-fresh-green-light/40 transition-colors">
                <Facebook className="h-5 w-5 text-fresh-green" />
              </a>
              <a href="#" className="p-2 bg-fresh-green-light/20 rounded-lg hover:bg-fresh-green-light/40 transition-colors">
                <Instagram className="h-5 w-5 text-fresh-green" />
              </a>
              <a href="#" className="p-2 bg-fresh-green-light/20 rounded-lg hover:bg-fresh-green-light/40 transition-colors">
                <Twitter className="h-5 w-5 text-fresh-green" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="font-body text-neutral-gray hover:text-fresh-green transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="font-body text-neutral-gray hover:text-fresh-green transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fresh-green" />
                <span className="font-body text-neutral-gray">+92 315 2054175</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fresh-green" />
                <span className="font-body text-neutral-gray">info@freshmart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-fresh-green" />
                <span className="font-body text-neutral-gray">Lahore, Punjab, Pakistan</span>
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => window.open('https://wa.me/923152054175', '_blank')}
                className="px-6 py-2 bg-gradient-fresh text-white font-body font-medium rounded-lg hover:bg-fresh-green transition-all duration-300 shadow-soft hover:shadow-button"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fresh-green-light/20 mt-8 pt-8 text-center">
          <p className="font-body text-neutral-gray">
            © 2024 FreshMart. All rights reserved. | Bringing freshness to your doorstep.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;