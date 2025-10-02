import React from 'react';
import { FileText, Shield, Eye, Users, Lock, Phone } from 'lucide-react';
import Header from '@/components/Header';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Shield className="h-16 w-16 text-fresh-green mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fresh-green mb-6">
              Privacy <span className="text-meat-red">Policy</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-neutral-gray leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
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
                  <Eye className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Introduction</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed">
                  At FreshMart, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                  grocery delivery service, website, and mobile application.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Information We Collect</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Personal Information</h3>
                    <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                      <li>• Name, email address, and phone number</li>
                      <li>• Delivery address and location data</li>
                      <li>• Payment information (processed securely)</li>
                      <li>• Order history and preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                      <li>• Device information and IP address</li>
                      <li>• Location data for delivery purposes</li>
                      <li>• Usage patterns and preferences</li>
                      <li>• Communication with our customer service</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">How We Use Your Information</h2>
                </div>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-3 ml-4">
                  <li>• Process and fulfill your grocery orders</li>
                  <li>• Provide customer support and respond to inquiries</li>
                  <li>• Send order confirmations and delivery updates</li>
                  <li>• Improve our products and services</li>
                  <li>• Ensure security and prevent fraud</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Send promotional offers (with your consent)</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Information Sharing</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                  <li>• With delivery partners to fulfill your orders</li>
                  <li>• With payment processors for secure transactions</li>
                  <li>• When required by law or legal process</li>
                  <li>• To protect our rights and prevent fraud</li>
                  <li>• With your explicit consent</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Data Security</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, 
                  secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Your Rights</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="font-body text-neutral-gray leading-relaxed space-y-2 ml-4">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your data</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Cookies and Tracking</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                  and personalize content. You can manage your cookie preferences through your browser settings. Note that 
                  disabling certain cookies may affect the functionality of our service.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-fresh-green-light/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="h-6 w-6 text-fresh-green" />
                  <h2 className="text-2xl font-heading font-bold text-foreground">Contact Us</h2>
                </div>
                <p className="font-body text-neutral-gray leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 font-body text-neutral-gray">
                  <p><strong>Phone:</strong> +92 309 0559069</p>
                  <p><strong>Email:</strong> privacy@freshmart.com</p>
                  <p><strong>Address:</strong> Lahore, Punjab, Pakistan</p>
                </div>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Policy Updates</h2>
                <p className="font-body text-neutral-gray leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the 
                  "Last Updated" date. Your continued use of our service after such changes constitutes acceptance of the updated policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;