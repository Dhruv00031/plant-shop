import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  // cartSlice uses items as an object keyed by product id
  const inCart = useSelector((state) => !!state.cart.items?.[product.id]);

  return (
    <div className="border rounded p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600 mb-2">₹{product.price}</p>

      <button
        className="mt-auto py-2 px-3 rounded bg-green-600 text-white disabled:bg-gray-400"
        disabled={inCart}
        onClick={() => dispatch(addToCart(product))}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
