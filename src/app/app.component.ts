import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectDetailModalComponent } from './components/project-detail-modal/project-detail-modal.component';
import { PortfolioDataService } from './services/portfolio-data.service';
import { Project, Skill, Experience } from './models/portfolio.models';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent, ProjectDetailModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
  projects: Project[] = [];
  skills: Skill[] = [];
  experience: Experience[] = [];
  personalInfo: any;
  socialLinks: any[] = [];
  currentYear = new Date().getFullYear();

  selectedProjectCategory = 'All';
  projectCategories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  // Project detail modal state
  selectedProject: Project | null = null;

  // Contact form state
  isSubmitting = false;
  submitMessage = '';
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(private dataService: PortfolioDataService) {
    this.projects = dataService.getProjects();
    this.skills = dataService.getSkills();
    this.experience = dataService.getExperience();
    this.personalInfo = dataService.getPersonalInfo();
    this.socialLinks = dataService.getSocialLinks();
  }

  get filteredProjects(): Project[] {
    if (this.selectedProjectCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedProjectCategory);
  }

  get frontendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'frontend');
  }

  get backendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'backend');
  }

  get toolSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'tools');
  }

  filterProjects(category: string): void {
    this.selectedProjectCategory = category;
  }

  openProjectDetail(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetail(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async handleContactForm(event: Event): Promise<void> {
    event.preventDefault();

    if (this.isSubmitting) return;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // EmailJS Configuration - Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_k1j3qlk';  // Replace with your EmailJS service ID
    const TEMPLATE_ID = 'template_m0qgx8q'; // Replace with your EmailJS template ID
    const PUBLIC_KEY = 'Wl3dsDMZiPn6G8hNA';   // Replace with your EmailJS public key

    this.isSubmitting = true;
    this.submitStatus = 'idle';
    this.submitMessage = '';

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: 'sdnafiya6@gmail.com', // Your email address
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);

      this.submitStatus = 'success';
      this.submitMessage = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!';

      // Reset form
      form.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.submitStatus = 'idle';
        this.submitMessage = '';
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);

      this.submitStatus = 'error';
      this.submitMessage = 'Oops! Something went wrong. Please try again or contact me directly at sdnafiya6@gmail.com';

      // Clear error message after 7 seconds
      setTimeout(() => {
        this.submitStatus = 'idle';
        this.submitMessage = '';
      }, 7000);
    } finally {
      this.isSubmitting = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
