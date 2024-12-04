import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header: React.FC = () => {
  const location = useLocation();
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="w-full py-4 bg-black absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-5 flex justify-start items-center gap-4">
        <Link
          to="/"
          className={`select-none text-xl font-bold hover:transition-opacity hover:duration-300 hover:opacity-70 ${
            location.pathname === "/" ? "text-green-400" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/cart"
          className={`flex gap-2 select-none text-xl font-bold hover:transition-opacity hover:duration-300 hover:opacity-70 ${
            location.pathname === "/cart" ? "text-green-400" : "text-white"
          }`}
        >
          Cart <span className="w-8 h-8 flex text-white justify-center items-center bg-red-500 rounded-full">{totalQuantity}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
