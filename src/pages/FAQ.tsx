import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How fresh are your products?",
      answer: "All our products are sourced daily from local farms and suppliers. We guarantee maximum freshness with same-day delivery for most items. Our vegetables and fruits are harvested within 24-48 hours of delivery.",
      category: "products"
    },
    {
      id: 2,
      question: "What are your delivery hours?",
      answer: "We offer delivery 7 days a week from 8:00 AM to 10:00 PM. You can schedule deliveries at your convenience, and we also offer express delivery within 2-3 hours for urgent orders.",
      category: "delivery"
    },
    {
      id: 3,
      question: "How do I place an order via WhatsApp?",
      answer: "Simply add items to your cart and click 'Order via WhatsApp'. The app will automatically create a message with your order details and location. You can then confirm your order directly through WhatsApp chat.",
      category: "orders"
    },
    {
      id: 4,
      question: "Do you accept returns or exchanges?",
      answer: "Yes, we have a 100% satisfaction guarantee. If you're not satisfied with any product, contact us within 24 hours of delivery and we'll arrange a return or exchange. Fresh products are eligible for immediate replacement.",
      category: "returns"
    },
    {
      id: 5,
      question: "Are your meat products halal certified?",
      answer: "Yes, all our meat products are halal certified and sourced from trusted suppliers. We maintain strict quality standards and proper storage conditions to ensure freshness and safety.",
      category: "products"
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "Currently, we accept cash on delivery (COD). We're working on adding online payment options including card payments and mobile banking for your convenience.",
      category: "payment"
    },
    {
      id: 7,
      question: "Is there a minimum order amount?",
      answer: "Our minimum order amount is PKR 500 for free delivery. Orders below this amount will have a small delivery fee of PKR 100. We encourage bulk orders for better value and reduced delivery costs.",
      category: "orders"
    },
    {
      id: 8,
      question: "How do you ensure product quality during delivery?",
      answer: "We use temperature-controlled packaging for perishable items, insulated bags for frozen products, and careful handling procedures. Our delivery team is trained to maintain product quality from our facility to your door.",
      category: "delivery"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'products', label: 'Products' },
    { value: 'delivery', label: 'Delivery' },
    { value: 'orders', label: 'Orders' },
    { value: 'payment', label: 'Payment' },
    { value: 'returns', label: 'Returns' }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <HelpCircle className="h-16 w-16 text-fresh-green mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-fresh-green mb-6">
              Frequently Asked <span className="text-meat-red">Questions</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-neutral-gray leading-relaxed">
              Find answers to common questions about our products, delivery, and services.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-gray" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg border-fresh-green-light focus:border-fresh-green"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-xl font-body font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-fresh text-white shadow-button'
                      : 'bg-white text-neutral-gray border border-border hover:border-fresh-green hover:text-fresh-green'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-fresh-green-light/10 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-heading font-semibold text-foreground pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-6 w-6 text-fresh-green flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-fresh-green flex-shrink-0" />
                    )}
                  </button>

                  {/* Animated Answer */}
                  <AnimatePresence>
                    {openItems.includes(item.id) && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden px-6"
                      >
                        <div className="border-t border-fresh-green-light/20 pt-4 pb-6">
                          <p className="font-body text-neutral-gray leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-neutral-gray mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  No results found
                </h3>
                <p className="font-body text-neutral-gray">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-card text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="font-body text-neutral-gray text-lg mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/923152054175', '_blank')}
                className="px-8 py-3 bg-gradient-fresh text-white font-heading font-semibold rounded-xl shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Chat on WhatsApp
              </button>
              <button
                onClick={() => (window.location.href = '/contact')}
                className="px-8 py-3 bg-white border-2 border-fresh-green text-fresh-green font-heading font-semibold rounded-xl hover:bg-fresh-green hover:text-white transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
