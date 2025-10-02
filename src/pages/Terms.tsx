import React from 'react';
import { FileText, AlertTriangle, CreditCard, Truck, RotateCcw, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Scale className="h-16 w-16 text-fresh-green mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fresh-green mb-6">
              Terms & <span className="text-meat-red">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-neutral-gray leading-relaxed">
              Please read these terms carefully before using our grocery delivery service.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <div className="space-y-8">
              {/* Last Updated */}
              <div className="text-center pb-8 border-b border-fresh-green-light/20">
                <p className="font-body text-neutral-gray">
                  <strong>Last Updated:</strong> December 2024
                </p>
              </div>

              {/* Introduction */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Agreement to Terms</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed">
                  By accessing and using FreshMart's grocery delivery service, website, or mobile application, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, then you may not access our service.
                </p>
              </section>

              {/* Service Description */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Service Description</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed mb-4">
                  FreshMart provides an online grocery delivery service, offering fresh meat, vegetables, fruits, and local groceries. Our services include:
                </p>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                  <li>• Online ordering through our website and mobile app</li>
                  <li>• Home delivery of grocery products</li>
                  <li>• Customer support via WhatsApp and other channels</li>
                  <li>• Product recommendations and personalized shopping experience</li>
                </ul>
              </section>

              {/* Orders and Payment */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <CreditCard className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Orders and Payment</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Order Placement</h3>
                    <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                      <li>• Orders can be placed through our website or WhatsApp</li>
                      <li>• All orders are subject to product availability</li>
                      <li>• We reserve the right to limit quantities per customer</li>
                      <li>• Minimum order value is PKR 500 for free delivery</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Payment Terms</h3>
                    <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                      <li>• We currently accept cash on delivery (COD)</li>
                      <li>• Payment is due upon delivery of goods</li>
                      <li>• Prices are subject to change without notice</li>
                      <li>• All prices include applicable taxes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Delivery Terms */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Delivery Terms</h2>
                </div>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-3 ml-4">
                  <li>• Delivery times are estimates and not guaranteed</li>
                  <li>• We deliver 7 days a week between 8:00 AM and 10:00 PM</li>
                  <li>• Accurate delivery address and contact information must be provided</li>
                  <li>• Someone must be available to receive the delivery</li>
                  <li>• Delivery fees apply to orders under PKR 500</li>
                  <li>• We may substitute unavailable items with similar products</li>
                </ul>
              </section>

              {/* Returns and Refunds */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <RotateCcw className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Returns and Refunds</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Quality Guarantee</h3>
                    <p className="font-body text-neutral-gray leading-relaxed">
                      We stand behind the quality of our products. If you're not satisfied with any item, contact us within 24 hours of delivery for a replacement or refund.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Return Process</h3>
                    <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                      <li>• Contact our customer service immediately</li>
                      <li>• Provide order details and reason for return</li>
                      <li>• Keep the original packaging when possible</li>
                      <li>• Refunds will be processed within 3-5 business days</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">User Responsibilities</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed mb-4">
                  As a user of our service, you agree to:
                </p>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                  <li>• Provide accurate and complete information</li>
                  <li>• Use the service only for lawful purposes</li>
                  <li>• Respect our delivery personnel</li>
                  <li>• Pay for orders in a timely manner</li>
                  <li>• Not misuse or abuse our customer service</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Limitation of Liability</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed">
                  FreshMart's liability for any damages arising from the use of our service shall not exceed the amount paid for the specific order in question. We are not responsible for indirect, incidental, or consequential damages. Our liability is limited to the extent permitted by applicable law.
                </p>
              </section>

              {/* Product Information */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Product Information</h2>
                </div>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                  <li>• Product images are for illustration purposes only</li>
                  <li>• Actual products may vary slightly from images</li>
                  <li>• We strive to ensure accurate product descriptions</li>
                  <li>• Weights and quantities are approximate</li>
                  <li>• Seasonal products are subject to availability</li>
                </ul>
              </section>

              {/* Privacy and Data */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Privacy and Data Protection</h2>
                <p className="font-body text-neutral-gray leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Modifications to Terms</h2>
                <p className="font-body text-neutral-gray leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of the service after changes are posted constitutes acceptance of the modified terms.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-fresh-green-light/20 rounded-xl p-6">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Contact Information</h2>
                <p className="font-body text-neutral-gray leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 font-body text-neutral-gray">
                  <p><strong>Phone:</strong> +92 315 2054175</p>
                  <p><strong>Email:</strong> legal@freshmart.com</p>
                  <p><strong>Address:</strong> Lahore, Punjab, Pakistan</p>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Governing Law</h2>
                <p className="font-body text-neutral-gray leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Lahore, Punjab, Pakistan.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Terms;