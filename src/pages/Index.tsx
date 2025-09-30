import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [dataloading, setdataLoading] = useState(true);


  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => setdataLoading(false), 1500); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <>
    {dataloading ? <Loader /> : 
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <Hero />
      
      <section id="products" className="py-16 max-md:pt-[18rem]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Fresh Products
            </h2>
            <p className="text-lg font-body text-neutral-gray max-w-2xl mx-auto">
              Discover our selection of farm-fresh meat, organic vegetables, seasonal fruits, and local groceries
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-card animate-pulse">
                  <div className="bg-neutral-light h-48 rounded-xl mb-4"></div>
                  <div className="bg-neutral-light h-4 rounded mb-2"></div>
                  <div className="bg-neutral-light h-6 rounded w-20"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg font-body text-neutral-gray">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>}
    </>
  );
};

export default Index;
