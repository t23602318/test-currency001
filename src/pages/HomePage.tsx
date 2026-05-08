import { Link } from 'react-router-dom';
import { RequirementForm } from '../components/RequirementForm';
import { Header } from '../components/Header';
import { Banknote, Database } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <Header />
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/currency" 
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Banknote className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">货币大全查询</h3>
                  <p className="text-sm text-gray-500 mt-1">支持按币种名称、三字码、票面金额、版本等条件查询货币信息</p>
                </div>
              </div>
            </Link>
            <Link 
              to="/currency/admin" 
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Database className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">货币数据管理</h3>
                  <p className="text-sm text-gray-500 mt-1">维护和管理货币信息数据表格，支持添加、编辑、删除记录</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <RequirementForm />
      </main>
    </div>
  );
};