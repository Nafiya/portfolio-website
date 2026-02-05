import { Injectable } from '@angular/core';
import { Project, ProjectDetail, Skill, Experience, Education, SocialLink } from '../models/portfolio.models';

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
      title: 'SQL Contention vs Cache Optimization',
      description: 'How high concurrency affects database performance, why PostgreSQL can experience contention under load, and how a Redis cache resolves that bottleneck. This page breaks down the process step by step and highlights the impact of caching on system responsiveness and efficiency',
      technologies: ['Spring Boot', 'Angular 17', 'Redis', 'PostgreSQL', 'TypeScript', 'Docker'],
      image: 'assets/projects/nearby-service.png',
      github: 'https://github.com/Nafiya/db-contention-vs-cache-demo-static',
      demo: 'db-contention-vs-cache-demo.netlify.app',
      featured: true,
      category: 'Full Stack',
      detail: {
        subtitle: 'Eliminating Database Contention with Redis Atomic Caching',
        sections: [
          {
            number: 1,
            title: 'The Problem — Database Hot-Spot Contention',
            content: 'Consider a daily transaction limit system: every API call must check and decrement a customer\'s remaining limit for the day. When 20+ threads hit the same row simultaneously, PostgreSQL serializes them with row-level locks. Each thread waits for the previous one to commit before acquiring the lock.',
            highlights: [
              'Lock Waits — Queries pile up in pg_stat_activity with wait_event_type = \'Lock\'',
              'Throughput Collapse — TPS drops dramatically as threads spend most of their time waiting, not working',
              'Latency Spikes — Average latency climbs from single-digit ms to 50–200ms under contention'
            ],
            codeExample: {
              language: 'SQL',
              label: 'Every concurrent request executes this',
              code: 'UPDATE daily_limits\nSET    used_amount = used_amount + :amount\nWHERE  customer_id = :id\n  AND  year = :year AND month = :month\n  AND  used_amount + :amount <= max_limit;'
            }
          },
          {
            number: 2,
            title: 'How to Identify It — Diagnosing Lock Contention',
            content: 'During the "Direct DB" phase, the PostgreSQL terminal shows queries piling up with WAITING ON LOCKS status. When this number is high, most of your threads are blocked, waiting for a single row lock. This is the hot-spot contention pattern.',
            highlights: [
              '18 active connections, 14 WAITING ON LOCKS — avg latency: 45ms',
              '20 active connections, 16 WAITING ON LOCKS — avg latency: 78ms',
              'Compare with Cache phase: PostgreSQL terminal shows "Redis handling requests — no DB contention"'
            ]
          },
          {
            number: 3,
            title: 'The Solution — Redis Atomic Lua Scripts',
            content: 'Instead of hitting PostgreSQL for every request, we cache the limit state in Redis and use an atomic Lua script to check-and-decrement in a single operation — with zero locks. Redis processes all commands on a single thread, so no two operations ever run concurrently on the same data.',
            highlights: [
              'Single-Threaded Event Loop — Redis executes one command at a time',
              'Atomic Lua Scripts (EVALSHA) — A Lua script runs as a single atomic unit',
              'Check + Decrement in One Call — reads limit, checks amount, decrements atomically',
              'No Locks, No Waits — no lock waits, no deadlocks, no contention — ever'
            ],
            codeExample: {
              language: 'Lua',
              label: 'limit_consume_script — runs atomically in Redis',
              code: 'local current = tonumber(redis.call(\'GET\', KEYS[1]) or \'0\')\nlocal amount  = tonumber(ARGV[1])\nlocal maxLim  = tonumber(ARGV[2])\n\nif current + amount > maxLim then\n  return -1  -- limit exceeded\nend\n\nredis.call(\'INCRBY\', KEYS[1], amount)\nreturn current + amount  -- new used amount'
            }
          },
          {
            number: 4,
            title: 'Write-Behind Cache Architecture',
            content: 'This project uses a write-behind cache pattern: Redis handles all real-time limit checks, and changes are periodically synced back to PostgreSQL. Each EVALSHA call completes in microseconds. Even with 20 concurrent clients, Redis processes them sequentially at 10,000+ ops/sec.',
            highlights: [
              'Sub-millisecond Latency — Redis responds in microseconds, no disk I/O, no lock waits',
              'Atomically Correct — Lua scripts guarantee no race conditions, limits are never over-consumed',
              'DB Load Eliminated — PostgreSQL handles only periodic batch syncs, no per-request contention',
              'Cache Warm-Up — On startup, limits are loaded from PostgreSQL into Redis for instant readiness'
            ]
          }
        ],
        architecture: {
          flow: [
            'API Request → Consume limit',
            'Redis Cache → Atomic Lua script: Check + Decrement',
            'Response → Approved / Denied (< 1ms)',
            'Periodic Sync (background) → PostgreSQL batch UPDATE'
          ],
          benefits: [
            'Sub-millisecond latency',
            'Atomically correct — no race conditions',
            'Database load eliminated',
            'Cache warm-up on startup'
          ]
        }
      }
    },
    {
      id: 2,
      title: 'Nearby Finder Service',
      description: 'A geolocation-based service for finding nearby places using Redis GEO commands and geohashing. Built with Spring Boot backend and Angular frontend, featuring real-time location tracking and efficient spatial queries.',
      technologies: ['Spring Boot', 'Angular 17', 'Redis', 'PostgreSQL', 'TypeScript', 'Docker'],
      image: 'assets/projects/nearby-service.png',
      github: 'https://github.com/Nafiya/Nearby_Search_Service',
      demo: 'https://nearby-service-demo.netlify.app',
      featured: true,
      category: 'Full Stack',
      detail: {
        subtitle: 'Geolocation-Based Search Using Redis GEO Commands and Geohashing',
        sections: [
          {
            number: 1,
            title: 'The Problem — Spatial Queries at Scale',
            content: 'Finding nearby locations based on coordinates is computationally expensive with traditional SQL. Calculating distances using the Haversine formula across millions of rows leads to full table scans, making real-time proximity searches impractical for user-facing applications.',
            highlights: [
              'Full table scans for every proximity query — O(n) per request',
              'Haversine formula is CPU-intensive when applied to millions of rows',
              'Traditional B-tree indexes cannot efficiently index 2D spatial data'
            ]
          },
          {
            number: 2,
            title: 'The Solution — Redis GEO with Geohashing',
            content: 'Redis GEO commands use geohashing to convert latitude/longitude pairs into a single sorted-set score. This enables O(log(n)) proximity searches using GEORADIUS, which internally filters by geohash prefix — no expensive distance calculations needed for the initial filter.',
            highlights: [
              'GEOADD — stores locations with lng/lat as sorted-set scores using geohash encoding',
              'GEORADIUS — finds all members within a given radius in O(log(n) + m) time',
              'GEODIST — calculates exact distance between two members',
              'Geohash prefix matching enables efficient range scans on sorted sets'
            ],
            codeExample: {
              language: 'Redis',
              label: 'Core GEO commands used in the service',
              code: 'GEOADD locations -63.5752 44.6488 "Halifax_Library"\nGEOADD locations -63.5690 44.6476 "Halifax_Citadel"\n\nGEORADIUS locations -63.5720 44.6480 2 km\n  ASC COUNT 10 WITHDIST WITHCOORD'
            }
          },
          {
            number: 3,
            title: 'Spring Boot Backend Architecture',
            content: 'The backend exposes REST APIs that accept coordinates and search radius, delegates to a Redis-backed repository layer using Spring Data Redis, and returns ranked results with distances. PostgreSQL stores the canonical location data, while Redis serves as the spatial query engine.',
            highlights: [
              'REST API accepts lat/lng/radius and returns nearby locations with distances',
              'Spring Data Redis integrates with Redis GEO commands natively',
              'PostgreSQL stores canonical location metadata (name, address, category)',
              'On startup, location coordinates are synced from PostgreSQL to Redis GEO sets'
            ]
          },
          {
            number: 4,
            title: 'Angular Frontend — Real-Time Map Interface',
            content: 'The Angular frontend provides an interactive map interface where users can click or use their current location to search for nearby places. Results are displayed both on the map and as a ranked list, with real-time updates as the user moves or adjusts the search radius.',
            highlights: [
              'Interactive map with click-to-search functionality',
              'Browser Geolocation API for current-location-based search',
              'Real-time results displayed on map markers and ranked list',
              'Adjustable search radius with instant re-query'
            ]
          }
        ],
        architecture: {
          flow: [
            'User Action → Click on map or use current location',
            'Angular Frontend → Sends lat/lng/radius to REST API',
            'Spring Boot API → Executes GEORADIUS on Redis GEO set',
            'Redis → Returns sorted results with distances in O(log(n))',
            'Response → Nearby locations displayed on map and list'
          ],
          benefits: [
            'O(log(n)) proximity search vs O(n) full table scan',
            'Sub-millisecond spatial queries via Redis in-memory geohash',
            'Real-time interactive map experience',
            'Clean separation: Redis for spatial queries, PostgreSQL for metadata'
          ]
        }
      }
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This responsive portfolio website showcasing projects, skills, and experience. Built with Angular 17 and deployed on Netlify.',
      technologies: ['Angular 17', 'TypeScript', 'CSS3', 'Netlify'],
      image: 'assets/projects/portfolio.png',
      github: 'https://github.com/Nafiya/portfolio-website',
      demo: 'https://nafiya-sayed.com',
      featured: false,
      category: 'Frontend',
      detail: {
        subtitle: 'A Responsive Portfolio Built with Angular 17 Standalone Components',
        sections: [
          {
            number: 1,
            title: 'Design Philosophy',
            content: 'Built with a glassmorphic design system using CSS custom properties for consistent theming. The site supports dark and light modes with smooth transitions, and uses a mobile-first responsive layout throughout.',
            highlights: [
              'Glassmorphism with backdrop-filter blur and translucent backgrounds',
              'CSS custom properties for theme-wide color consistency',
              'Dark/light mode toggle with localStorage persistence',
              'Smooth scroll navigation and staggered fade-in animations'
            ]
          },
          {
            number: 2,
            title: 'Angular 17 Standalone Architecture',
            content: 'Uses Angular 17 standalone components without NgModules, keeping the architecture flat and simple. Data is managed through a centralized service, and the entire site is a single-page application with section-based navigation.',
            highlights: [
              'Standalone components — no NgModules needed',
              'Centralized PortfolioDataService for all content',
              'EmailJS integration for the contact form',
              'Deployed on Netlify with continuous deployment from GitHub'
            ]
          }
        ]
      }
    },
    // {
    //   id: 4,
    //   title: 'Blog CMS',
    //   description: 'Content Management System for blogs with markdown editor, media management, SEO optimization, and analytics dashboard. Supports multiple authors and categories.',
    //   technologies: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'Redis', 'AWS S3'],
    //   image: 'assets/projects/blog-cms.png',
    //   github: 'https://github.com/yourusername/blog-cms',
    //   featured: false,
    //   category: 'Full Stack',
    //   detail: {
    //     subtitle: 'Full-Featured Blog Platform with Markdown Editing and Analytics',
    //     sections: [
    //       {
    //         number: 1,
    //         title: 'Content Management Features',
    //         content: 'A full-featured CMS with a real-time markdown editor, media library with drag-and-drop uploads to AWS S3, and built-in SEO tools that generate meta tags, sitemaps, and Open Graph data automatically.',
    //         highlights: [
    //           'Real-time markdown editor with live preview',
    //           'Media library with drag-and-drop upload to AWS S3',
    //           'Auto-generated SEO meta tags, sitemaps, and Open Graph data',
    //           'Multi-author support with role-based access control'
    //         ]
    //       },
    //       {
    //         number: 2,
    //         title: 'Backend Architecture',
    //         content: 'Spring Boot REST API with PostgreSQL for content storage and Redis for caching frequently accessed posts and session management. The caching layer reduces database load for popular posts and speeds up page renders.',
    //         highlights: [
    //           'Spring Boot REST API with JPA/Hibernate',
    //           'PostgreSQL for structured content and user data',
    //           'Redis caching for hot posts and session management',
    //           'AWS S3 integration for scalable media storage'
    //         ]
    //       },
    //       {
    //         number: 3,
    //         title: 'Analytics Dashboard',
    //         content: 'Built-in analytics dashboard tracking page views, read time, bounce rate, and reader engagement per post. Data is aggregated in PostgreSQL and visualized in the Vue.js frontend with interactive charts.',
    //         highlights: [
    //           'Page views, read time, and bounce rate tracking',
    //           'Per-post engagement analytics',
    //           'Interactive charts built with Vue.js',
    //           'Category and tag-based content organization'
    //         ]
    //       }
    //     ]
    //   }
    // },
    
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
