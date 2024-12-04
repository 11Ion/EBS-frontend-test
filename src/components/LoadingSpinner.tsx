import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-full w-full">
    <div className="loader border-t-4 border-green-400 rounded-full w-24 h-24 animate-spin"></div>
  </div>
);

export default LoadingSpinner;
