import { useRequirementStore } from '../store/requirementStore';
import { mockCategories } from '../data/mockData';
import { Tag } from 'lucide-react';

export const CategoryList = () => {
  const stats = useRequirementStore((state) => state.getStats());

  const sortedCategories = Object.entries(stats.byCategory)
    .map(([name, count]) => ({
      name,
      count,
      color: mockCategories.find((c) => c.name === name)?.color || '#0A4DCC',
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-5 h-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-800">分类统计</h3>
      </div>
      <div className="space-y-3">
        {sortedCategories.map((item) => {
          const percentage = ((item.count / stats.totalRequirements) * 100).toFixed(1);
          return (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500">{item.count} ({percentage}%)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
