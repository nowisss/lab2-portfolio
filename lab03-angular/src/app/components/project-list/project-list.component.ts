import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  template: `
    <section id="projects" class="projects">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ИЗБРАННЫЕ РАБОТЫ</p>
          <h2>Последние проекты</h2>
        </div>
        <span class="project-count">{{ projects.length }} проекта</span>
      </div>
      <div class="project-grid">
        <app-project-card
          *ngFor="let project of projects"
          [project]="project">
        </app-project-card>
      </div>
    </section>
  `,
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private readonly projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}