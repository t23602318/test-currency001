import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useRequirementStore } from '../store/requirementStore';

export const PriorityFilter = () => {
  const filterPriority = useRequirementStore((state) => state.filterPriority);
  const setFilterPriority = useRequirementStore((state) => state.setFilterPriority);

  const priorities = [
    { value: 'P0', label: 'P0', icon: AlertCircle, color: 'text-red-500', bgColor: 'bg-red-50' },
    { value: 'P1', label: 'P1', icon: AlertTriangle, color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { value: 'P2', label: 'P2', icon: Info, color: 'text-blue-500', bgColor: 'bg-blue-50' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <h3 className="font-medium text-gray-800 mb-3">优先级筛选</h3>
      <div className="flex gap-3">
        <button
          onClick={() => setFilterPriority('')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            !filterPriority
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {priorities.map((p) => {
          const Icon = p.icon;
          return (
            <button
              key={p.value}
              onClick={() => setFilterPriority(filterPriority === p.value ? '' : p.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterPriority === p.value
                  ? `${p.bgColor} ${p.color} ring-2 ring-current`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
