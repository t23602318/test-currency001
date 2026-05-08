import { ClipboardList, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useRequirementStore } from '../store/requirementStore';

export const DashboardCards = () => {
  const stats = useRequirementStore((state) => state.getStats());

  const cards = [
    {
      title: '总需求数',
      value: stats.totalRequirements,
      Icon: ClipboardList,
      color: 'bg-primary-600',
      textColor: 'text-primary-600',
      bgLight: 'bg-primary-50',
    },
    {
      title: '紧急 (P0)',
      value: stats.byPriority.P0,
      Icon: AlertCircle,
      color: 'bg-red-500',
      textColor: 'text-red-500',
      bgLight: 'bg-red-50',
    },
    {
      title: '重要 (P1)',
      value: stats.byPriority.P1,
      Icon: AlertTriangle,
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      bgLight: 'bg-orange-50',
    },
    {
      title: '一般 (P2)',
      value: stats.byPriority.P2,
      Icon: Info,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      bgLight: 'bg-blue-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card) => {
        const Icon = card.Icon;
        return (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                <p className="text-3xl font-bold text-gray-800">{card.value}</p>
              </div>
              <div className={`p-3 rounded-full ${card.bgLight}`}>
                <Icon className={`w-6 h-6 ${card.textColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
