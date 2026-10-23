<script>
import ProjectList from './components/ProjectList.vue'
export default { name:'App', components:{ProjectList} }
</script>
<template>
<div class="shell">
 <header class="topbar"><a class="brand" href="#top"><span class="mark">a.</span> daniil frolov</a><nav><a href="#projects">Проекты</a><a href="#about">Обо мне</a><a class="navbutton" href="mailto:hello@example.com">Связаться ↗</a></nav></header>
 <main id="top">
  <section class="hero"><div class="eyebrow"><i></i> FREELANCE DEVELOPER · AVAILABLE FOR WORK</div><h1>Создаю цифровые<br><span>продукты с характером.</span></h1><p>Разрабатываю понятные, быстрые и визуально выразительные интерфейсы — от идеи и прототипа до готового веб-продукта.</p><a class="primary" href="#projects">Смотреть проекты ↓</a><div class="hero-note"><span>01 / 04</span><span>Selected work — 2024/25</span></div></section>
  <section id="projects" class="projects"><div class="sectionhead"><div><div class="eyebrow muted">ИЗБРАННЫЕ РАБОТЫ</div><h2>Проекты <small>(04)</small></h2></div><p>Подборка цифровых решений,<br>которые я помог воплотить.</p></div><ProjectList /></section>
  <section id="about" class="about"><div><div class="eyebrow muted">ОБО МНЕ</div><h2>Дизайн встречается<br>с инженерным подходом.</h2></div><p>Соединяю аккуратный визуальный язык с чистой архитектурой интерфейса. В работе ценю ясность, доступность и внимание к деталям.</p></section>
 </main><footer><a class="brand" href="#top"><span class="mark">a.</span> daniil frolov</a><span>© 2025 · Portfolio concept</span><a href="mailto:hello@example.com">hello@example.com ↗</a></footer>
</div></template>