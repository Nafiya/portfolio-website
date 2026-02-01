import { Injectable } from '@angular/core';
import { Project, Skill, Experience, Education, SocialLink } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  // Personal Information
  personalInfo = {
    name: 'Nafiya',
    title: 'Lead Full Stack Developer',
    bio: 'Passionate lead full-stack developer with 8+ years of experience building scalable backend systems using Java, Spring Boot, and microservices. Strong background in distributed systems, APIs, event-driven architectures, and cloud-native design, with hands-on experience in Kafka, Redis, and system performance optimization. Passionate about solving complex problems, designing resilient systems, and contributing as a senior individual contributor in product-focused engineering teams.',
    email: 'sdnafiya6@gmail.com',
    phone: '+1 (782) 882-8295',
    location: 'Halifax, NS, Canada',
    resumeUrl: 'assets/resume.pdf'
  };

  // Social Links
  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Nafiya', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nafiya-sayed-891503106/', icon: 'linkedin' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/Nafiya/', icon: 'leetcode' },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=sdnafiya6@gmail.com', icon: 'email' }
  ];

  // Projects
  projects: Project[] = [
    {
      id: 1,
      title: 'Nearby Finder Service',
      description: 'A geolocation-based service for finding nearby places using Redis GEO commands and geohashing. Built with Spring Boot backend and Angular frontend, featuring real-time location tracking and efficient spatial queries.',
      technologies: ['Spring Boot', 'Angular 17', 'Redis', 'PostgreSQL', 'TypeScript', 'Docker'],
      image: 'assets/projects/nearby-service.png',
      github: 'https://github.com/Nafiya/Nearby_Search_Service',
      demo: 'https://nearby-service-demo.netlify.app',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Implements microservices architecture with Spring Cloud.',
      technologies: ['Spring Boot', 'React', 'MongoDB', 'Stripe API', 'Kubernetes'],
      image: 'assets/projects/ecommerce.png',
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.netlify.app',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and productivity analytics. Built with modern stack and WebSocket for live updates.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MySQL', 'Material Design'],
      image: 'assets/projects/task-manager.png',
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.netlify.app',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with real-time data, forecasts, and interactive maps. Features location-based weather tracking and historical data visualization.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      image: 'assets/projects/weather-dashboard.png',
      github: 'https://github.com/yourusername/weather-dashboard',
      featured: false,
      category: 'Frontend'
    },
    {
      id: 5,
      title: 'Blog CMS',
      description: 'Content Management System for blogs with markdown editor, media management, SEO optimization, and analytics dashboard. Supports multiple authors and categories.',
      technologies: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'Redis', 'AWS S3'],
      image: 'assets/projects/blog-cms.png',
      github: 'https://github.com/yourusername/blog-cms',
      featured: false,
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'This responsive portfolio website showcasing projects, skills, and experience. Built with Angular 17 and deployed on Netlify.',
      technologies: ['Angular 17', 'TypeScript', 'CSS3', 'Netlify'],
      image: 'assets/projects/portfolio.png',
      github: 'https://github.com/Nafiya/portfolio-website',
      demo: 'https://nafiya-sayed.com',
      featured: false,
      category: 'Frontend'
    }
  ];

  // Skills
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML5/CSS3', level: 95, category: 'frontend' },
    { name: 'CSS', level: 80, category: 'frontend' },
    
    // Backend
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'Java', level: 90, category: 'backend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'Redis', level: 80, category: 'backend' },
    
    // Tools & Others
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 85, category: 'tools' },
    { name: 'Azure', level: 70, category: 'tools' },
    { name: 'REST API', level: 95, category: 'other' },
    { name: 'Microservices', level: 80, category: 'other' },
    { name: 'Agile/Scrum', level: 85, category: 'other' }
  ];

  // Experience
  experience: Experience[] = [
    {
      id: 1,
      company: 'American Airlines - Pilot Technology',
      position: 'Technical Lead',
      period: 'Nov 2022 - Present',
      location: 'Halifax, Nova Scotia',
      description: 'Technical Lead for American Airlines’ Pilot Technology platform, building and supporting mission-critical applications used by ~15,000 pilots. Led design reviews, cloud-migration initiatives, and implemented a resilient batch-recovery solution that significantly reduced operational errors. Hands-on contributor with deep experience in Java, Spring Boot, Kafka, Angular, and Azure',
      current: true,
      achievements: [
        'Led an 11-member engineering team to deliver pilot-critical features end-to-end, ensuring on-time delivery for all major releases',
        'Drove design reviews for new features and multiple cloud-migration initiatives, improving system reliability and scalability',
        'Proposed and implemented an enhanced batch-recovery mechanism, preventing ~100% potential pay claim errors monthly and improving operational accuracy by 30%',
        'Reduced 24/7 production support costs by ~70% by automating routine updates and establishing a streamlined incident-management workflow',
        'Participated in the hiring process, mentoring, and onboarding 4+ full-stack developers'
      ]
    },
    {
      id: 2,
      company: 'American Airlines - Pilot Technology',
      position: 'Senior Full Stack Developer',
      period: 'Jul 2019 - Oct 2022',
      location: 'Chennai, TamilNadu',
      description: 'Senior Full Stack Developer building and enhancing mission-critical applications used by pilots for operational workflows. Focused on developing scalable Spring Boot microservices, Angular-based user interfaces, and performance-optimized data access layers while ensuring production readiness across QA and business testing environments.',
      current: false,
      achievements: [
        'Designed and implemented new features using Spring Boot and Angular, ensuring high-quality, on-time feature delivery',
        'Optimized database queries and implemented indexing, improving API response times by ~25%',
        'Performed code reviews to maintain code quality and enforce best practices',
        'Mentored junior developers, providing technical guidance and taking ownership of sprint deliverables',
        'Diagnosed and resolved cloud environment issues during QA and BU testing, documenting solutions for future reference'
      ]
    },
    {
      id: 3,
      company: 'Kohls - Retail',
      position: 'Java Developer',
      period: 'Nov 2017 - Jun 2019',
      location: 'Chennai, TamilNadu',
      description: 'Java Developer contributing to high-traffic e-commerce applications. Worked on backend services and web interfaces to support core retail workflows, collaborating with cross-functional teams to deliver reliable, scalable features and improve system performance',
      current: false,
      achievements: [
        'Implemented REST APIs using Spring Boot for backend services',
        'Integrated Hazelcast in-memory caching, reducing API latency by ~40% and decreasing load on downstream services',
        'Debugged and resolved production issues by identifying root causes and implementing fixes'
      ]
    }
  ];

  // Education
  education: Education[] = [
    {
      id: 1,
      institution: 'Sree Vidyanikethan Engineering College',
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      period: '2013 - 2017',
      description: 'Graduated with 8.4 CGPA. Specialized in Object Oriented Programming, Databases, Data Structures and Algorithms, Oper-ating Systems, Computer Networks'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(s => s.category === category);
  }

  getExperience(): Experience[] {
    return this.experience;
  }

  getEducation(): Education[] {
    return this.education;
  }

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }

  getPersonalInfo() {
    return this.personalInfo;
  }
}
