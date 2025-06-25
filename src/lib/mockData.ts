import { MessageSquare, Banknote, Percent, AlertTriangle } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  imageUrl?: string;
  description?: string;
};

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '24 shampoo',
    sku: '123213',
    price: 555,
    stock: 7,
    status: 'in-stock',
    description: 'Освіжаючий шампунь для щоденного використання, збагачений натуральними екстрактами.'
  },
  {
    id: '2',
    name: 'Крем для обличчя',
    sku: '123456',
    price: 890,
    stock: 3,
    status: 'low-stock',
    description: 'Зволожуючий крем, що захищає шкіру від шкідливого впливу навколишнього середовища.'
  },
  {
    id: '3',
    name: 'Сироватка для росту',
    sku: '789012',
    price: 1200,
    stock: 0,
    status: 'out-of-stock',
    description: 'Концентрована сироватка для стимуляції росту волосся та зміцнення коренів.'
  },
    {
    id: '4',
    name: 'Маска для волосся',
    sku: '345678',
    price: 750,
    stock: 15,
    status: 'in-stock',
    description: 'Інтенсивно відновлююча маска для пошкодженого та сухого волосся.'
  },
];

export type KpiData = {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  period: string;
  icon: React.ElementType;
};

export const mockKpis: KpiData[] = [
  {
    title: 'Оброблено діалогів',
    value: '1,247',
    change: '+12%',
    changeType: 'increase',
    period: 'за місяць',
    icon: MessageSquare,
  },
  {
    title: 'Сума продажів',
    value: '₴45,720',
    change: '+8%',
    changeType: 'increase',
    period: 'за місяць',
    icon: Banknote,
  },
  {
    title: 'Конверсія',
    value: '23.4%',
    change: '+3%',
    changeType: 'increase',
    period: 'за місяць',
    icon: Percent,
  },
  {
    title: 'Неопрацьовані',
    value: '15',
    change: '+2',
    changeType: 'decrease',
    period: 'за день',
    icon: AlertTriangle,
  },
];

export const salesChartData = {
  labels: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер'],
  datasets: [{
    label: 'Продажі (₴)',
    data: [12000, 19000, 15000, 25000, 22000, 30000],
    borderColor: 'rgb(59, 130, 246)',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    tension: 0.4
  }]
};

export const dialogsChartData = {
  labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
  datasets: [{
    label: 'Діалоги',
    data: [45, 52, 38, 65, 59, 80, 42],
    backgroundColor: 'rgba(34, 197, 94, 0.8)',
    borderColor: 'rgb(34, 197, 94)',
    borderWidth: 1
  }]
}; 