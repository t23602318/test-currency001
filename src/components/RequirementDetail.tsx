import { X, FileImage, FileText, FileSpreadsheet, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import type { Requirement } from '../types';
import { mockCategories } from '../data/mockData';

interface Props {
  requirement: Requirement;
  onClose: () => void;
}

export const RequirementDetail = ({ requirement, onClose }: Props) => {
  const getPriorityInfo = (priority: string) => {
    switch (priority) {
      case 'P0':
        return { label: '紧急', Icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-100' };
      case 'P1':
        return { label: '重要', Icon: AlertTriangle, color: 'text-orange-600', bgColor: 'bg-orange-100' };
      case 'P2':
        return { label: '一般', Icon: Info, color: 'text-blue-600', bgColor: 'bg-blue-100' };
      default:
        return { label: '未知', Icon: Info, color: 'text-gray-600', bgColor: 'bg-gray-100' };
    }
  };

  const priorityInfo = getPriorityInfo(requirement.priority);
  const PriorityIcon = priorityInfo.Icon;
  
  const category = mockCategories.find((c) => c.name === requirement.category);

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return <FileImage className="w-5 h-5 text-primary-600" />;
    }
    if (type === 'application/pdf') {
      return <FileText className="w-5 h-5 text-red-500" />;
    }
    if (type.includes('excel') || type.includes('spreadsheet')) {
      return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
    }
    return <FileText className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">需求详情</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xl font-bold text-gray-900">{requirement.title}</h4>
            <div className="flex gap-3 mt-3">
              <span
                className="px-3 py-1 inline-flex items-center gap-1 text-xs font-medium rounded-full text-white"
                style={{ backgroundColor: category?.color || '#0A4DCC' }}
              >
                {requirement.category}
              </span>
              <span className={`px-3 py-1 inline-flex items-center gap-1 text-xs font-medium rounded-full ${priorityInfo.bgColor} ${priorityInfo.color}`}>
                <PriorityIcon className="w-3 h-3" />
                {requirement.priority} - {priorityInfo.label}
              </span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">需求描述</label>
            <div className="p-4 bg-gray-50 rounded-lg text-gray-800 whitespace-pre-wrap">
              {requirement.description}
            </div>
          </div>
          
          {requirement.attachments.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                附件 ({requirement.attachments.length})
              </label>
              <div className="space-y-2">
                {requirement.attachments.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    {getFileIcon(att.type)}
                    <span className="flex-1 text-sm text-gray-700">{att.name}</span>
                    <button className="text-primary-600 text-sm hover:underline">
                      下载
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t">
            <span className="text-sm text-gray-500">创建时间: {requirement.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
