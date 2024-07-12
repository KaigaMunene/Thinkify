import { useState } from 'react';
import { useCart } from './context/CartContext';
import CategoryButton from './CategoryButton';
import ItemGrid from './ItemGrid';
import { items, logos, colors } from '../assets/data/ItemsData';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all-sales');
  const { addToCart } = useCart();

  return (
    <div className="p-12 bg-light_purple">
      <div className="flex flex-wrap justify-center mb-4 rounded-lg">
        {Object.keys(items).map((category) => (
          <div key={category} className="w-full sm:w-auto">
            <div className="flex items-center justify-center h-12">
              <CategoryButton
                logo={logos[category]}
                label={category.replace('-', ' ')}
                onClick={() => setSelectedCategory(category)}
                isActive={selectedCategory === category}
                color={colors[category]}
              />
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 capitalize text-dark_purple">
        {selectedCategory.replace('-', ' ')}
      </h2>
      <ItemGrid items={items[selectedCategory]} onAddToCart={addToCart} />
    </div>
  );
}

export default HomePage;
