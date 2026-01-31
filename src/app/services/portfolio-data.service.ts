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
    { name: 'Email', url: 'mailto:sdnafiya6@gmail.com', icon: 'email' }
  ];

  // Projects
  projects: Project[] = [
    {
      id: 1,
      title: 'Nearby Finder Service',
      description: 'A geolocation-based service for finding nearby places using Redis GEO commands and geohashing. Built with Spring Boot backend and Angular frontend, featuring real-time location tracking and efficient spatial queries.',
      technologies: ['Spring Boot', 'Angular 17', 'Redis', 'PostgreSQL', 'TypeScript', 'Docker'],
      image: 'assets/projects/nearby-service.png',
      github: 'https://github.com/yourusername/nearby-service',
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
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourname.com',
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
      company: 'Tech Company Inc.',
      position: 'Senior Full Stack Developer',
      period: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of microservices-based applications using Spring Boot and Angular. Architected and implemented geospatial features using Redis GEO. Mentoring junior developers and conducting code reviews.',
      current: true,
      achievements: [
        'Reduced API response time by 60% through optimization',
        'Led migration to microservices architecture serving 1M+ users',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ]
    },
    {
      id: 2,
      company: 'Startup Solutions',
      position: 'Full Stack Developer',
      period: 'Jun 2021 - Dec 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple client-facing web applications. Implemented RESTful APIs, integrated third-party services, and optimized database queries for improved performance.',
      current: false,
      achievements: [
        'Built 15+ production applications from scratch',
        'Improved application performance by 45%',
        'Introduced testing practices increasing code coverage to 85%'
      ]
    },
    {
      id: 3,
      company: 'Digital Agency',
      position: 'Frontend Developer',
      period: 'Jan 2020 - May 2021',
      location: 'Austin, TX',
      description: 'Built responsive and interactive user interfaces using Angular and React. Collaborated with designers to implement pixel-perfect designs. Improved application performance and user experience.',
      current: false,
      achievements: [
        'Developed responsive UI components used across 10+ projects',
        'Implemented real-time features using WebSockets',
        'Reduced bug count by 40% through comprehensive testing'
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
