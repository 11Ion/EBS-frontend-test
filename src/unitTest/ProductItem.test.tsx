import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useCart } from "../hooks/useCart";
import { Product } from "../types/Product";
import ProductItem from "../components/ProductItem";
import "@testing-library/jest-dom";

jest.mock("../hooks/useCart", () => ({
  useCart: jest.fn(),
}));

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  category: "Test Category",
  image: "",
  price: 100.5,
  description: "This is a test product",
  rating: {
    rate: 4.5,
    count: 20,
  },
};

const mockAddToCart = jest.fn();

beforeEach(() => {
  (useCart as jest.Mock).mockReturnValue({
    addToCart: mockAddToCart,
  });
});

describe("ProductItem Component", () => {
  it("renders product details correctly", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockProduct.price.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });

  it("opens and closes popup on image or title click", () => {
    render(<ProductItem product={mockProduct} />);
    fireEvent.click(screen.getByAltText(mockProduct.title));
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    fireEvent.click(screen.getByText("✕"));
    expect(screen.queryByText(mockProduct.description)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(mockProduct.title));
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    fireEvent.click(screen.getByText("✕"));
    expect(screen.queryByText(mockProduct.description)).not.toBeInTheDocument();
  });

  it("calls addToCart when Add to cart button is clicked", () => {
    render(<ProductItem product={mockProduct} />);
    fireEvent.click(screen.getByText("Add to cart"));
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 1);
  });
});
