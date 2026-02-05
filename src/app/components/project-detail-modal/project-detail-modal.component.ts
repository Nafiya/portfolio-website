import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail-modal.component.html',
  styleUrl: './project-detail-modal.component.css'
})
export class ProjectDetailModalComponent {
  @Input() project: Project | null = null;
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscKey(): void {
    this.close();
  }
}
