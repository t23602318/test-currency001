import { useState } from 'react';
import { Upload, X, FileImage, FileText, FileSpreadsheet } from 'lucide-react';
import { useRequirementStore } from '../store/requirementStore';
import type { Requirement } from '../types';

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

export const RequirementForm = () => {
  const addRequirement = useRequirementStore((state) => state.addRequirement);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Requirement['priority']>('P1');
  const [attachments, setAttachments] = useState<Requirement['attachments']>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: Requirement['attachments'] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError(`文件 ${file.name} 格式不支持，请上传图片、PDF或Excel文件`);
        return;
      }
      
      if (attachments.length + newFiles.length >= 3) {
        setError('最多只能上传3个附件');
        return;
      }
      
      newFiles.push({
        name: file.name,
        path: `/uploads/${file.name}`,
        type: file.type,
      });
    }
    
    setAttachments([...attachments, ...newFiles]);
    setError('');
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('请输入需求标题');
      return;
    }
    
    if (!description.trim()) {
      setError('请输入需求描述');
      return;
    }

    addRequirement({
      title,
      description,
      attachments,
      priority,
    });

    setTitle('');
    setDescription('');
    setPriority('P1');
    setAttachments([]);
    setError('');
    setSuccess(true);
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">提交需求</h2>
        
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
            ✓ 需求提交成功！
          </div>
        )}
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">需求标题 *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              placeholder="请输入需求标题"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">需求描述 *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
              placeholder="请详细描述您的需求..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">需求描述附件</label>
            <p className="text-xs text-gray-500 mb-2">支持上传至多3个附件，支持图片、PDF、Excel格式</p>
            
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                attachments.length >= 3
                  ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  : 'border-gray-300 hover:border-primary-400 hover:bg-primary-50 cursor-pointer'
              }`}
              onClick={() => attachments.length < 3 && document.getElementById('file-input')?.click()}
            >
              <input
                id="file-input"
                type="file"
                multiple
                accept="image/*,.pdf,.xls,.xlsx"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">
                {attachments.length >= 3 ? '已达到最大附件数量' : '点击或拖拽文件到此处上传'}
              </p>
            </div>
            
            {attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    {getFileIcon(attachment.type)}
                    <span className="flex-1 text-sm text-gray-700 truncate">{attachment.name}</span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(index)}
                      className="p-1 hover:bg-red-100 rounded-full text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">需求优先级 *</label>
            <div className="flex gap-6">
              {(['P0', 'P1', 'P2'] as const).map((p) => (
                <label
                  key={p}
                  className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg border-2 transition-all ${
                    priority === p
                      ? 'border-accent-500 bg-accent-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={p}
                    checked={priority === p}
                    onChange={(e) => setPriority(e.target.value as Requirement['priority'])}
                    className="w-4 h-4 text-accent-500 focus:ring-accent-500"
                  />
                  <span className={`font-medium ${priority === p ? 'text-accent-600' : 'text-gray-700'}`}>
                    {p}
                  </span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              P0-紧急 | P1-重要 | P2-一般
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 transition-all"
          >
            提交需求
          </button>
        </form>
      </div>
    </div>
  );
};
