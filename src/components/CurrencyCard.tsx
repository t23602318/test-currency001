import type { Currency } from '../types';

interface CurrencyCardProps {
  currency: Currency;
  onClick: (currency: Currency) => void;
}

export const CurrencyCard = ({ currency, onClick }: CurrencyCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={() => onClick(currency)}
    >
      <div className="aspect-video bg-gray-50">
        <img 
          src={currency.frontImage} 
          alt={`${currency.name} ${currency.faceValue}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg">{currency.name}</h3>
        <p className="text-gray-500 text-sm">{currency.code}</p>
        <p className="text-gray-700 font-medium text-lg my-1">{currency.faceValue}</p>
        <p className="text-gray-500 text-sm truncate">{currency.version}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            currency.circulationStatus === '正常流通' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {currency.circulationStatus}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            currency.ctripAccept === '允许收兑' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {currency.ctripAccept}
          </span>
        </div>
        <div className="flex gap-2 mt-3">
          <img 
            src={currency.frontImage} 
            alt="正面"
            className="w-10 h-10 object-contain rounded border border-gray-200"
          />
          <img 
            src={currency.backImage} 
            alt="背面"
            className="w-10 h-10 object-contain rounded border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};