import { Header } from '../components/Header';
import { CategoryFilter } from '../components/CategoryFilter';
import { PriorityFilter } from '../components/PriorityFilter';
import { RequirementTable } from '../components/RequirementTable';
import { Link, useLocation } from 'react-router-dom';
import { LayoutList, BarChart3 } from 'lucide-react';

export const AdminPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">需求列表</h2>
            <nav className="flex gap-2">
              <Link
                to="/admin"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/admin'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <LayoutList className="w-4 h-4" />
                需求列表
              </Link>
              <Link
                to="/admin/dashboard"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/admin/dashboard'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                数据看板
              </Link>
            </nav>
          </div>
          
          <CategoryFilter />
          <PriorityFilter />
          <RequirementTable />
        </div>
      </main>
    </div>
  );
};
