import React from 'react';
import { BarChart } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import KpiCard from '../components/analytics/KpiCard';
import SalesChart from '../components/analytics/SalesChart';
import DialogsChart from '../components/analytics/DialogsChart';
import { mockKpis } from '../lib/mockData';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="p-8">
      <PageHeader title="Аналітика" icon={BarChart} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {mockKpis.map((kpi) => (
          <KpiCard key={kpi.title} kpi={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesChart />
        <DialogsChart />
      </div>
    </div>
  );
};

export default AnalyticsPage; 