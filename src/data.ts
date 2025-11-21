
export const RESUME_DATA = {
  header: {
    name: "朱彦龙",
    phone: "13051620586",
    email: "zhuyanlongcs@hotmail.com",
    location: "北京",
  },

  // 技能栈 [cite: 19, 20, 21, 22, 56, 68, 76]
  skills: {
    languages: ["Python", "Java", "Typescript"],
    frameworks: ["FastAPI", "LangGraph", "vllm"],
    databases: ["Redis", "Milvus", "MySQL"], 
    techStacks: ["FAISS", "Langchain", "Prompt", "Restful API", "HarmonyOS", "Cangjie"], 
  },

  // 自我评价 [cite: 78, 79, 80, 81]
  summary: [
    "乐于沟通,能够和团队成员互相合作,共同进步。",
    "善于学习和钻研,责任感强,承压能力强能够及时完成任务。",
    "本硕均软件工程毕业,专业技能过硬,长期从事后端开发工作,有较强的项目落地能力。",
  ],

  // 工作经历 [cite: 23]
  experience: [
    {
      company: "北京华为数字技术有限公司",
      title: "通用软件开发工程师",
      department: "编程语言实验室",
      date: "2022年07月-2025年11月",
      location: "北京",
      details: [
        "23年9月加入2012实验室AI项目组 [cite: 28]",
        "基于OpenAI的embedding模型建立java代码和doc的FAISS索引,基于DeepSeek模型生成Java项目测试用例 [cite: 29]",
        "参与基于大语言模型的Cangjie代码自动生成系统的探索落地,提升Cangjie语言的竞争力 [cite: 29]",
        "22年7月入职数据通信产品部 [cite: 30]",
        "作为核心开发人员,参与华为智能网络管理平台iMaster NCE的研发工作 [cite: 31]",
        "担任网络预测仿真模块的特性owner,设计并实现了多个接口,跨部门沟通对齐接口,确保项目按时高质量交付 [cite: 32]",
      ],
    },
    {
      company: "腾讯科技有限公司 (实习)",
      title: "Golang开发工程师",
      department: "PCG内容平台部",
      date: "2021年05月-2021年09月",
      location: "北京",
      details: [
        "参与腾讯智能创作平台热点榜单的开发工作。 [cite: 34]",
      ],
    },
  ],

  // 项目经历 [cite: 37]
  projects: [
    {
      name: "美团众包端智能平台 - 契约编程开发落地",
      date: "2025年01月-2025年08月",
      tech: ["Python", "FAISS", "Langchain", "Prompt"],
      work: [
        "基于LLM(Deep Seek)自动生成Java项目的测试代码,检测Java项目代码中存在的bug。 [cite: 40]",
        "使用defects4j数据集,收集Java项目的源代码、测试代码和JavaDoc [cite: 41, 42]；使用javalang库对Java源代码和测试代码进行切分 [cite: 43]。",
        "使用LangChain的Text Splitters对JavaDoc进行切分 [cite: 44]；调用DeepSeek模型提取总结 [cite: 45]。",
        "使用OpenAI的embedding模型进行向量化和构建FAISS索引 [cite: 47]。",
        "提取关键信息（测试方法名、被测方法名称、方法体等）生成项目metadata [cite: 49, 50]。",
        "设计用于生成测试用例、生成测试代码、编译错误反馈等的Prompt模板 [cite: 52]。",
        "迭代编译和执行生成的测试代码，并将编译错误反馈大模型进行改进 [cite: 56]。",
      ],
    },
    {
      name: "iMaster网络预测仿真服务开发",
      date: "2022年08月-2023年09月",
      tech: ["Java", "MySQL", "MyBatis", "Restful API"],
      work: [
        "为防止操作人员修改网络配置后导致网络震荡,设计开发网络预测仿真服务 [cite: 61]。支持修改配置变更网络影响提前感知,错误配置提前发现 [cite: 61]。",
        "设计并开发全局设置接口，通过校验时间戳方式防止并发修改 [cite: 63, 64]；验证结果查询接口利用MyBatis框架读取数据并返回前端 [cite: 65]。",
        "设计数据库表结构，确保数据的完整性和一致性 [cite: 66]。",
        "利用MyBatis编写高效SQL查询和映射文件，提升数据访问性能并添加索引 [cite: 67]。",
      ],
      result: "在广东电信成功落地 [cite: 69]。",
    },
    {
      name: "工商银行金融日历",
      date: "2024年03月-2024年06月",
      tech: ["HarmonyOS", "Cangjie", "TypeScript"],
      work: [
        "开发日历界面，完成日历的公农历节气展示功能 [cite: 72]。",
        "完成滑动切换日历月份功能 [cite: 73]。",
        "完成通过界面滚轮选择日历年月功能 [cite: 74]。",
        "用户点击日历上的日期后，日历做出相应反馈 [cite: 75]。",
      ],
      result: "目前已上架鸿蒙应用市场 [cite: 77]。",
    },
  ],

  // 教育经历 [cite: 1]
  education: [
    {
      institution: "北京邮电大学 211 双一流",
      department: "软件工程硕士计算机学院",
      date: "2018年09月-2022年06月",
      location: "北京",
      courses: ["智能算法", "数据仓库与知识发现", "数据挖掘技术", "数值分析", "网络科学", "面向对象系统的分析与设计"],
    },
    {
      institution: "University of Texas at Arlington",
      department: "计算机科学 硕士计算机科学与工程系",
      date: "2019年08月-2020年08月",
      location: "Texas", 
      gpa: "3.85/4.0", 
      courses: ["算法", "人工智能", "机器学习", "数据挖掘", "软件工程", "云计算", "高级软件工程"],
    },
    {
      institution: "南京邮电大学 双一流",
      department: "软件工程 本科 计算机学院",
      date: "2014年08月-2018年05月",
      location: "南京",
      courses: ["算法分析与设计", "数据结构", "人工智能", "Java语言程序开发", "C++语言程序开发", "数据库", "云计算"],
    },
  ],
};