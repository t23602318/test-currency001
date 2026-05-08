import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRequirementStore } from '../store/requirementStore';
import { mockCategories } from '../data/mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryChart = () => {
  const stats = useRequirementStore((state) => state.getStats());

  const labels = Object.keys(stats.byCategory);
  const data = Object.values(stats.byCategory);
  
  const colors = labels.map((label) => {
    const cat = mockCategories.find((c) => c.name === label);
    return cat?.color || '#0A4DCC';
  });

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderColor: colors.map(() => '#fff'),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">需求分类分布</h3>
      <div className="flex justify-center">
        <div className="w-64 h-64">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};
