import React from 'react';

type PageHeaderProps = {
  title: string;
  icon?: React.ElementType;
  children?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon: Icon, children }) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            {Icon && <Icon className="mr-3 text-blue-600" size={28} />}
            {title}
        </h2>
        <div className="flex items-center space-x-2">
            {children}
        </div>
    </div>
  );
};

export default PageHeader; 