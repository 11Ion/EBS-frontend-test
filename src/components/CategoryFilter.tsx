import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-6 max-lg:mb-3">
      <h2 className="text-lg max-md:text-base font-semibold mb-2">Filter by Category</h2>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 capitalize"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option className="capitalize" key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
