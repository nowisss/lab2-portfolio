import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  template: `
    <article class="card">
      <img class="card__image" [src]="project.imageUrl" [alt]="'Превью проекта: ' + project.title">
      <div class="card__body">
        <div class="card__meta">
          <span class="category">{{ project.category }}</span>
          <span>{{ project.year }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a href="mailto:hello@example.com?subject=Вопрос%20о%20проекте" class="card__link">
          Обсудить проект <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}