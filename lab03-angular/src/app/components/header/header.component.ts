import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <a class="brand" href="#" aria-label="На главную">
        <span class="brand__mark">D</span>
        <span>devfolio<span class="brand__dot">.</span></span>
      </a>
      <nav aria-label="Основная навигация">
        <a href="#projects">Проекты</a>
        <a href="#about">Обо мне</a>
        <a class="contact-link" href="mailto:hello@example.com">Связаться <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}