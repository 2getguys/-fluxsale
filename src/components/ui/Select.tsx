import React from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({ label, id, children, containerClassName = '', ...props }) => {
  const baseClasses = 'w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-shadow bg-white';
  
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select id={id} {...props} className={`${baseClasses} ${props.className || ''}`}>
        {children}
      </select>
    </div>
  );
};

export default Select; 