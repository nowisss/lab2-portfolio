import { useState } from 'react'
import Button from './components/Button/Button.jsx'
import InputField from './components/InputField/InputField.jsx'
import ProjectCard from './components/ProjectCard/ProjectCard.jsx'
import styles from './App.module.css'

import dashboardImage from './assets/project-dashboard.svg'
import landingImage from './assets/project-landing.svg'
import shopImage from './assets/project-shop.svg'

const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'Веб-интерфейс аналитики с понятной визуализацией показателей и адаптивной сеткой.',
    image: dashboardImage,
  },
  {
    id: 2,
    title: 'Product Landing',
    description: 'Минималистичный лендинг цифрового продукта с акцентом на конверсию и скорость.',
    image: landingImage,
  },
  {
    id: 3,
    title: 'Digital Store',
    description: 'Каталог цифровых товаров с карточками, фильтрами и удобным пользовательским сценарием.',
    image: shopImage,
  },
]

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (value) => {
    setInputValue(value)
  }

  const handleSubmit = () => {
    console.log('Значение поля ввода:', inputValue)
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="На главную">Daniil<span>.</span></a>
        <nav className={styles.nav} aria-label="Основная навигация">
          <a href="#projects">Проекты</a>
          <a href="#about">Обо мне</a>
          <a href="#contact">Контакты</a>
        </nav>
        <a className={styles.headerButton} href="#contact">Связаться</a>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>FRONTEND DEVELOPER</p>
            <h1>Создаю интерфейсы, которые решают задачи бизнеса.</h1>
            <p className={styles.heroText}>
              Фриланс-разработчик, специализирующийся на React и современных веб-интерфейсах.
            </p>
            <div className={styles.heroActions}>
              <a href="#projects"><Button>Смотреть проекты</Button></a>
              <a href="#contact" className={styles.secondaryAction}>Обсудить проект →</a>
            </div>
          </div>
          <div className={styles.heroCard} aria-label="Краткая информация">
            <div className={styles.status}><span /> Available for work</div>
            <strong>3+</strong>
            <span>года в разработке</span>
            <div className={styles.heroLine} />
            <strong>20+</strong>
            <span>реализованных проектов</span>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>SELECTED WORK</p>
              <h2>Избранные проекты</h2>
            </div>
            <p>Несколько задач, где дизайн и разработка работают вместе.</p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.about}`}>
          <p className={styles.eyebrow}>ABOUT</p>
          <h2>Фокус на простых решениях и аккуратной реализации.</h2>
          <p>
            Проектирую и собираю интерфейсы с компонентным подходом: понятная структура,
            переиспользуемые элементы и адаптивное поведение на разных экранах.
          </p>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div>
            <p className={styles.eyebrow}>CONTACT</p>
            <h2>Есть идея? Давайте обсудим.</h2>
            <p>Введите сообщение и нажмите кнопку — значение появится в консоли браузера.</p>
          </div>
          <div className={styles.contactForm}>
            <InputField
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Напишите сообщение"
              aria-label="Сообщение"
            />
            <Button onClick={handleSubmit}>Отправить</Button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Daniil. Portfolio.</span>
        <span>React · JSX · useState · Props</span>
      </footer>
    </div>
  )
}

export default App
