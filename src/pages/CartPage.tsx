import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const { cart, clearCart, totalPrice } = useCart();

  return (
    <div className="container mx-auto px-5 pt-24">
      <h1 className="text-2xl max-md:text-xl max-sm:text-lg font-bold text-black mb-6">
        Your Shopping Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-lg max-md:text-base text-gray-500">The cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total Price:</h2>
            <p className="text-xl font-bold text-red-500">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Clear Cart */}
          <div className="flex justify-end mt-6">
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-red-500 text-white rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
