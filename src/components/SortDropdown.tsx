import React from 'react';

interface SortDropdownProps {
  sortOrder: 'asc' | 'desc';
  onSortChange: (order: 'asc' | 'desc') => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortOrder, onSortChange }) => {
  return (
    <div>
      <h2 className="text-lg max-md:text-base font-semibold mb-2">Sort by Price</h2>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as 'asc' | 'desc')}
        className="w-full border border-gray-300 rounded p-2"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
