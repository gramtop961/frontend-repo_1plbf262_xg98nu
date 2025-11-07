import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promise from './components/Promise';
import Path from './components/Path';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const COPY = {
  id: {
    nav: {
      promise: 'Janji Founder',
      path: 'Jalur Transformasi',
      testimonials: 'Testimoni',
      portfolio: 'Portofolio',
      login: 'Masuk',
    },
    hero: {
      title: 'Saya Tidak Hanya Mengajari Anda AI. Saya Akan Menjadikan Anda Arsiteknya.',
      subtitle:
        'Bergabunglah dengan akademi yang dipimpin pendiri untuk membangun pakar AI sejati, bukan hanya pengguna.',
      cta: 'Mulai Perjalanan Anda',
    },
    promise: {
      title: 'Janji Founder',
      subtitle:
        'Pendekatan langsung, tanpa gimmick. Kurikulum kami mengubah Anda dari pengguna AI menjadi arsitek sistem yang berpikir.',
      points: [
        'Mentorship langsung dari founder',
        'Proyek dunia nyata dan sistem AI end-to-end',
        'Standar kualitas industri dan etika',
      ],
      quote:
        'Kami tidak mengajar trik. Kami membangun fondasi berpikir yang membuat Anda relevan hari ini dan berharga besok.',
    },
    path: {
      title: 'Jalur Transformasi',
      subtitle: 'Rancang, bangun, dan luncurkan sistem AI dengan percaya diri.',
      stages: [
        { kicker: 'Stage 01', title: 'Mindset & Framework', desc: 'Bangun kerangka berpikir arsitek AI yang sistematis.' },
        { kicker: 'Stage 02', title: 'System Design', desc: 'Desain pipeline, agen, dan orkestrasi yang robust.' },
        { kicker: 'Stage 03', title: 'Deployment', desc: 'Ops, evaluasi, dan peluncuran yang siap produksi.' },
      ],
    },
    testimonials: {
      title: 'Apa Kata Member',
      subtitle: 'Hasil nyata dari para profesional yang bertransformasi.',
      items: [
        { quote: 'Materi paling rapi dan applicable yang pernah saya ikuti.', author: 'Anisa — Data Scientist' },
        { quote: 'Mindset yang dibangun benar-benar mengubah cara saya bekerja.', author: 'Rico — Product Manager' },
        { quote: 'Akhirnya mengerti cara mendesain agen AI, bukan sekadar prompt.', author: 'Kevin — Software Engineer' },
      ],
    },
    footer: {
      tagline: 'Founder-led Academy for AI Architects',
      rights: 'All rights reserved.',
    },
  },
  en: {
    nav: {
      promise: "Founder's Promise",
      path: 'Transformation Path',
      testimonials: 'Testimonials',
      portfolio: 'Portfolio',
      login: 'Login',
    },
    hero: {
      title: "I won't just teach you AI. I'll turn you into its architect.",
      subtitle:
        'Join a founder-led academy that builds true AI experts—not just users.',
      cta: 'Start Your Journey',
    },
    promise: {
      title: "Founder's Promise",
      subtitle:
        'Direct mentorship and no gimmicks. We turn you from an AI user into a systems thinker.',
      points: [
        'Founder-led mentorship',
        'Real-world projects and end-to-end AI systems',
        'Industry-grade rigor and ethics',
      ],
      quote:
        "We don't teach tricks. We build thinking frameworks that keep you relevant today and valuable tomorrow.",
    },
    path: {
      title: 'The Transformation Path',
      subtitle: 'Design, build, and ship AI systems with confidence.',
      stages: [
        { kicker: 'Stage 01', title: 'Mindset & Framework', desc: 'Build a systematic AI architect mindset.' },
        { kicker: 'Stage 02', title: 'System Design', desc: 'Design pipelines, agents, and robust orchestration.' },
        { kicker: 'Stage 03', title: 'Deployment', desc: 'Ops, evaluation, and production-ready launch.' },
      ],
    },
    testimonials: {
      title: 'What Members Say',
      subtitle: 'Real outcomes from transformed professionals.',
      items: [
        { quote: 'The cleanest, most applicable material I have taken.', author: 'Anisa — Data Scientist' },
        { quote: 'The mindset shift changed how I work.', author: 'Rico — Product Manager' },
        { quote: 'Finally understood how to architect AI agents, not just prompt.', author: 'Kevin — Software Engineer' },
      ],
    },
    footer: {
      tagline: 'Founder-led Academy for AI Architects',
      rights: 'All rights reserved.',
    },
  },
  zh: {
    nav: {
      promise: '创始人的承诺',
      path: '蜕变之路',
      testimonials: '学员见证',
      portfolio: '作品集',
      login: '登录',
    },
    hero: {
      title: '我不仅教你使用 AI，我要让你成为它的架构师。',
      subtitle: '加入由创始人亲自带领的学院，培养真正的 AI 专家，而非普通用户。',
      cta: '开始你的旅程',
    },
    promise: {
      title: '创始人的承诺',
      subtitle: '直面指导，无噱头。让你从 AI 使用者进化为系统化思考者。',
      points: [
        '创始人直接指导',
        '真实项目与端到端 AI 系统',
        '行业级标准与职业伦理',
      ],
      quote: '我们不教技巧，我们构建让你今天有竞争力、明天更有价值的思维框架。',
    },
    path: {
      title: '蜕变之路',
      subtitle: '自信地设计、构建并发布 AI 系统。',
      stages: [
        { kicker: '阶段 01', title: '思维与框架', desc: '构建系统化的 AI 架构师思维。' },
        { kicker: '阶段 02', title: '系统设计', desc: '设计流水线、智能体与稳健编排。' },
        { kicker: '阶段 03', title: '部署', desc: '运维、评估与面向生产的发布。' },
      ],
    },
    testimonials: {
      title: '学员见证',
      subtitle: '见证一次真正的职业跃迁。',
      items: [
        { quote: '内容极其清晰且可落地。', author: 'Anisa — 数据科学家' },
        { quote: '思维方式的改变彻底刷新了我的工作方式。', author: 'Rico — 产品经理' },
        { quote: '终于理解如何设计 AI 智能体，而不只是写提示词。', author: 'Kevin — 软件工程师' },
      ],
    },
    footer: {
      tagline: '面向 AI 架构师的创始人亲授学院',
      rights: '版权所有',
    },
  },
};

export default function App() {
  const [lang, setLang] = useState('id');
  const labels = useMemo(() => COPY[lang], [lang]);

  return (
    <div className="min-h-screen bg-[#101010]">
      <Navbar currentLang={lang} onChangeLang={setLang} labels={labels} />
      <main>
        <Hero labels={labels} onPrimaryClick={() => {}} />
        <Promise labels={labels} />
        <Path labels={labels} />
        <Testimonials labels={labels} />
      </main>
      <Footer labels={labels} />
    </div>
  );
}
