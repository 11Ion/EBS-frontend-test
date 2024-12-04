import React, { useState } from "react";
import Button from "./Button";
import { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-2 rounded-lg border justify-between">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-52 object-contain cursor-pointer hover:scale-95 hover:duration-300 hover:transition-all"
          draggable="false"
          onClick={togglePopup}
        />
        <h3
          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} 
          className="text-lg max-md:text-base font-medium text-black uppercase cursor-pointer hover:underline hover:duration-300 hover:transition-all"
          onClick={togglePopup} 
        >
          {product.title}
        </h3>
        <p className="text-sm font-normal text-gray-500 capitalize">
          {product.category}
        </p>
        <p className="font-bold text-center text-red-500">
          ${product.price.toFixed(2)}
        </p>
        <Button label="Add to cart" onClick={handleAddToCart}></Button>
      </div>

      {/* Popup */}
      {showPopup && (
        <>
        <div 
          onClick={togglePopup}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          </div>
          <div className="bg-white w-4/5 max-w-4xl p-6 rounded-lg shadow-lg fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[600px] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <div className="flex gap-6 items-center max-md:flex-col">
              {/* Imaginea produsului */}
              <div className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-64 h-64 object-contain rounded-lg"
                />
              </div>

              {/* Detalii produs */}
              <div className="flex flex-col flex-1">
                <h2 className="text-2xl max-md:text-xl max-sm:text-lg font-bold mb-4">{product.title}</h2>
                <p className="text-lg max-md:text-base text-gray-500 mb-4">
                  {product.description}
                </p>
                <p className="text-xl max-md:text-lg font-bold text-red-500 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mb-4 capitalize">
                  <span className="text-black font-semibold">Category: </span>
                  {product.category}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                < span className="text-black font-semibold">Rating: </span>
                  {product.rating?.rate} ({product.rating?.count} reviews)
                </p>
                <Button
                  label="Add to cart"
                  onClick={handleAddToCart}
                 ></Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductItem;
