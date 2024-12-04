import React from 'react';
import { useCart } from '../hooks/useCart';
import { CartItem as CartItemType } from '../types/CartItem';

interface CartItemProps {
  product: CartItemType['product'];
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-6 border rounded-lg p-4 max-md:flex-wrap">

      {/* Img product */}
      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain rounded"
        draggable="false"
      />

      {/* Detail product */}
      <div className="flex flex-col gap-2 flex-1 max-md:min-w-[60%]">
        <h2 className="text-lg max-md:text-base font-semibold">{product.title}</h2>
        <h2 className="text-base font-medium text-gray-500 capitalize">{product.category}</h2>
        <p className="text-black font-semibold">Price: <span className='text-red-500'>${product.price.toFixed(2)}</span></p>
      </div>

      {/* Actions */}
        <div className="flex items-center gap-2">
            <button
              onClick={() => decrementQuantity(product.id)}
              className="px-3 py-1 bg-gray-300 rounded active:bg-gray-400"
            >
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button
              onClick={() => incrementQuantity(product.id)}
              className="px-3 py-1 bg-gray-300 active:bg-gray-400 rounded"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(product.id)}
              className="px-3 py-1 bg-red-500 active:bg-red-600 text-white rounded"
            >
            Delete
          </button>
        </div>
       
    </div>
  );
};

export default CartItem;
