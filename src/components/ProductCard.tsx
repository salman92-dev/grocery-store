import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'meat':
      return 'border-meat-red-light bg-meat-red-light/30';
    case 'vegetables':
      return 'border-fresh-green-light bg-fresh-green-light/30';
    case 'fruits':
      return 'border-sunny-yellow-light bg-sunny-yellow-light/30';
    case 'groceries':
      return 'border-neutral-light bg-neutral-light/50';
    default:
      return 'border-neutral-light bg-neutral-light/30';
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-2 ${getCategoryColor(product.category)}`}>
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 text-xs font-body font-medium rounded-full ${
            product.category === 'meat' ? 'bg-meat-red text-white' :
            product.category === 'vegetables' ? 'bg-fresh-green text-white' :
            product.category === 'fruits' ? 'bg-sunny-yellow text-white' :
            'bg-neutral-gray text-white'
          }`}>
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-heading font-bold text-fresh-green">
            PKR : {product.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-gradient-fresh hover:bg-fresh-green text-white shadow-button hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;