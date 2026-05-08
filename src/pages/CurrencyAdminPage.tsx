import { useState, useMemo } from 'react';
import { Plus, Settings, Grid, Filter, ArrowUpDown, ChevronDown, Eye, Edit2, Trash2, Image } from 'lucide-react';
import type { Currency, CurrencyFilter } from '../types';
import { 
  mockCurrencies, 
  getAllCurrencyNames, 
  getAllCurrencyCodes, 
  getAllFaceValues, 
  getAllVersions,
  circulationStatusOptions,
  ctripAcceptOptions
} from '../data/currencyData';

export const CurrencyAdminPage = () => {
  const [filters, setFilters] = useState<CurrencyFilter>({
    name: '请选择',
    code: '请选择',
    faceValue: '请选择',
    version: '请选择',
    circulationStatus: '请选择',
    ctripAccept: '请选择',
  });

  const filteredCurrencies = useMemo(() => {
    return mockCurrencies.filter(currency => {
      if (filters.name !== '请选择' && currency.name !== filters.name) return false;
      if (filters.code !== '请选择' && currency.code !== filters.code) return false;
      if (filters.faceValue !== '请选择' && currency.faceValue !== filters.faceValue) return false;
      if (filters.version !== '请选择' && currency.version !== filters.version) return false;
      if (filters.circulationStatus !== '请选择' && currency.circulationStatus !== filters.circulationStatus) return false;
      if (filters.ctripAccept !== '请选择' && currency.ctripAccept !== filters.ctripAccept) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: keyof CurrencyFilter, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span>携程</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-gray-300">/</span>
              <div className="flex items-center gap-2 text-gray-600">
                <span>货币识别</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                自动化
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                分享
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                更多
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
            <span>PRD草稿</span>
            <span>内部使用</span>
            <span>最近修改: 1小时前</span>
            <span>上级访问设置</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 mb-4">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg">
            数据表
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-lg">
            <Grid className="w-4 h-4" />
            表格
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            画册
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <Plus className="w-4 h-4" />
                添加记录
              </button>
              <span className="text-gray-300">|</span>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <Settings className="w-4 h-4" />
                字段配置
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <Grid className="w-4 h-4" />
                视图配置
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <Filter className="w-4 h-4" />
                筛选
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                分组
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <ArrowUpDown className="w-4 h-4" />
                排序
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                行高
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                填色
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">币种名称</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">币种三字码</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">票面金额</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">版本</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">流通状态</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">携程收兑</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">样张（正面）</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">样张（反面）</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCurrencies.map((currency, index) => (
                  <tr key={currency.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">{index + 1}</span>
                        <span className="text-sm font-medium text-gray-900">{currency.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{currency.code}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{currency.faceValue}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{currency.version}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        currency.circulationStatus === '正常流通' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {currency.circulationStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        currency.ctripAccept === '允许收兑' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {currency.ctripAccept}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <img 
                        src={currency.frontImage} 
                        alt="正面"
                        className="w-16 h-10 object-contain rounded"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <img 
                        src={currency.backImage} 
                        alt="反面"
                        className="w-16 h-10 object-contain rounded"
                      />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
            <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
              <Plus className="w-4 h-4" />
              添加记录
            </button>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>6 条记录</span>
              <button className="text-gray-400 hover:text-gray-600">上一页</button>
              <span className="text-gray-900">1</span>
              <button className="text-gray-400 hover:text-gray-600">下一页</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};