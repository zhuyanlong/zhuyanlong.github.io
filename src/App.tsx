// src/App.tsx
// 你的 TypeScript React 组件
import React from 'react';
import { RESUME_DATA } from './data'; // 假设你已将 data.js 改名为 data.ts 或 data.js

// 引入你的 CSS 文件
import './App.css'; 
import { resume } from 'react-dom/server';

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

interface ExperienceData {
  company: string;
  title: string;
  department: string;
  date: string;
  location: string;
  details: string[];
}

interface TimelineProps {
  experiences: ExperienceData[];
}

// 头部组件
const Header = ({ name, phone, email, location }: HeaderData) => (
  <header className="resume-header">
    <h1 className="name">{name}</h1> 
    <div className="contact-info">
      <span className="phone">{phone}</span> | 
      <span className="email">{email}</span> | 
      <span className="location">{location}</span>
    </div>
  </header>
);

// 技能组件
const Skills = ({ languages, frameworks, databases }: SkillsData) => (
  <section className="resume-section skills">
    <h2>技能</h2>
    <div className="skills-group">
      <p className="skills-item">
        <strong>编程语言:</strong>{languages.join(' / ')}
      </p>
      <p className="skills-item">
        <strong>基础框架:</strong>{frameworks.join(' / ')}
      </p>
      <p className="skills-item">
        <strong>数据库:</strong>{databases.join(' / ')}
      </p>
    </div>
  </section>
);

const TimelineItem = (data: ExperienceData) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h3 className="timeline-title">
        {data.title} @ {data.company}
      </h3>

      <div className="timeline-meta">
        <span className="timeline-data">{data.date}</span>
        <span className="timeline-location">/ {data.location}</span>
      </div>

      <ul className='timeline-details'>
        {data.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Timeline = ({ experiences }: TimelineProps) => (
  <section className='resume-section experience'>
    <h2>工作经历</h2>

    <div className="timeline-container">
      {experiences.map((experience, index) => (
        <TimelineItem
        key={index}
        {...experience}
        />
      ))}
    </div>
  </section>
);

// --- 主应用组件 ---

const App = () => {
  return (
    <div className="resume-container">
      <Header {...RESUME_DATA.header} />

      <Skills {...RESUME_DATA.skills} />

      <Timeline experiences={RESUME_DATA.experience}/>
      
      {/* ... 渲染项目经历和教育经历的逻辑 ... */}
      
    </div>
  );
};

export default App;