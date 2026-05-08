import { Header } from '../components/Header';
import { DashboardCards } from '../components/DashboardCards';
import { CategoryChart } from '../components/CategoryChart';
import { PriorityChart } from '../components/PriorityChart';
import { DateChart } from '../components/DateChart';
import { CategoryList } from '../components/CategoryList';
import { Link, useLocation } from 'react-router-dom';
import { LayoutList, BarChart3, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

export const DashboardPage = () => {
  const location = useLocation();
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">数据看板</h2>
            <div className="flex items-center gap-4">
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
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-2 rounded-lg">
                <RefreshCw className="w-4 h-4" />
                <span>实时更新</span>
                <span className="text-xs text-gray-400">
                  {lastUpdate.toLocaleTimeString('zh-CN')}
                </span>
              </div>
            </div>
          </div>

          <DashboardCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <CategoryChart />
            <PriorityChart />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DateChart />
            </div>
            <CategoryList />
          </div>
        </div>
      </main>
    </div>
  );
};
