import React from 'react';
import type { Product } from '../../lib/mockData';
import { Edit, Copy, Trash, Image as ImageIcon } from 'lucide-react';
import Button from '../ui/Button';

type ProductCardProps = {
  product: Product;
  onDelete: (id: string) => void;
  onClone: (id: string) => void;
  onEdit: (product: Product) => void;
};

const statusClasses = {
  'in-stock': 'bg-green-100 text-green-800',
  'low-stock': 'bg-yellow-100 text-yellow-800',
  'out-of-stock': 'bg-red-100 text-red-800',
};

const statusLabels = {
    'in-stock': 'В наявності',
    'low-stock': 'Закінчується',
    'out-of-stock': 'Немає в наявності',
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClone, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col h-full">
      <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <ImageIcon className="w-12 h-12 text-gray-300" />
        )}
         <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${statusClasses[product.status]}`}>
            {statusLabels[product.status]}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-bold text-gray-800 truncate mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">Артикул: {product.sku}</p>
        
        <div className="flex-grow"></div>

        <div className="flex justify-between items-center mt-auto mb-4">
          <span className="text-2xl font-bold text-gray-800">{product.price} ₴</span>
          <span className="text-sm text-gray-600">Залишок: {product.stock}</span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
            <Button onClick={() => onEdit(product)} className="w-full">
                <Edit size={16} className="mr-2"/>
                Редагувати
            </Button>
            <button onClick={() => onClone(product.id)} className="p-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
                <Copy size={18} />
            </button>
            <button onClick={() => onDelete(product.id)} className="p-2 rounded-md hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors">
                <Trash size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 