import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioDataService } from './services/portfolio-data.service';
import { Project, Skill, Experience } from './models/portfolio.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent],
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

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  handleContactForm(event: Event): void {
    event.preventDefault();
    alert('Thanks for reaching out! This is a demo - connect your own backend to handle submissions.');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
