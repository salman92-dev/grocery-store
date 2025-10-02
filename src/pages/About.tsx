import React from 'react';
import { Leaf, Users, Award, Truck, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fresh-green mb-6">
              About <span className="text-meat-red">FreshMart</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-neutral-gray leading-relaxed mb-8">
              We're passionate about bringing you the freshest, highest quality groceries straight from local farms to your table. 
              Our commitment to freshness, sustainability, and community drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="font-body text-neutral-gray text-lg leading-relaxed mb-6">
                Founded in 2020, FreshMart began as a small family business with a simple mission: 
                to connect our community with the freshest, most nutritious food possible. We started 
                by partnering with local farmers and have grown into a trusted source for premium groceries.
              </p>
              <p className="font-body text-neutral-gray text-lg leading-relaxed">
                Today, we continue to uphold our founding values of quality, freshness, and community 
                support, ensuring every product meets our rigorous standards before it reaches your door.
              </p>
            </div>
            <div className="bg-gradient-fresh rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="font-body text-white/90 text-lg leading-relaxed">
                To revolutionize grocery shopping by providing farm-fresh, premium quality products 
                with convenient delivery, while supporting local farmers and promoting sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
            What Makes Us Different
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="p-4 bg-fresh-green-light rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-fresh-green" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">100% Fresh</h3>
              <p className="font-body text-neutral-gray">
                We guarantee the freshest products, sourced daily from trusted local farms and suppliers.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="p-4 bg-sunny-yellow-light rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-sunny-yellow" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Local Partners</h3>
              <p className="font-body text-neutral-gray">
                Supporting local farmers and businesses to strengthen our community and economy.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="p-4 bg-meat-red-light rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-meat-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Premium Quality</h3>
              <p className="font-body text-neutral-gray">
                Every product is carefully selected and inspected to meet our high-quality standards.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-card text-center">
              <div className="p-4 bg-neutral-light rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Truck className="h-8 w-8 text-neutral-gray" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Fast Delivery</h3>
              <p className="font-body text-neutral-gray">
                Quick and reliable delivery service to get fresh groceries to your door on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="h-16 w-16 text-meat-red mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Experience Fresh?
            </h2>
            <p className="font-body text-neutral-gray text-lg mb-8">
              Join thousands of satisfied customers who trust FreshMart for their grocery needs.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-8 py-4 bg-gradient-fresh text-white font-heading font-semibold rounded-xl shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Shopping Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;