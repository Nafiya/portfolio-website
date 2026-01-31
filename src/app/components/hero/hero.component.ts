import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('networkCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  personalInfo: any;
  socialLinks: any[] = [];
  typedText = '';
  fullText = '';
  typeIndex = 0;
  isDeleting = false;
  titles = [
    'Full Stack Developer',
    'Spring Boot Expert',
    'Angular Specialist',
    'Problem Solver'
  ];
  currentTitleIndex = 0;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number = 0;
  private mouse = { x: 0, y: 0 };

  constructor(private dataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo = this.dataService.getPersonalInfo();
    this.socialLinks = this.dataService.getSocialLinks();
    this.fullText = this.titles[0];
    this.typeText();
  }

  ngAfterViewInit(): void {
    this.initNetwork();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initNetwork(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.resizeCanvas();
    this.createParticles();
    this.animate();

    window.addEventListener('resize', () => this.resizeCanvas());
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });
  }

  private resizeCanvas(): void {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.createParticles();
  }

  private createParticles(): void {
    this.particles = [];
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 8000);

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach((particle, i) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

      // Draw connections
      this.particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          // Check distance to mouse for highlight effect
          const mouseDistToLine = this.distanceToLine(
            this.mouse.x, this.mouse.y,
            particle.x, particle.y,
            otherParticle.x, otherParticle.y
          );

          const isNearMouse = mouseDistToLine < 100;
          const opacity = (1 - distance / 150) * (isNearMouse ? 0.9 : 0.25);

          this.ctx.beginPath();
          this.ctx.strokeStyle = isNearMouse
            ? `rgba(96, 165, 250, ${opacity})`  // Bright blue when near mouse
            : `rgba(148, 163, 184, ${opacity})`; // Lighter gray normally
          this.ctx.lineWidth = isNearMouse ? 2 : 0.8;
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.stroke();
        }
      });

      // Draw particle
      const distToMouse = Math.sqrt(
        Math.pow(particle.x - this.mouse.x, 2) +
        Math.pow(particle.y - this.mouse.y, 2)
      );
      const isNearMouse = distToMouse < 120;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, isNearMouse ? 4 : 2.5, 0, Math.PI * 2);
      this.ctx.fillStyle = isNearMouse
        ? 'rgba(96, 165, 250, 0.9)'
        : 'rgba(203, 213, 225, 0.6)';
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private distanceToLine(px: number, py: number, x1: number, y1: number, x2: number, y2: number): number {
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    const param = lenSq !== 0 ? dot / lenSq : -1;

    let xx, yy;

    if (param < 0) {
      xx = x1;
      yy = y1;
    } else if (param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  typeText(): void {
    const current = this.currentTitleIndex;
    const fullText = this.titles[current];

    if (!this.isDeleting) {
      this.typedText = fullText.substring(0, this.typeIndex + 1);
      this.typeIndex++;

      if (this.typeIndex === fullText.length) {
        setTimeout(() => {
          this.isDeleting = true;
          this.typeText();
        }, 2000);
        return;
      }
    } else {
      this.typedText = fullText.substring(0, this.typeIndex - 1);
      this.typeIndex--;

      if (this.typeIndex === 0) {
        this.isDeleting = false;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        setTimeout(() => this.typeText(), 500);
        return;
      }
    }

    setTimeout(() => this.typeText(), this.isDeleting ? 50 : 100);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume(): void {
    window.open(this.personalInfo.resumeUrl, '_blank');
  }
}
