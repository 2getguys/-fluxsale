import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClassName?: string;
};

const Input: React.FC<InputProps> = ({ label, id, containerClassName = '', ...props }) => {
  const baseClasses = 'w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-shadow';
  
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input id={id} {...props} className={`${baseClasses} ${props.className || ''}`} />
    </div>
  );
};

export default Input; 