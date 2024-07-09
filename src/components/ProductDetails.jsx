import { useState } from 'react';
import { useCart } from './context/CartContext';
import CategoryButton from './CategoryButton';
import ItemGrid from './ItemGrid';
import { items, logos, colors } from './ItemsData';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all-sales');
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {Object.keys(items).map((category) => (
          <CategoryButton
            key={category}
            logo={logos[category]}
            label={category.replace('-', ' ')}
            onClick={() => setSelectedCategory(category)}
            isActive={selectedCategory === category}
            color={colors[category]}
          />
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
