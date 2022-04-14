import React from 'react';
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
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['November','December','January', 'February', 'March', 'April', 'May'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total time played',
      data: labels.map(() => faker.datatype.number({ min: 20, max: 250 })),
      borderColor: 'rgba(140, 210, 249,0.8)',
      backgroundColor: 'rgba(140, 210, 249,0.8)',
    },
  ],
};



function TotalTimeGraph(){
    return <Line options={options} data={data} />;
}

export default TotalTimeGraph;