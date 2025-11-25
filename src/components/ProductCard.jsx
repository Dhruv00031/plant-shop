import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => !!state.cart.items[product.id]);

  return (
    <div className="border rounded p-3 flex flex-col">
      <img src={product.image} alt={product.name} className="h-40 object-cover mb-3" />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="mb-2"></p>
      <button
        className={mt-auto py-2 px-3 rounded }
        disabled={inCart}
        onClick={() => dispatch(addToCart(product))}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
