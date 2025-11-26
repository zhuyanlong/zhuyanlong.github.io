// src/App.tsx
// 你的 TypeScript React 组件
import React from 'react';
import { RESUME_DATA } from './data'; // 假设你已将 data.js 改名为 data.ts 或 data.js

// 引入你的 CSS 文件
import './App.css'; 

// 1. 定义 Header 部分的数据结构
interface HeaderData {
  name: string;
  phone: string;
  email: string;
  location: string;
}

// 2. 定义 Skills 部分的数据结构
interface SkillsData {
  languages: string[];
  frameworks: string[];
  databases: string[];
}

// 3. 定义 Header 组件的 Props 接口
interface HeaderProps {
  data: HeaderData;
}

// 4. 定义 Skills 组件的 Props 接口
interface SkillsProps {
  data: SkillsData;
}
// --- 可重用的组件 ---


// 头部组件
const Header: React.FC<HeaderProps> = ({ data }) => (
  <header className="resume-header">
    <h1 className="name">{data.name}</h1> 
    <div className="contact-info">
      <span className="phone">{data.phone}</span> | 
      <span className="email">{data.email}</span> | 
      <span className="location">{data.location}</span>
    </div>
  </header>
);

// 技能组件
const Skills: React.FC<SkillsProps> = ({ data }) => (
  <section className="resume-section skills">
    <h2>技能</h2>
    <div className="skills-group">
      <p className="skills-item">
        <strong>编程语言:</strong>{data.languages.join(' / ')}
      </p>
      <p className="skills-item">
        <strong>基础框架:</strong>{data.frameworks.join(' / ')}
      </p>
      <p className="skills-item">
        <strong>数据库:</strong>{data.databases.join(' / ')}
      </p>
    </div>
  </section>
);

// ... (省略 TimelineItem 组件以保持简洁，但请确保在你的文件中包含它)

// --- 主应用组件 ---

const App = () => {
  return (
    <div className="resume-container">
      <Header data={RESUME_DATA.header} />

      <Skills data={RESUME_DATA.skills} />

      <section className="resume-section experience">
        <h2>工作经历</h2>
        {/* 渲染工作经历的逻辑 */}
        {RESUME_DATA.experience.map((_, index) => (
          <div key={index}>/* 你的 TimelineItem 组件 */</div>
        ))}
      </section>
      
      {/* ... 渲染项目经历和教育经历的逻辑 ... */}
      
    </div>
  );
};

export default App;