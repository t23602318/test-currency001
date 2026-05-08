import type { Currency } from '../types';

export const mockCurrencies: Currency[] = [
  {
    id: '1',
    name: '美元',
    code: 'USD',
    faceValue: '100',
    version: '最新版本（2004-至今）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20US%20dollar%20banknote%20front%20side%20Benjamin%20Franklin&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20US%20dollar%20banknote%20back%20side%20Independence%20Hall&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '2',
    name: '美元',
    code: 'USD',
    faceValue: '50',
    version: '最新版本（2004-至今）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=50%20US%20dollar%20banknote%20front%20side%20Ulysses%20Grant&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=50%20US%20dollar%20banknote%20back%20side%20US%20Capitol&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '3',
    name: '欧元',
    code: 'EUR',
    faceValue: '200',
    version: '第二系列（欧罗巴系列）（2013）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=200%20Euro%20banknote%20front%20side%20Europa%20series&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=200%20Euro%20banknote%20back%20side%20Europa%20series&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '4',
    name: '日元',
    code: 'JPY',
    faceValue: '10000',
    version: '2004年版（2004）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=10000%20Japanese%20Yen%20banknote%20front%20side%20Fukuzawa%20Yukichi&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=10000%20Japanese%20Yen%20banknote%20back%20side%20Tokugawa%20Ieyasu&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '5',
    name: '美元',
    code: 'USD',
    faceValue: '20',
    version: '最新版本（2004-至今，彩色印刷版）（2004-present）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=20%20US%20dollar%20banknote%20front%20side%20Andrew%20Jackson&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=20%20US%20dollar%20banknote%20back%20side%20White%20House&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '6',
    name: '英镑',
    code: 'GBP',
    faceValue: '50',
    version: 'F序列（2020）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=50%20British%20Pound%20banknote%20front%20side%20Alan%20Turing&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=50%20British%20Pound%20banknote%20back%20side%20Bletchley%20Park&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '7',
    name: '人民币',
    code: 'CNY',
    faceValue: '100',
    version: '第五套（2015年版）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Chinese%20Yuan%20banknote%20front%20side%20Mao%20Zedong&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Chinese%20Yuan%20banknote%20back%20side%20Great%20Hall&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '8',
    name: '港币',
    code: 'HKD',
    faceValue: '1000',
    version: '2010年版',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=1000%20Hong%20Kong%20Dollar%20banknote%20front%20side%20HSBC&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=1000%20Hong%20Kong%20Dollar%20banknote%20back%20side%20Victoria%20Harbour&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '9',
    name: '澳元',
    code: 'AUD',
    faceValue: '100',
    version: '第五系列（2016）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Australian%20Dollar%20banknote%20front%20side%20Dame%20Nellie%20Melba&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Australian%20Dollar%20banknote%20back%20side%20Sir%20John%20Monash&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '10',
    name: '加元',
    code: 'CAD',
    faceValue: '100',
    version: '2011年版（塑料钞）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Canadian%20Dollar%20banknote%20front%20side%20Robert%20Borden&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Canadian%20Dollar%20banknote%20back%20side%20Canadian%20Rockies&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '11',
    name: '瑞士法郎',
    code: 'CHF',
    faceValue: '100',
    version: '第九系列（2010）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Swiss%20Franc%20banknote%20front%20side%20Alberto%20Giacometti&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Swiss%20Franc%20banknote%20back%20side%20sculpture&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
  {
    id: '12',
    name: '新加坡元',
    code: 'SGD',
    faceValue: '100',
    version: '第四系列（2014）',
    circulationStatus: '正常流通',
    ctripAccept: '允许收兑',
    frontImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Singapore%20Dollar%20banknote%20front%20side%20Yusof%20Ishak&image_size=landscape_4_3',
    backImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=100%20Singapore%20Dollar%20banknote%20back%20side%20Garden%20City&image_size=landscape_4_3',
    createdAt: '2024-01-10 10:00:00',
    updatedAt: '2024-01-10 10:00:00',
  },
];

export const getAllCurrencyNames = (): string[] => {
  const names = [...new Set(mockCurrencies.map(c => c.name))];
  return ['请选择', ...names];
};

export const getAllCurrencyCodes = (): string[] => {
  const codes = [...new Set(mockCurrencies.map(c => c.code))];
  return ['请选择', ...codes];
};

export const getAllFaceValues = (): string[] => {
  const values = [...new Set(mockCurrencies.map(c => c.faceValue))];
  return ['请选择', ...values];
};

export const getAllVersions = (): string[] => {
  const versions = [...new Set(mockCurrencies.map(c => c.version))];
  return ['请选择', ...versions];
};

export const circulationStatusOptions = ['请选择', '正常流通', '停止流通'];
export const ctripAcceptOptions = ['请选择', '允许收兑', '不允许收兑'];