export interface Attachment {
  name: string;
  path: string;
  type: string;
}

export interface Requirement {
  id: string;
  title: string;
  description: string;
  attachments: Attachment[];
  priority: 'P0' | 'P1' | 'P2';
  category: string;
  createdAt: string;
}

export interface Stats {
  totalRequirements: number;
  byPriority: { P0: number; P1: number; P2: number };
  byCategory: Record<string, number>;
  byDate: { date: string; count: number }[];
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface Currency {
  id: string;
  name: string;
  code: string;
  faceValue: string;
  version: string;
  circulationStatus: '正常流通' | '停止流通';
  ctripAccept: '允许收兑' | '不允许收兑';
  frontImage: string;
  backImage: string;
  createdAt: string;
  updatedAt: string;
}

export interface CurrencyFilter {
  name: string;
  code: string;
  faceValue: string;
  version: string;
  circulationStatus: string;
  ctripAccept: string;
}