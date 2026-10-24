
import React, { useState } from 'react';
import {
 Container,
 Navbar,
 Nav,
 Button,
 Row,
 Col,
 Card,
 Badge,
 Form,
 Alert
} from 'react-bootstrap';

const skills = [
 'React',
 'JavaScript',
 'HTML5',
 'CSS3',
 'Bootstrap',
 'Git',
 'Адаптивная вёрстка',
 'UI/UX'
];

const projects = [
 {
  title: 'FinFlow',
  category: 'Финансы',
  description:
      'Веб-приложение для управления личными финансами и контроля расходов.',
  technologies: ['React', 'Bootstrap', 'JavaScript'],
  symbol: '₽',
  color: 'purple',
  github: 'https://github.com/',
  demo: '#contacts'
 },
 {
  title: 'MonoStore',
  category: 'Интернет-магазин',
  description:
      'Интернет-магазин с каталогом товаров и удобной навигацией.',
  technologies: ['React', 'Bootstrap', 'API'],
  symbol: '🛍',
  color: 'green',
  github: 'https://github.com/',
  demo: '#contacts'
 },
 {
  title: 'NorthLine',
  category: 'Путешествия',
  description:
      'Сервис для планирования путешествий, поездок и маршрутов.',
  technologies: ['React', 'API', 'Maps'],
  symbol: '✈',
  color: 'blue',
  github: 'https://github.com/',
  demo: '#contacts'
 },
 {
  title: 'Pulse',
  category: 'Здоровье',
  description:
      'Приложение для отслеживания физической активности и привычек.',
  technologies: ['React', 'Chart.js', 'Bootstrap'],
  symbol: '♡',
  color: 'pink',
  github: 'https://github.com/',
  demo: '#contacts'
 }
];

export default function App() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
 });

 const [submitted, setSubmitted] = useState(false);

 function handleChange(event) {
  const { name, value } = event.target;

  setFormData((previous) => ({
   ...previous,
   [name]: value
  }));

  setSubmitted(false);
 }

 function handleSubmit(event) {
  event.preventDefault();
  setSubmitted(true);
  setFormData({
   name: '',
   email: '',
   message: ''
  });
 }

 return (
     <>
      <Navbar
          expand="lg"
          bg="white"
          className="site-navbar sticky-top shadow-sm"
      >
       <Container>
        <Navbar.Brand href="#home" className="brand">
         Dev<span>Portfolio</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navigation" />

        <Navbar.Collapse id="main-navigation">
         <Nav className="ms-auto align-items-lg-center gap-lg-2">
          <Nav.Link href="#home">Главная</Nav.Link>
          <Nav.Link href="#about">Обо мне</Nav.Link>
          <Nav.Link href="#skills">Навыки</Nav.Link>
          <Nav.Link href="#projects">Проекты</Nav.Link>
          <Nav.Link href="#contacts">Контакты</Nav.Link>

          <Button
              href="#contacts"
              variant="primary"
              className="nav-cta ms-lg-2"
          >
           Связаться
          </Button>
         </Nav>
        </Navbar.Collapse>
       </Container>
      </Navbar>

      <main>
       <section id="home" className="hero-section">
        <Container>
         <Row className="align-items-center g-4">
          <Col lg={7}>
           <p className="hero-eyebrow">
            ПОРТФОЛИО ВЕБ-РАЗРАБОТЧИКА
           </p>

           <h1>
            Привет! Я начинающий
            <span> Frontend-разработчик</span>
           </h1>

           <p className="hero-description">
            Создаю современные веб-интерфейсы, изучаю новые
            технологии и превращаю идеи в удобные и понятные сайты.
           </p>

           <div className="d-flex flex-wrap gap-3 mt-4">
            <Button href="#projects" variant="primary" size="lg">
             Смотреть проекты →
            </Button>

            <Button
                href="#contacts"
                variant="outline-light"
                size="lg"
            >
             Связаться со мной
            </Button>
           </div>

           <div className="hero-note">
            <span className="status-dot" />
            Открыт к обучению и интересным проектам
           </div>
          </Col>

          <Col lg={5}>
           <div className="code-window">
            <div className="window-top">
             <span className="window-dot red" />
             <span className="window-dot yellow" />
             <span className="window-dot green" />
             <span className="window-caption">developer.js</span>
            </div>

            <pre>
                    <code>{`const developer = {
  name: "Frontend Developer",
  skills: ["React", "Bootstrap"],
  passion: "Создавать удобные
            веб-интерфейсы",
  learning: true
};`}</code>
                  </pre>

            <div className="code-comment">
             // Каждый день — новый навык!
            </div>
           </div>
          </Col>
         </Row>
        </Container>
       </section>

       <section id="about" className="section-padding">
        <Container>
         <SectionHeading
             eyebrow="НЕМНОГО ОБО МНЕ"
             title="Обо мне"
         />

         <Row className="g-4 align-items-stretch">
          <Col lg={5}>
           <p className="section-copy">
            Я начинающий frontend-разработчик, которому интересно
            создавать современные сайты и интерактивные интерфейсы.
            Сейчас я развиваю навыки React, JavaScript и Bootstrap,
            изучаю лучшие практики вёрстки и учусь писать понятный код.
           </p>
          </Col>

          <Col lg={7}>
           <Row className="g-3">
            <Col sm={4}>
             <InfoCard
                 icon="🎓"
                 title="Образование"
                 text="БГУИР, 4 курс"
                 detail="Информационные системы"
             />
            </Col>

            <Col sm={4}>
             <InfoCard
                 icon="💻"
                 title="Интересы"
                 text="Веб-разработка"
                 detail="UI/UX и новые технологии"
             />
            </Col>

            <Col sm={4}>
             <InfoCard
                 icon="🚀"
                 title="Цель"
                 text="Развитие навыков"
                 detail="Стать frontend-разработчиком"
             />
            </Col>
           </Row>
          </Col>
         </Row>
        </Container>
       </section>

       <section id="skills" className="section-padding section-tinted">
        <Container>
         <SectionHeading
             eyebrow="МОЙ СТЕК"
             title="Навыки и технологии"
         />

         <Row className="g-3">
          {skills.map((skill, index) => (
              <Col key={skill} xs={6} sm={4} md={3}>
               <div className="skill-card">
                    <span className="skill-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                <span>{skill}</span>

                <span className="skill-arrow" aria-hidden="true">
                      ↗
                    </span>
               </div>
              </Col>
          ))}
         </Row>
        </Container>
       </section>

       <section id="projects" className="section-padding">
        <Container>
         <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <SectionHeading
              eyebrow="МОИ РАБОТЫ"
              title="Избранные проекты"
          />

          <span className="project-count">
                {projects.length} проекта
              </span>
         </div>

         <Row className="g-4">
          {projects.map((project) => (
              <Col key={project.title} md={6} xl={3}>
               <Card className="project-card h-100">
                <div className={`project-cover ${project.color}`}>
                      <span className="project-symbol" aria-hidden="true">
                        {project.symbol}
                      </span>

                 <span className="project-category">
                        {project.category}
                      </span>
                </div>

                <Card.Body className="d-flex flex-column">
                 <Card.Title>{project.title}</Card.Title>

                 <Card.Text className="project-description">
                  {project.description}
                 </Card.Text>

                 <div className="project-tags">
                  {project.technologies.map((technology) => (
                      <Badge
                          key={technology}
                          bg="light"
                          text="dark"
                          pill
                      >
                       {technology}
                      </Badge>
                  ))}
                 </div>

                 <div className="project-links mt-auto pt-4">
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                  >
                   GitHub ↗
                  </a>

                  <a href={project.demo}>Подробнее →</a>
                 </div>
                </Card.Body>
               </Card>
              </Col>
          ))}
         </Row>

         <p className="projects-note mt-4 mb-0">
          Названия проектов демонстрационные. Замени их своими
          работами и укажи реальные ссылки на репозитории.
         </p>
        </Container>
       </section>

       <section id="contacts" className="section-padding section-tinted">
        <Container>
         <Row className="g-5">
          <Col lg={5}>
           <SectionHeading
               eyebrow="БУДЕМ НА СВЯЗИ"
               title="Давайте обсудим проект"
           />

           <p className="section-copy">
            Есть идея, вопрос или предложение о сотрудничестве?
            Напиши мне — буду рад новым знакомствам и интересным задачам.
           </p>

           <div className="contact-list">
            <a href="mailto:dev@example.com">
             <span className="contact-icon">✉</span>
             dev@example.com
            </a>

            <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
            >
             <span className="contact-icon">⌘</span>
             GitHub
            </a>

            <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
            >
             <span className="contact-icon">in</span>
             LinkedIn
            </a>
           </div>
          </Col>

          <Col lg={7}>
           <Card className="contact-card border-0">
            <Card.Body className="p-4 p-md-5">
             {submitted && (
                 <Alert
                     variant="success"
                     role="status"
                     dismissible
                     onClose={() => setSubmitted(false)}
                 >
                  Форма заполнена. Для реальной отправки сообщений
                  нужно подключить сервер или почтовый сервис.
                 </Alert>
             )}

             <Form onSubmit={handleSubmit}>
              <Row className="g-3">
               <Col md={6}>
                <Form.Group controlId="contactName">
                 <Form.Label>Ваше имя</Form.Label>

                 <Form.Control
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Как к вам обращаться?"
                     autoComplete="name"
                     required
                 />
                </Form.Group>
               </Col>

               <Col md={6}>
                <Form.Group controlId="contactEmail">
                 <Form.Label>Email</Form.Label>

                 <Form.Control
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="you@example.com"
                     autoComplete="email"
                     required
                 />
                </Form.Group>
               </Col>

               <Col xs={12}>
                <Form.Group controlId="contactMessage">
                 <Form.Label>Сообщение</Form.Label>

                 <Form.Control
                     as="textarea"
                     rows={4}
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Расскажите о вашей идее..."
                     required
                 />
                </Form.Group>
               </Col>

               <Col xs={12}>
                <Button type="submit" variant="primary" size="lg">
                 Отправить сообщение →
                </Button>
               </Col>
              </Row>
             </Form>
            </Card.Body>
           </Card>
          </Col>
         </Row>
        </Container>
       </section>
      </main>

      <footer className="site-footer">
       <Container className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <span>© {new Date().getFullYear()} DevPortfolio</span>
        <span>Лабораторная работа №6 · React Bootstrap</span>
        <a href="#home">Наверх ↑</a>
       </Container>
      </footer>
     </>
 );
}

function SectionHeading({ eyebrow, title }) {
 return (
     <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <span className="heading-line" />
     </div>
 );
}

function InfoCard({ icon, title, text, detail }) {
 return (
     <div className="info-card h-100">
      <div className="info-icon" aria-hidden="true">
       {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
      <small>{detail}</small>
     </div>
 );
}
