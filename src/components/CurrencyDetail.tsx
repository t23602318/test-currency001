import type { Currency } from '../types';
import { X } from 'lucide-react';

interface CurrencyDetailProps {
  currency: Currency;
  onClose: () => void;
}

export const CurrencyDetail = ({ currency, onClose }: CurrencyDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">{currency.name}</h2>
          </div>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            更多选项
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="flex border-b border-gray-100">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">详情</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">历史</button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-24">币种名称</span>
                <span className="text-gray-900 font-medium">{currency.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-24">币种三字码</span>
                <span className="text-gray-900 font-medium">{currency.code}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-24">票面金额</span>
                <span className="text-gray-900 font-medium">{currency.faceValue}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-24">版本</span>
                <span className="text-gray-900 font-medium">{currency.version}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-24">流通状态</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  currency.circulationStatus === '正常流通' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {currency.circulationStatus}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm w-24">携程收兑</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  currency.ctripAccept === '允许收兑' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {currency.ctripAccept}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 text-sm">样张（正面）</span>
                <button className="text-blue-600 text-sm hover:text-blue-700">+ 添加</button>
              </div>
              <img 
                src={currency.frontImage} 
                alt="正面"
                className="w-full max-h-64 object-contain bg-gray-50 rounded-lg"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 text-sm">样张（反面）</span>
                <button className="text-blue-600 text-sm hover:text-blue-700">+ 添加</button>
              </div>
              <img 
                src={currency.backImage} 
                alt="反面"
                className="w-full max-h-64 object-contain bg-gray-50 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};