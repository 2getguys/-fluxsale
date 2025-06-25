import React, { useState, useEffect } from 'react';
import type { Product } from '../../lib/mockData';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { X } from 'lucide-react';

type ProductEditModalProps = {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
};

const ProductEditModal: React.FC<ProductEditModalProps> = ({ isOpen, product, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  if (!isOpen || !product) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as Product);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">Редагувати продукт</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input label="Назва товару" name="name" value={formData.name || ''} onChange={handleChange} />
            <Input label="Артикул (SKU)" name="sku" value={formData.sku || ''} onChange={handleChange} />
            <Input label="Ціна" name="price" type="number" value={formData.price || ''} onChange={handleChange} />
            <Input label="Залишок" name="stock" type="number" value={formData.stock || ''} onChange={handleChange} />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Опис</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <Button type="button" variant="secondary" onClick={onClose}>Скасувати</Button>
            <Button type="submit" variant="primary">Зберегти</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditModal; 