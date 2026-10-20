import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'FinFlow — финансы',
      description: 'Веб-интерфейс для контроля расходов, бюджета и финансовых целей.',
      imageUrl: 'assets/project-finflow.svg',
      category: 'Web app',
      year: '2026'
    },
    {
      id: 2,
      title: 'Northline — студия',
      description: 'Минималистичный сайт студии с акцентом на услуги и кейсы.',
      imageUrl: 'assets/project-northline.svg',
      category: 'Website',
      year: '2025'
    },
    {
      id: 3,
      title: 'Mono Store — магазин',
      description: 'Каталог цифровых товаров с удобной навигацией и карточками.',
      imageUrl: 'assets/project-monostore.svg',
      category: 'E-commerce',
      year: '2025'
    },
    {
      id: 4,
      title: 'Pulse — аналитика',
      description: 'Панель показателей и графиков для небольшой команды.',
      imageUrl: 'assets/project-pulse.svg',
      category: 'Dashboard',
      year: '2024'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}