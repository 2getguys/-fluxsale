import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { dialogsChartData } from '../../lib/mockData';
import Card from '../ui/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

const DialogsChart: React.FC = () => {
  return (
    <Card title="Діалоги за день">
      <div style={{ height: '300px' }}>
        <Bar options={options} data={dialogsChartData} />
      </div>
    </Card>
  );
};

export default DialogsChart; 