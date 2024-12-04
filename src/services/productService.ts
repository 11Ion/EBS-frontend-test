import { API_URL } from "../config/apiConfig";

export const fetchProducts = async (sort: 'asc' | 'desc', limit: number, offset: number = 0) => {
  const response = await fetch(`${API_URL}/products?sort=${sort}&limit=${limit}&offset=${offset}`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
};

export const fetchProductsByCategory = async (category: string, sort: 'asc' | 'desc') => {
  const response = await fetch(`${API_URL}/products/category/${category}?sort=${sort}`);
  if (!response.ok) throw new Error('Failed to fetch products by category');
  return response.json();
};
