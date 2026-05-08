import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useRequirementStore } from '../store/requirementStore';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const PriorityChart = () => {
  const stats = useRequirementStore((state) => state.getStats());

  const chartData = {
    labels: ['P0', 'P1', 'P2'],
    datasets: [
      {
        label: '需求数量',
        data: [stats.byPriority.P0, stats.byPriority.P1, stats.byPriority.P2],
        backgroundColor: ['#EF4444', '#F59E0B', '#3B82F6'],
        borderColor: ['#DC2626', '#D97706', '#2563EB'],
        borderWidth: 1,
        borderRadius: 8,
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
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">优先级分布</h3>
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
