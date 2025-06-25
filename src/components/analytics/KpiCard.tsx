import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { KpiData } from '../../lib/mockData';
import Card from '../ui/Card';

type KpiCardProps = {
  kpi: KpiData;
};

const KpiCard: React.FC<KpiCardProps> = ({ kpi }) => {
  const Icon = kpi.icon;
  const isIncrease = kpi.changeType === 'increase';

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{kpi.title}</p>
          <p className="text-3xl font-bold text-gray-800">{kpi.value}</p>
        </div>
        <div className={`p-3 rounded-full ${isIncrease ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`text-xl ${isIncrease ? 'text-green-600' : 'text-red-600'}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm ${isIncrease ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          {isIncrease ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
          {kpi.change}
        </span>
        <span className="text-gray-500 text-sm ml-2">{kpi.period}</span>
      </div>
    </Card>
  );
};

export default KpiCard; 