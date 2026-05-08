# 需求收集管理系统

一个用于收集、管理和分析用户需求的Web应用。

## 功能特点

### 需求收集页面
- 需求标题输入
- 需求描述输入（支持多行文本）
- 附件上传（支持图片、PDF、Excel格式，最多3个）
- 优先级选择（P0-紧急、P1-重要、P2-一般）
- AI自动分类标签

### 后台管理页面
- 需求列表表格展示
- 按分类标签筛选
- 按优先级筛选
- 查看需求详情
- 删除需求

### BI数据看板
- 总需求数统计
- 优先级分布统计
- 分类分布饼图
- 需求提交趋势图表
- 实时数据更新

## 技术栈

- React 18 + TypeScript
- TailwindCSS 3
- Vite 5
- React Router DOM
- Zustand（状态管理）
- Chart.js + react-chartjs-2（图表）
- Lucide React（图标）

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 页面路由

- `/` - 需求收集页面
- `/admin` - 后台管理页面（需求列表）
- `/admin/dashboard` - BI数据看板

## 视觉设计

采用深蓝色（#0A4DCC）和黄色（#FFC107）为主色调，配合白色背景和灰色文字，打造清晰专业的界面风格。
