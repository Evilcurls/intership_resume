const translations = {
  en: {
    pageTitle: "Sihan Weng | Research Portfolio",
    navWork: "Work",
    navPapers: "Papers",
    navEducation: "Education",
    eyebrow: "Research portfolio · Beijing",
    heroLineOne: "I build AI that",
    heroLineTwo: "listens carefully.",
    intro:
      "I am Sihan Weng, an incoming PhD student at Communication University of China. My work explores speech quality assessment, self-supervised audio representations, and multimodal evaluation.",
    contact: "Get in touch",
    resume: "Résumé",
    portraitAlt: "Portrait of Sihan Weng",
    portraitCaption: "Speech · Multimodal learning · Evaluation",
    focusLabel: "Current focus",
    focusStatement:
      "Making machine judgments of generated speech more reliable, interpretable, and transferable across datasets.",
    workTitle: "Selected work",
    researchProject: "Research project",
    speechProjectTitle: "Robust evaluation for generated speech",
    speechProjectDesc:
      "Reproduced two recent speech-quality paradigms - TTSD-S2 and SQ-LLM - then stress-tested them beyond their original datasets. The study combines objective distribution metrics with explainable LLM judgments to understand where quality predictors generalize and where they fail.",
    metricSystems: "TTS systems compared",
    metricClips: "speech clips evaluated",
    metricDimensions: "quality dimensions",
    modelTraining: "Model training",
    medicalTitle: "MedicalGPT alignment",
    medicalDesc:
      "Built an end-to-end training pipeline for Qwen2.5-7B, spanning continued pre-training, supervised fine-tuning, PPO, and DPO. Curated domain and preference data to improve medical knowledge retention and cross-domain clinical reasoning.",
    medicalResult: "accuracy on the medical subset of C-Eval",
    challenge: "Research challenge",
    aigvTitle: "Multi-dimensional quality assessment for AI-generated video",
    aigvDesc:
      "Helped develop AIGVEval, aligning semantic, technical, and motion-quality features with a language model. The system used BLIP, 3D Swin Transformer, SlowFast-R50, and LoRA-tuned Vicuna-7B for holistic video-quality regression.",
    aigvResult: "on the challenge evaluation",
    papersTitle: "Papers",
    paperOneDesc:
      "A multi-task framework that uses self-supervised speech representations, temporal attention, and feature fusion to assess fullness, brightness, and resonance. The work also introduces CUC-TE, a 6,000-sample expert-annotated timbre dataset.",
    paperTwoDesc:
      "A multimodal emotion-recognition framework combining hierarchical sequential fusion, sentiment-enhanced learning, and a context-similarity bi-level graph to model both local dialogue structure and long-range context.",
    paperThreeDesc:
      "A holistic evaluator for AI-generated videos that encodes semantics, technical defects, and motion quality separately, then uses multimodal prompting and LoRA adaptation to map those signals to quality scores.",
    educationTitle: "Education",
    cuc: "Communication University of China",
    phd: "PhD · Information and Communication Engineering",
    masters: "MEng · Information and Communication Engineering",
    qdu: "Qingdao University",
    bachelors: "BEng · Communication Engineering",
    closingLabel: "Open to research internships",
    closingTitle: "Let’s make intelligent systems better listeners.",
    footer: "Designed for clarity. Built for the web.",
  },
  zh: {
    pageTitle: "翁思汉｜研究主页",
    navWork: "研究",
    navPapers: "论文",
    navEducation: "教育",
    eyebrow: "研究主页 · 北京",
    heroLineOne: "让人工智能",
    heroLineTwo: "更懂得聆听。",
    intro:
      "我是翁思汉，即将在中国传媒大学攻读博士学位。我的研究聚焦语音质量评估、自监督音频表征与多模态评价。",
    contact: "联系我",
    resume: "简历",
    portraitAlt: "翁思汉的照片",
    portraitCaption: "语音 · 多模态学习 · 质量评价",
    focusLabel: "当前关注",
    focusStatement: "让机器对生成式语音的判断更加可靠、可解释，并能跨数据集迁移。",
    workTitle: "研究项目",
    researchProject: "研究项目",
    speechProjectTitle: "生成式语音质量评估的跨数据集验证",
    speechProjectDesc:
      "复现 TTSD-S2 与 SQ-LLM 两类语音质量评估方法，并在原论文之外的数据集上开展压力测试。研究将分布距离指标与可解释的大模型判断相结合，分析质量预测器在哪些场景能够泛化、又会在哪里失效。",
    metricSystems: "个 TTS 系统",
    metricClips: "条语音完成评估",
    metricDimensions: "个质量维度",
    modelTraining: "模型训练",
    medicalTitle: "MedicalGPT 训练与偏好对齐",
    medicalDesc:
      "基于 Qwen2.5-7B 搭建从增量预训练、监督微调到 PPO、DPO 的完整训练流程，并构建领域知识与偏好数据，提升模型的医学知识保持与跨领域临床推理能力。",
    medicalResult: "C-Eval 医学相关验证集准确率",
    challenge: "科研竞赛",
    aigvTitle: "AI 生成视频的多维质量评估",
    aigvDesc:
      "参与构建 AIGVEval，将视频语义、技术失真与运动质量特征对齐至语言模型。系统融合 BLIP、3D Swin Transformer、SlowFast-R50 与 LoRA 微调的 Vicuna-7B，实现整体视频质量回归。",
    aigvResult: "挑战赛评测结果",
    papersTitle: "论文",
    paperOneDesc:
      "提出多任务音色评估框架，利用自监督语音表征、时序注意力与特征融合，对声音的厚度、明亮度和共鸣度进行预测；同时构建包含 6,000 条专家标注语音的 CUC-TE 音色数据集。",
    paperTwoDesc:
      "提出多模态情绪识别框架，将层次化序列融合、情感增强联合学习与上下文相似度双层图结合，同时建模对话的局部结构与长程上下文。",
    paperThreeDesc:
      "面向 AI 生成视频，将语义、技术缺陷与运动质量分别编码，再通过多模态提示与 LoRA 适配，把多维特征映射为整体质量分数。",
    educationTitle: "教育经历",
    cuc: "中国传媒大学",
    phd: "博士 · 信息与通信工程",
    masters: "硕士 · 信息与通信工程",
    qdu: "青岛大学",
    bachelors: "本科 · 通信工程",
    closingLabel: "开放研究实习机会",
    closingTitle: "一起让智能系统成为更好的聆听者。",
    footer: "为清晰而设计，为网页而生。",
  },
};

const html = document.documentElement;
const toggle = document.querySelector(".language-toggle");
const toggleOptions = document.querySelectorAll(".toggle-option");

function setLanguage(language) {
  const dictionary = translations[language];
  html.lang = language === "zh" ? "zh-CN" : "en";
  html.dataset.lang = language;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.alt = value;
  });

  toggleOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.toggleLang === language);
  });

  toggle.setAttribute("aria-pressed", String(language === "zh"));
  toggle.setAttribute("aria-label", language === "en" ? "切换到中文" : "Switch to English");
  localStorage.setItem("portfolio-language", language);
}

toggle.addEventListener("click", () => {
  setLanguage(html.dataset.lang === "en" ? "zh" : "en");
});

const savedLanguage = localStorage.getItem("portfolio-language");
const preferredLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
setLanguage(savedLanguage || preferredLanguage);

document.getElementById("year").textContent = String(new Date().getFullYear());

