import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Product } from "../types/Product";
import ProductItem from "./ProductItem";
import { useCart } from "../hooks/useCart";
import "@testing-library/jest-dom"; 

jest.mock("../hooks/useCart", () => ({
  useCart: jest.fn(),
}));

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 109.95,
  category: "test category",
  description: "This is a test product description.",
  image: "https://via.placeholder.com/150",
  rating: {
    rate: 4.5,
    count: 10,
  },
};

describe("ProductItem Component", () => {
  const addToCartMock = jest.fn();

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      addToCart: addToCartMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the product details correctly", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

    const image = screen.getByAltText(mockProduct.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.image);
  });

  it("should open and close the popup when clicking on image or title", () => {
    render(<ProductItem product={mockProduct} />);

    fireEvent.click(screen.getByAltText(mockProduct.title));
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    fireEvent.click(screen.getByText("✕"));
    expect(screen.queryByText(mockProduct.description)).not.toBeInTheDocument();
  });

  it("should call addToCart when clicking 'Add to cart' button", () => {
    render(<ProductItem product={mockProduct} />);

    fireEvent.click(screen.getByText("Add to cart"));
    expect(addToCartMock).toHaveBeenCalledWith(mockProduct, 1);
    expect(addToCartMock).toHaveBeenCalledTimes(1);
  });
});
