import ContactForm from './components/ContactForm'
import Notification from './components/Notification'
export default function App(){return <div className="shell">
 <header className="topbar"><a className="brand" href="#top"><span className="mark">a.</span> Daniil Frolov</a><nav><a href="#services">Что делаю</a><a href="#contact">Контакт</a><a className="navbutton" href="mailto:hello@example.com">Email ↗</a></nav></header>
 <main id="top">
  <section className="hero"><div className="eyebrow"><i/> FREELANCE DEVELOPER · AVAILABLE FOR WORK</div><h1>Есть идея?<br/><span>Давайте обсудим.</span></h1><p>Расскажите о задаче — помогу превратить её в понятный цифровой продукт. От первого наброска до аккуратного интерфейса.</p><div className="hero-note"><span>LET’S BUILD SOMETHING USEFUL</span><span>01 / CONTACT</span></div></section>
  <section id="contact" className="contact"><div className="intro"><div className="eyebrow muted">СВЯЗАТЬСЯ СО МНОЙ</div><h2>Расскажите<br/>о вашем проекте.</h2><p>Заполните форму, чтобы обсудить детали задачи и следующий шаг.</p><div className="detail"><span>↗</span><div><small>НАПИШИТЕ НАПРЯМУЮ</small><a href="mailto:hello@example.com">hello@example.com</a></div></div><div className="detail"><span>◷</span><div><small>ОБЫЧНО ОТВЕЧАЮ</small><strong>В течение 1–2 рабочих дней</strong></div></div></div>
   <div className="form-panel"><Notification/><ContactForm/></div></section>
  <section id="services" className="services"><div><span>01</span><strong>Веб-разработка</strong><p>Современные интерфейсы и адаптивная вёрстка.</p></div><div><span>02</span><strong>UI / UX</strong><p>Понятные сценарии и внимание к деталям.</p></div><div><span>03</span><strong>Прототипирование</strong><p>Проверяем идею и уточняем решение.</p></div></section>
 </main><footer><a className="brand" href="#top"><span className="mark">a.</span> Daniil Frolov</a><span>© 2025 · Portfolio concept</span><a href="mailto:hello@example.com">hello@example.com ↗</a></footer>
</div>}