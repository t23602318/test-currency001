import { ClipboardList, BarChart3, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-primary-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-8 h-8" />
            <h1 className="text-xl font-bold">货币大全</h1>
          </div>
          
          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'bg-white/20 text-white'
                  : 'hover:bg-white/10 text-white/80'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>需求收集</span>
            </Link>
            <Link
              to="/admin"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/admin' || location.pathname === '/admin/dashboard'
                  ? 'bg-white/20 text-white'
                  : 'hover:bg-white/10 text-white/80'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>后台管理</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
