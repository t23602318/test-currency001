import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRequirementStore } from '../store/requirementStore';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const DateChart = () => {
  const stats = useRequirementStore((state) => state.getStats());

  const chartData = {
    labels: stats.byDate.map((d) => d.date),
    datasets: [
      {
        label: '需求数量',
        data: stats.byDate.map((d) => d.count),
        borderColor: '#0A4DCC',
        backgroundColor: 'rgba(10, 77, 204, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#0A4DCC',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">需求提交趋势</h3>
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};
