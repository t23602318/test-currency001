import { useState, useMemo } from 'react';
import { Plus, Filter, ArrowUpDown } from 'lucide-react';
import { CurrencyCard } from '../components/CurrencyCard';
import { CurrencyDetail } from '../components/CurrencyDetail';
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

export const CurrencyQueryPage = () => {
  const [filters, setFilters] = useState<CurrencyFilter>({
    name: '请选择',
    code: '请选择',
    faceValue: '请选择',
    version: '请选择',
    circulationStatus: '请选择',
    ctripAccept: '请选择',
  });
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);

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

  const handleCardClick = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const handleCloseDetail = () => {
    setSelectedCurrency(null);
  };

  const currentTime = new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">货币大全</h1>
          <div className="mt-3 space-y-1 text-sm text-gray-500">
            <p>更新时间：{currentTime}</p>
            <p>数据联系人：XXXX</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">币种名称</label>
              <select
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {getAllCurrencyNames().map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">币种三字码</label>
              <select
                value={filters.code}
                onChange={(e) => handleFilterChange('code', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {getAllCurrencyCodes().map(code => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">票面金额</label>
              <select
                value={filters.faceValue}
                onChange={(e) => handleFilterChange('faceValue', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {getAllFaceValues().map(value => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">版本</label>
              <select
                value={filters.version}
                onChange={(e) => handleFilterChange('version', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {getAllVersions().map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">流通状态</label>
              <select
                value={filters.circulationStatus}
                onChange={(e) => handleFilterChange('circulationStatus', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {circulationStatusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">携程收兑</label>
              <select
                value={filters.ctripAccept}
                onChange={(e) => handleFilterChange('ctripAccept', e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {ctripAcceptOptions.map(accept => (
                  <option key={accept} value={accept}>{accept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-900">搜索结果</span>
              <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                <Plus className="w-4 h-4" />
                添加记录
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <Filter className="w-4 h-4" />
                筛选
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                <ArrowUpDown className="w-4 h-4" />
                排序
              </button>
            </div>
          </div>

          <div className="p-4">
            {filteredCurrencies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">暂无匹配的货币数据</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredCurrencies.map(currency => (
                  <CurrencyCard 
                    key={currency.id} 
                    currency={currency} 
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedCurrency && (
        <CurrencyDetail currency={selectedCurrency} onClose={handleCloseDetail} />
      )}
    </div>
  );
};