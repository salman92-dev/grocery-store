import React from 'react';
import { Beef, Carrot, Apple, Package } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meat':
        return <Beef className="h-5 w-5" />;
      case 'vegetables':
        return <Carrot className="h-5 w-5" />;
      case 'fruits':
        return <Apple className="h-5 w-5" />;
      case 'groceries':
        return <Package className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getCategoryStyle = (category: string, isSelected: boolean) => {
    const baseStyle = "flex items-center space-x-2 px-6 py-3 rounded-xl font-body font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-button cursor-pointer";
    
    if (isSelected) {
      switch (category) {
        case 'meat':
          return `${baseStyle} bg-meat-red text-white shadow-button`;
        case 'vegetables':
          return `${baseStyle} bg-fresh-green text-white shadow-button`;
        case 'fruits':
          return `${baseStyle} bg-sunny-yellow text-white shadow-button`;
        case 'groceries':
          return `${baseStyle} bg-neutral-gray text-white shadow-button`;
        case 'all':
          return `${baseStyle} bg-gradient-fresh text-white shadow-button`;
        default:
          return `${baseStyle} bg-primary text-white shadow-button`;
      }
    } else {
      return `${baseStyle} bg-white border-2 border-border text-neutral-gray hover:border-fresh-green hover:text-fresh-green shadow-card`;
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <div
        className={getCategoryStyle('all', selectedCategory === 'all')}
        onClick={() => onCategoryChange('all')}
      >
        <Package className="h-5 w-5" />
        <span>All Products</span>
      </div>
      {categories.map((category) => (
        <div
          key={category}
          className={getCategoryStyle(category, selectedCategory === category)}
          onClick={() => onCategoryChange(category)}
        >
          {getCategoryIcon(category)}
          <span className="capitalize">{category}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;