import React from 'react';
import { Plus } from 'lucide-react';

type AddProductCardProps = {
    onClick: () => void;
};

const AddProductCard: React.FC<AddProductCardProps> = ({ onClick }) => {
  return (
    <div 
        onClick={onClick}
        className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer flex flex-col items-center justify-center p-6 text-center h-full"
    >
        <Plus className="h-10 w-10 text-gray-400 mb-2" />
        <h3 className="text-md font-medium text-gray-700">Додати новий продукт</h3>
        <p className="text-sm text-gray-500">Створіть карту товару</p>
    </div>
  );
};

export default AddProductCard; 