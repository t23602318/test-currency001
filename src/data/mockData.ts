import type { Requirement, Category } from '../types';

export const mockCategories: Category[] = [
  { id: '1', name: '功能需求', color: '#0A4DCC' },
  { id: '2', name: '用户体验', color: '#10B981' },
  { id: '3', name: '性能优化', color: '#F59E0B' },
  { id: '4', name: '兼容性', color: '#8B5CF6' },
  { id: '5', name: 'Bug修复', color: '#EF4444' },
  { id: '6', name: '安全', color: '#EC4899' },
  { id: '7', name: '文档', color: '#6B7280' },
  { id: '8', name: '其他', color: '#6366F1' },
];

export const mockRequirements: Requirement[] = [
  {
    id: '1',
    title: '优化登录体验',
    description: '希望能够支持手机号快捷登录，减少登录步骤，提升用户体验。目前登录流程太繁琐，需要多次跳转。',
    attachments: [],
    priority: 'P1',
    category: '用户体验',
    createdAt: '2024-01-15 10:30:00',
  },
  {
    id: '2',
    title: '数据导出功能',
    description: '需要导出Excel格式的报表数据，方便进行离线分析和备份。希望支持多种筛选条件。',
    attachments: [
      { name: '报表样式参考.png', path: '/images/sample.png', type: 'image/png' },
    ],
    priority: 'P0',
    category: '功能需求',
    createdAt: '2024-01-14 14:20:00',
  },
  {
    id: '3',
    title: '页面加载慢',
    description: '首页加载时间超过3秒，希望优化页面加载速度，提升用户体验。',
    attachments: [],
    priority: 'P2',
    category: '性能优化',
    createdAt: '2024-01-13 09:15:00',
  },
  {
    id: '4',
    title: '新增数据筛选',
    description: '报表页面需要增加按日期筛选功能，方便查看指定时间段的数据。',
    attachments: [],
    priority: 'P1',
    category: '功能需求',
    createdAt: '2024-01-12 16:45:00',
  },
  {
    id: '5',
    title: '移动端适配',
    description: 'APP在小屏手机上显示不正常，部分按钮无法点击，需要进行移动端适配优化。',
    attachments: [
      { name: '移动端问题截图.png', path: '/images/mobile.png', type: 'image/png' },
      { name: '需求说明.pdf', path: '/docs/requirement.pdf', type: 'application/pdf' },
    ],
    priority: 'P0',
    category: '兼容性',
    createdAt: '2024-01-11 11:00:00',
  },
  {
    id: '6',
    title: '修复登录页面样式问题',
    description: '登录页面在Safari浏览器中样式错乱，需要修复兼容性问题。',
    attachments: [],
    priority: 'P2',
    category: 'Bug修复',
    createdAt: '2024-01-10 15:30:00',
  },
  {
    id: '7',
    title: '增加双因素认证',
    description: '为了提高账户安全性，希望增加双因素认证功能。',
    attachments: [],
    priority: 'P1',
    category: '安全',
    createdAt: '2024-01-09 10:00:00',
  },
  {
    id: '8',
    title: '更新API文档',
    description: '现有API文档过时，需要更新最新的接口说明和示例代码。',
    attachments: [
      { name: 'API文档初稿.docx', path: '/docs/api.docx', type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
    ],
    priority: 'P2',
    category: '文档',
    createdAt: '2024-01-08 14:00:00',
  },
];

export const aiClassify = (title: string, description: string): string => {
  const keywords: Record<string, string[]> = {
    '功能需求': ['功能', '新增', '增加', '添加', '需要', '导出', '筛选', '创建'],
    '用户体验': ['体验', '登录', '界面', '交互', '便捷', '流畅'],
    '性能优化': ['性能', '加载', '速度', '优化', '慢', '卡顿'],
    '兼容性': ['兼容', '适配', '移动端', '手机', '浏览器'],
    'Bug修复': ['修复', '错误', 'bug', '问题', '异常', '错乱'],
    '安全': ['安全', '认证', '密码', '加密', '防护'],
    '文档': ['文档', '说明', '手册', '指南', 'API'],
  };

  const text = `${title} ${description}`;
  
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => text.includes(word))) {
      return category;
    }
  }
  
  return '其他';
};
