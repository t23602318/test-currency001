import { create } from 'zustand';
import type { Requirement, Stats } from '../types';
import { mockRequirements, aiClassify } from '../data/mockData';

interface RequirementStore {
  requirements: Requirement[];
  filterCategory: string;
  filterPriority: string;
  setFilterCategory: (category: string) => void;
  setFilterPriority: (priority: string) => void;
  addRequirement: (data: {
    title: string;
    description: string;
    attachments: Requirement['attachments'];
    priority: Requirement['priority'];
  }) => void;
  deleteRequirement: (id: string) => void;
  getFilteredRequirements: () => Requirement[];
  getStats: () => Stats;
  getCategories: () => string[];
}

export const useRequirementStore = create<RequirementStore>((set, get) => ({
  requirements: mockRequirements,
  filterCategory: '',
  filterPriority: '',

  setFilterCategory: (category) => set({ filterCategory: category }),
  setFilterPriority: (priority) => set({ filterPriority: priority }),

  addRequirement: (data) => {
    const newRequirement: Requirement = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      attachments: data.attachments,
      priority: data.priority,
      category: aiClassify(data.title, data.description),
      createdAt: new Date().toLocaleString('zh-CN'),
    };
    set((state) => ({ requirements: [...state.requirements, newRequirement] }));
  },

  deleteRequirement: (id) => {
    set((state) => ({ requirements: state.requirements.filter((r) => r.id !== id) }));
  },

  getFilteredRequirements: () => {
    const { requirements, filterCategory, filterPriority } = get();
    return requirements.filter((r) => {
      const matchCategory = !filterCategory || r.category === filterCategory;
      const matchPriority = !filterPriority || r.priority === filterPriority;
      return matchCategory && matchPriority;
    });
  },

  getStats: () => {
    const { requirements } = get();
    const stats: Stats = {
      totalRequirements: requirements.length,
      byPriority: { P0: 0, P1: 0, P2: 0 },
      byCategory: {},
      byDate: [],
    };

    const dateMap = new Map<string, number>();

    requirements.forEach((r) => {
      stats.byPriority[r.priority]++;
      stats.byCategory[r.category] = (stats.byCategory[r.category] || 0) + 1;
      const date = r.createdAt.split(' ')[0];
      dateMap.set(date, (dateMap.get(date) || 0) + 1);
    });

    stats.byDate = Array.from(dateMap.entries()).map(([date, count]) => ({ date, count }));
    stats.byDate.sort((a, b) => a.date.localeCompare(b.date));

    return stats;
  },

  getCategories: () => {
    const { requirements } = get();
    return [...new Set(requirements.map((r) => r.category))];
  },
}));
