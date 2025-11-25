import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <header className="w-full bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Plant Shop</Link>

      <nav className="flex gap-6">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="relative">
          🛒
          <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
            {totalCount}
          </span>
        </Link>
      </nav>
    </header>
  );
}
