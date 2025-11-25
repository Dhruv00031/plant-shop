import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, deleteItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);

  const cartArray = Object.values(items);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>

      <p className="text-lg mb-4">Total items: {totalCount}</p>
      <p className="text-lg font-semibold mb-6">Total cost: ₹{totalPrice}</p>

      {cartArray.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      <div className="flex flex-col gap-6">
        {cartArray.map(({ product, qty }) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-4 border rounded shadow"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-bold text-xl">{product.name}</h3>
              <p className="text-gray-700">₹{product.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 bg-gray-300 rounded"
                onClick={() => dispatch(decreaseQty(product.id))}
              >
                -
              </button>

              <span className="text-lg font-semibold">{qty}</span>

              <button
                className="px-3 py-1 bg-gray-300 rounded"
                onClick={() => dispatch(increaseQty(product.id))}
              >
                +
              </button>
            </div>

            <button
              className="ml-4 px-3 py-1 bg-red-600 text-white rounded"
              onClick={() => dispatch(deleteItem(product.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => alert('Checkout Coming Soon!')}
          className="px-5 py-2 bg-green-700 text-white rounded-lg"
        >
          Checkout
        </button>

        <Link
          to="/products"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
