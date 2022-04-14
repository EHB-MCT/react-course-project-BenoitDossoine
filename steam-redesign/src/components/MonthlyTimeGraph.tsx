import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '',
    },
  },
};

const labels = ['November','December','January', 'February', 'March', 'April', 'May'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Time played',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(140, 210, 249,0.8)',
    },
],
};

function MonthlyTimeGraph(){
    return <Bar className="graph" options={options} data={data} />;
}

export default MonthlyTimeGraph;