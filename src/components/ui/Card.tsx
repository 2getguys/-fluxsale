import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ElementType;
};

const Card: React.FC<CardProps> = ({ children, className = '', title, icon: Icon }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
          {Icon && <Icon className="mr-2 text-gray-600" size={22} />}
          <span>{title}</span>
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card; 