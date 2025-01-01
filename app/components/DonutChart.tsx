// DonutChart.tsx
"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  equity: number;
  gold: number;
  debt: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ equity, gold, debt }) => {
  const data = {
    labels: ['Equity', 'Gold', 'Debt'],
    datasets: [
      {
        data: [equity * 100, gold * 100, debt * 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    cutout: '70%', // Controls the thickness of the donut
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[300px] h-[300px]">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex justify-around w-full mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#FF6384] mr-2"></div>
          <span>Equity ({equity * 100}%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#36A2EB] mr-2"></div>
          <span>Gold ({gold * 100}%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#4BC0C0] mr-2"></div>
          <span>Debt ({debt * 100}%)</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
