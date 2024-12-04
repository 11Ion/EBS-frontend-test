import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories, fetchProductsByCategory } from '../services/productService';
import { Product } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (sort: 'asc' | 'desc', limit: number, offset: number = 0) => {
    setIsLoading(true);
    try {
      const data = await fetchProducts(sort, limit, offset);
      setProducts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const getProductsByCategory = async (category: string, sort: 'asc' | 'desc') => {
    setIsLoading(true);
    try {
      const data = await fetchProductsByCategory(category, sort);
      setProducts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    products,
    categories,
    isLoading,
    error,
    getProducts,
    getProductsByCategory,
  };
};
