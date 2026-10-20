import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <section class="hero">
        <div class="hero__content">
          <p class="eyebrow">ПОРТФОЛИО · WEB DEVELOPMENT</p>
          <h1>Создаю цифровые<br><span>продукты и интерфейсы</span></h1>
          <p class="hero__text">
            Разрабатываю быстрые, понятные и аккуратные веб-приложения
            для бизнеса и людей.
          </p>
          <a class="hero__button" href="#projects">Смотреть проекты <span aria-hidden="true">↘</span></a>
        </div>
        <div class="hero__shape" aria-hidden="true">
          <div class="shape-card shape-card--one">&lt;code /&gt;</div>
          <div class="shape-card shape-card--two">UI<span>✳</span></div>
          <div class="shape-orbit"></div>
        </div>
      </section>
      <app-project-list></app-project-list>
      <footer class="footer">
        <p>© 2026 · Портфолио веб-разработчика</p>
        <a href="mailto:hello&#64;example.com">hello&#64;example.com</a>
      </footer>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}