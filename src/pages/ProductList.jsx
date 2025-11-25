import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductList(){
  const [category, setCategory] = useState('all');
  const categories = Array.from(new Set(products.map(p=>p.category)));

  const filtered = category === 'all' ? products : products.filter(p=>p.category === category);

  return (
    <div className=\"p-6\">
      <h2 className=\"text-2xl font-bold mb-4\">Products</h2>

      <div className=\"mb-4 flex gap-2\">
        <button className={py-1 px-3 rounded } onClick={()=>setCategory('all')}>All</button>
        {categories.map(cat=> (
          <button key={cat} className={py-1 px-3 rounded } onClick={()=>setCategory(cat)}>{cat}</button>
        ))}
      </div>

      <div className=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
