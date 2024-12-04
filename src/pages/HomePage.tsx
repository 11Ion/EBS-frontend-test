import React, { useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductItem from '../components/ProductItem';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/CategoryFilter';
import SortDropdown from '../components/SortDropdown';

const HomePage: React.FC = () => {
  const { products, categories, getProducts, getProductsByCategory, isLoading } = useProducts();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (selectedCategory) {
      getProductsByCategory(selectedCategory, sortOrder);
    } else {
      getProducts(sortOrder, itemsPerPage, (currentPage - 1) * itemsPerPage);
    }
  }, [selectedCategory, sortOrder, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); 
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    setCurrentPage(1); 
  };

  const handlePageChange = (page: number) => {
    window.scroll(0, 0);
    setCurrentPage(page);
  };

  return (
    <section className="w-full pt-24">
      <div className="container mx-auto px-5">
        <h1 className="text-2xl max-md:text-xl max-sm:text-lg font-bold text-black uppercase select-none mb-6">
          <span className="text-green-500">EBS</span> Frontend Test Products
        </h1>

        <div className="flex gap-10 max-lg:flex-col-reverse">
          {/* Products */}
          <div className="flex-1 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {isLoading ? (
            <div className='w-full col-span-3 h-[80vh]'>
              <LoadingSpinner />
            </div>
             ) : (
              products.map((product) => <ProductItem key={product.id} product={product} />)
            )} 
          </div>

          {/* Sort and Category */}
          <div className="w-64 max-lg:w-full">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
          </div>
        </div>

        {!isLoading && (
            <Pagination
              currentPage={currentPage}
              totalItems={20} 
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
          />
          )} 
      </div>
    </section>
  );
};

export default HomePage;
