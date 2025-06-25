import React from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Card from '../ui/Card';

type ProductFiltersProps = {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    status: string;
    setStatus: (value: string) => void;
    sortBy: string;
    setSortBy: (value: string) => void;
};

const ProductFilters: React.FC<ProductFiltersProps> = ({
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    status,
    setStatus,
    sortBy,
    setSortBy
}) => {
  return (
    <Card className="mb-6 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          type="text"
          placeholder="Пошук по назві, артикулу..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Всі категорії</option>
          <option value="cosmetics">Косметика</option>
          <option value="clothing">Одяг</option>
          <option value="electronics">Електроніка</option>
        </Select>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Всі статуси</option>
          <option value="in-stock">В наявності</option>
          <option value="running-low">Закінчується</option>
          <option value="out-of-stock">Немає в наявності</option>
        </Select>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Сортувати за назвою</option>
          <option value="price-asc">За ціною: деше деше</option>
          <option value="price-desc">За ціною: дорожче</option>
          <option value="stock">За залишками</option>
        </Select>
      </div>
    </Card>
  );
};

export default ProductFilters; 