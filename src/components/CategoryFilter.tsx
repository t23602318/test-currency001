import { Tag } from 'lucide-react';
import { useRequirementStore } from '../store/requirementStore';
import { mockCategories } from '../data/mockData';

export const CategoryFilter = () => {
  const filterCategory = useRequirementStore((state) => state.filterCategory);
  const setFilterCategory = useRequirementStore((state) => state.setFilterCategory);
  const categories = useRequirementStore((state) => state.getCategories());

  const handleCategoryClick = (category: string) => {
    setFilterCategory(filterCategory === category ? '' : category);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-5 h-5 text-primary-600" />
        <h3 className="font-medium text-gray-800">分类筛选</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilterCategory('')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !filterCategory
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {categories.map((category) => {
          const cat = mockCategories.find((c) => c.name === category);
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterCategory === category
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{
                backgroundColor: filterCategory === category ? (cat?.color || '#0A4DCC') : undefined,
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
