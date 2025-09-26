import React from 'react';

// Simple working select using native HTML
export const Select = ({ value, onValueChange, children }) => {
  const handleChange = (e) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <select 
      value={value} 
      onChange={handleChange}
      className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children, className }) => null; // Not needed for native select
export const SelectValue = ({ placeholder }) => null; // Not needed for native select  
export const SelectContent = ({ children }) => children; // Pass through children
export const SelectItem = ({ children, value }) => (
  <option value={value} className="bg-gray-900 text-white">
    {children}
  </option>
);