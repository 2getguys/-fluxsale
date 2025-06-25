import React, { useState, useMemo } from 'react';
import { mockProducts } from '../lib/mockData';
import type { Product } from '../lib/mockData';
import ProductCard from '../components/products/ProductCard';
import AddProductCard from '../components/products/AddProductCard';
import ProductEditModal from '../components/products/ProductEditModal';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import PageHeader from '../components/ui/PageHeader';
import ProductFilters from '../components/products/ProductFilters';
import Button from '../components/ui/Button';
import { Upload, Plus } from 'lucide-react';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(mockProducts);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [status, setStatus] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    const addProduct = () => {
        const newProduct: Product = {
            id: Date.now().toString(),
            name: 'Новий товар',
            sku: 'ART-00000',
            price: 0,
            stock: 0,
            status: 'in-stock',
            description: 'Опис нового товару',
            imageUrl: '',
        };
        setProducts(prev => [newProduct, ...prev]);
        setEditingProduct(newProduct);
    };

    const deleteProduct = (id: string) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const cloneProduct = (id: string) => {
        const productToClone = products.find(p => p.id === id);
        if (productToClone) {
            const newProduct: Product = {
                ...productToClone,
                id: Date.now().toString(),
                name: `${productToClone.name} (копія)`
            };
            setProducts(prev => [newProduct, ...prev]);
        }
    };
    
    const handleUpdateProduct = (updatedProduct: Product) => {
        setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
        setEditingProduct(null);
    };

    const filteredAndSortedProducts = useMemo(() => {
        let result = products
            .filter(p => 
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                p.sku.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter(p => status === 'all' || p.status === status);
            // Category filter would go here if categories were part of the Product type
            // .filter(p => category === 'all' || p.category === category);

        result.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'price-asc') {
                return a.price - b.price;
            } else if (sortBy === 'price-desc') {
                return b.price - a.price;
            } else if (sortBy === 'stock') {
                return a.stock - b.stock;
            }
            return 0;
        });

        return result;
    }, [products, searchQuery, status, sortBy, category]);

    return (
        <div className="relative p-4 sm:p-6 lg:p-8 min-h-screen">
            <AnimatedBackground />
            <div className="relative z-10">
                <PageHeader title="Карти продуктів">
                    <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Завантажити БД
                    </Button>
                    <Button onClick={addProduct}>
                        <Plus className="mr-2 h-4 w-4" />
                        Додати продукт
                    </Button>
                </PageHeader>

                <ProductFilters 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    category={category}
                    setCategory={setCategory}
                    status={status}
                    setStatus={setStatus}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
                    <AddProductCard onClick={addProduct} />
                    {filteredAndSortedProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onDelete={deleteProduct} 
                            onClone={cloneProduct} 
                            onEdit={() => setEditingProduct(product)}
                        />
                    ))}
                </div>
            </div>
            {editingProduct && (
                <ProductEditModal 
                    isOpen={!!editingProduct}
                    product={editingProduct}
                    onClose={() => setEditingProduct(null)}
                    onSave={handleUpdateProduct}
                />
            )}
        </div>
    );
};

export default Products; 