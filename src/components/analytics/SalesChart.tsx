import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { salesChartData } from '../../lib/mockData';
import Card from '../ui/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const SalesChart: React.FC = () => {
  return (
    <Card title="Продажі за місяць">
      <div style={{ height: '300px' }}>
        <Line options={options} data={salesChartData} />
      </div>
    </Card>
  );
};

export default SalesChart; 