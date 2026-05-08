import { useState } from 'react';
import { Eye, Trash2, FileImage, FileText, FileSpreadsheet } from 'lucide-react';
import { useRequirementStore } from '../store/requirementStore';
import type { Requirement } from '../types';
import { mockCategories } from '../data/mockData';
import { RequirementDetail } from './RequirementDetail';

export const RequirementTable = () => {
  const requirements = useRequirementStore((state) => state.getFilteredRequirements());
  const deleteRequirement = useRequirementStore((state) => state.deleteRequirement);
  const [selectedRequirement, setSelectedRequirement] = useState<Requirement | null>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'P0':
        return 'bg-red-100 text-red-700';
      case 'P1':
        return 'bg-orange-100 text-orange-700';
      case 'P2':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = mockCategories.find((c) => c.name === category);
    return cat?.color || '#0A4DCC';
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return <FileImage className="w-4 h-4 text-primary-600" />;
    }
    if (type === 'application/pdf') {
      return <FileText className="w-4 h-4 text-red-500" />;
    }
    if (type.includes('excel') || type.includes('spreadsheet')) {
      return <FileSpreadsheet className="w-4 h-4 text-green-500" />;
    }
    return <FileText className="w-4 h-4 text-gray-500" />;
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这条需求吗？')) {
      deleteRequirement(id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                需求标题
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                分类
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                优先级
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                附件
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                创建时间
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requirements.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                    {req.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="px-3 py-1 inline-flex text-xs font-medium rounded-full text-white"
                    style={{ backgroundColor: getCategoryColor(req.category) }}
                  >
                    {req.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 inline-flex text-xs font-medium rounded-full ${getPriorityColor(req.priority)}`}>
                    {req.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {req.attachments.length > 0 ? (
                      req.attachments.slice(0, 3).map((att, idx) => (
                        <span key={idx} className="p-1 bg-gray-100 rounded">
                          {getFileIcon(att.type)}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">-</span>
                    )}
                    {req.attachments.length > 3 && (
                      <span className="text-xs text-gray-400">+{req.attachments.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{req.createdAt}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedRequirement(req)}
                      className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      title="查看详情"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(req.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="删除"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {requirements.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          <p>暂无匹配的需求</p>
        </div>
      )}
      
      {selectedRequirement && (
        <RequirementDetail
          requirement={selectedRequirement}
          onClose={() => setSelectedRequirement(null)}
        />
      )}
    </div>
  );
};
