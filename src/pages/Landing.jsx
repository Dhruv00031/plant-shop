import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/assets/landing-bg.jpg')"
      }}
    >
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Plant Shop</h1>

      <p className="max-w-xl text-center text-lg mb-6 drop-shadow-lg">
        Welcome to Plant Shop — your home for beautiful, healthy, hand-picked houseplants.
        We bring nature indoors with fresh greenery delivered right to your doorstep.
      </p>

      <Link
        to="/products"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-xl rounded-lg shadow-lg transition"
      >
        Get Started
      </Link>
    </div>
  );
}
