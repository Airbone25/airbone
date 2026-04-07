import { Github, Linkedin, Mail } from 'lucide-react';

export const portfolioData = {
  navigation: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Keshav Mehra',
    nickname: 'Airbone',
    roles: ['a Developer', 'a Freelancer', 'a Builder','a Gamer'],
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      {
        text: "Hey, I'm Keshav Mehra, a.k.a Airbone, an undergraduate Computer Science student and a passionate full-stack developer dedicated to building stuff that solves real world problems.",
        highlight: "Keshav Mehra"
      },
      {
        text: "I mainly work with React.js and Next.js as my frameworks of choice, alongside Node.js and TypeScript. My database of choice is either MongoDB or PostgreSQL.",
        highlights: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"]
      },
      {
        text: "I am currently exploring the world of AI and machine learning, and I am excited to integrate these technologies into my projects. I believe in the power of technology to create innovative solutions that can make a difference."
      }
    ]
  },
  experience: [
    {
      title: 'Web Developer Intern',
      company: 'Infits',
      duration: 'Feb 5, 2025 - May 5, 2025',
      location: 'Remote',
      description: 'Worked on developing web applications using cutting-edge technologies including React.js, Firebase, Node.js, and Next.js. Contributed to building scalable and efficient web solutions.',
      techStack: ['React.js', 'Firebase', 'Node.js', 'Next.js', 'JavaScript', 'Web Development'],
    },{
      title: 'NextJS Intern',
      company: 'Tradermesh',
      duration: 'Aug 1, 2025 - Oct 1, 2025',
      location: 'Remote',
      description: 'Built and delivered full-stack product features with Next.js and Supabase, using AI agents for planning, debugging, and rapid prototyping to speed up development and improve product delivery.',
      techStack: ['NextJS','Supabase']
    }
  ],
  skillCategories: [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Next.js', color: '#FFFFFF' },
        { name: 'TypeScript', color: '#007ACC' },
        { name: 'TailwindCSS', color: '#38B2AC' },
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Shadcn', color: '#FFFFFF' },
        { name: 'Framer Motion', color: '#FFFFFF' },
        { name: 'Three.js', color: '#FFFFFF' },
        { name: 'Vite', color: '#646CFF' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', color: '#6DA55F' },
        { name: 'Express.js', color: '#FFFFFF' },
        { name: 'Socket.io', color: '#FFFFFF' },
        { name: 'Websockets', color: '#FFFFFF' },
        { name: 'WebRTC', color: '#646CFF' },
        { name: 'REST APIs', color: '#00A4FF' },
        { name: 'JWTs', color: '#FCC624' },
        { name: 'Flask', color: '#FFFFFF' },
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', color: '#4ea94b' },
        { name: 'PostgreSQL', color: '#316192' },
        { name: 'Supabase', color: '#4479A1' },
        { name: 'Firebase', color: '#FFCA28' },
      ]
    },
    {
      title: 'AI & Data Science',
      skills: [
        { name: 'Python', color: '#3776AB' },
        { name: 'TensorFlow', color: '#FF6F00' },
        { name: 'Scikit-learn', color: '#F7931E' },
        { name: 'Numpy', color: '#013243' },
        { name: 'Pandas', color: '#150458' },
        { name: 'Matplotlib', color: '#E24A33' },
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'C#', color: '#239120' },
        { name: 'Java', color: '#007396' },
        { name: 'C++', color: '#00599C' },
        { name: 'PHP', color: '#777BB4' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', color: '#F05032' },
        { name: 'GitHub', color: '#FFFFFF' },
        { name: 'MarkDown', color: '#F5792A' },
        { name: 'Web Scrapping', color: '#117AC9' },
      ]
    }
  ],
  projects: [
    {
      title: 'VeriMail',
      description: 'VeriMail is a robust, full-stack multi-tenant email verification API platform designed for high-volume validation and scalability',
      techStack: ['Nodejs','ExpressJS','PostgreSQL','Redis','NextJS','Zustand'],
      githubLink: 'https://github.com/Airbone25/VeriMail',
      liveLink: 'https://veri-mail.vercel.app/',
    },
    {
      title: 'Manga-kun',
      description: 'Welcome to Manga-kun, a place where creativity is appreciated. Manga-kun is a platform which provides peoople to show their creative minds and let know people around globe to know about their creations. Here, people can read comic books, novels, mangas, etc. And people who want to showcase their storywriting and drawing skills can upload their creations.',
      techStack: ['React', 'ExpressJS', 'NodeJS', 'MongoDB','Multer','Cloudinary'],
      githubLink: 'https://github.com/Airbone25/Manga-kun',
      liveLink: 'https://manga-kun.vercel.app/',
    },
    {
      title: 'Beautify',
      description: 'Beautify is a powerful and easy-to-use photo editing tool built with React. It allows users to enhance their photos with features like adjusting brightness, contrast, saturation, and more, giving them full control over their image editing experience.',
      techStack: ['React','Vite'],
      githubLink: 'https://github.com/Airbone25/Beautify-Photo-Editor',
      liveLink: 'https://beautify-photo-editor.vercel.app/',
    },
    {
      title: 'Financify',
      description: 'A finance dashboard that provides real-time stock market data, portfolio tracking, and financial news, built with Next.js and PostgreSQL.',
      techStack: ['NextJS', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
      githubLink: 'https://github.com/Airbone25/nextjs-finance-dashboard',
      liveLink: 'https://nextjs-finance-dashboard-gamma.vercel.app/dashboard',
    },
    {
      title: 'ChatApp',
      description: 'A real-time chat application that allows users to create accounts, join rooms, and send messages, built with Node.js, and Socket.io.',
      techStack: ['NodeJS', 'ExpressJS', 'Socket.io'],
      githubLink: 'https://github.com/Airbone25/ChatApp',
      liveLink: 'https://chatapp-b2fm.onrender.com',
    },
  ],
  contact: {
    socialLinks: [
      {
        name: 'GitHub',
        icon: Github,
        url: 'https://github.com/Airbone25',
        color: '#FF8C00',
      },
      {
        name: 'LinkedIn',
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/keshav-mehra-543362296/',
        color: '#0077B5',
      },
      {
        name: 'Email',
        icon: Mail,
        url: 'mailto:keshavmehra2005@gmail.com',
        color: '#EA4335',
      },
    ],
    footerText: 'Made with Heart by Airbone',
    copyright: '© 2025 Keshav Mehra. All rights reserved.'
  }
};
