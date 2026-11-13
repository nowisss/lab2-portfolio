import { useEffect, useMemo, useState } from 'react';

const emptyForm = { title: '', description: '', imageUrl: '', category: 'Web development' };
const palettes = ['violet', 'blue', 'orange', 'green'];

function Icon({ name }) {
  const paths = {
    plus: <><path d="M12 5v14M5 12h14" /></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    edit: <><path d="m4 16.5-.8 4.3 4.3-.8L19 8.5 15.5 5 4 16.5Z"/><path d="m13.8 6.7 3.5 3.5"/></>,
    trash: <><path d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6"/></>
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Все');
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');

  async function loadProjects() {
    setLoading(true); setError('');
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) throw new Error('Не удалось загрузить проекты');
      setProjects(await response.json());
    } catch (e) { setError(`${e.message}. Проверь, запущен ли сервер и подключена ли MongoDB.`); }
    finally { setLoading(false); }
  }
  useEffect(() => { loadProjects(); }, []);

  const categories = useMemo(() => ['Все', ...new Set(projects.map(p => p.category).filter(Boolean))], [projects]);
  const visible = projects.filter(p => (category === 'Все' || p.category === category) && `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase()));

  function openCreate() { setEditing(null); setForm(emptyForm); setModal(true); }
  function openEdit(project) { setEditing(project); setForm({ title: project.title || '', description: project.description || '', imageUrl: project.imageUrl || '', category: project.category || 'Web development' }); setModal(true); }
  function updateField(e) { setForm(current => ({ ...current, [e.target.name]: e.target.value })); }

  async function submit(e) {
    e.preventDefault(); setSaving(true); setNotice('');
    try {
      const response = await fetch(editing ? `/api/projects/${editing._id}` : '/api/projects', {
        method: editing ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Не удалось сохранить проект');
      setModal(false); setNotice(editing ? 'Изменения сохранены' : 'Проект добавлен в портфолио'); await loadProjects();
    } catch (e) { setNotice(e.message); }
    finally { setSaving(false); }
  }

  async function removeProject(project) {
    if (!window.confirm(`Удалить проект «${project.title}»?`)) return;
    try {
      const response = await fetch(`/api/projects/${project._id}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Не удалось удалить проект');
      setNotice('Проект удалён'); await loadProjects();
    } catch (e) { setNotice(e.message); }
  }

  return <div className="app-shell">
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark">f.</span><span>forma<span className="brand-dot">.</span></span></a><nav><a className="nav-active" href="#projects">Проекты</a><a href="#about">О платформе</a></nav><div className="topbar-right"><span className="api-status"><i /> API подключён</span><button className="avatar" aria-label="Профиль">И</button></div></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><div className="eyebrow"><span /> DIGITAL WORKSPACE · 2026</div><h1>Идеи превращаются<br/>в <em>проекты.</em></h1><p>Пространство для работ, экспериментов и цифровых решений. Управляй своим портфолио в одном месте.</p><a className="hero-link" href="#projects">Смотреть проекты <Icon name="arrow"/></a></div><div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-card card-back"><span>CREATIVE<br/>PROCESS</span><b>↗</b></div><div className="art-card card-front"><div className="art-mini">F / 08</div><div className="art-shape"><span/></div><strong>MAKE<br/>IT MATTER.</strong><small>DESIGN · DEVELOP · CREATE</small></div><div className="art-spark">✳</div></div></section>
      <section className="project-section" id="projects"><div className="section-heading"><div><div className="eyebrow muted">SELECTED WORK</div><h2>Мои проекты <span>{projects.length.toString().padStart(2, '0')}</span></h2><p>Подборка работ и идей, над которыми я работаю.</p></div><button className="primary-btn" onClick={openCreate}><Icon name="plus"/> Добавить проект</button></div>
        <div className="toolbar"><div className="search-box"><Icon name="search"/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Найти проект..." /></div><div className="filters"><Icon name="grid"/>{categories.map(c => <button key={c} className={category === c ? 'filter active' : 'filter'} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
        {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice('')}><Icon name="close"/></button></div>}
        {error && <div className="error-panel"><strong>Не удалось получить данные</strong><p>{error}</p><button className="secondary-btn" onClick={loadProjects}>Повторить</button></div>}
        {loading ? <div className="loading-grid">{[1,2,3].map(n => <div className="skeleton" key={n}/>)}</div> : !error && visible.length === 0 ? <div className="empty-state"><div className="empty-icon"><Icon name="grid"/></div><h3>{projects.length ? 'Ничего не найдено' : 'Пока здесь тихо'}</h3><p>{projects.length ? 'Попробуй изменить поисковый запрос или категорию.' : 'Добавь первый проект — он сохранится в MongoDB и появится здесь.'}</p>{!projects.length && <button className="primary-btn" onClick={openCreate}><Icon name="plus"/> Создать первый проект</button>}</div> : <div className="project-grid">{visible.map((project, index) => <article className="project-card" key={project._id}><div className={`project-visual ${palettes[index % palettes.length]}`}>{project.imageUrl ? <img src={project.imageUrl} alt={project.title} onError={e => { e.currentTarget.style.display = 'none'; }} /> : <div className="visual-placeholder"><span>{String(index + 1).padStart(2, '0')}</span><b>{project.title?.slice(0, 1).toUpperCase()}</b><i>✳</i></div>}<span className="category-tag">{project.category || 'Project'}</span><div className="card-actions"><button title="Редактировать" onClick={() => openEdit(project)}><Icon name="edit"/></button><button title="Удалить" onClick={() => removeProject(project)}><Icon name="trash"/></button></div></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-arrow"><Icon name="arrow"/></span></div></article>)}</div>}
      </section>
      <section className="about-strip" id="about"><div><div className="eyebrow muted">BUILT WITH PURPOSE</div><h2>От идеи до результата.</h2></div><p>Проекты хранятся в MongoDB, а Express API отвечает за создание, чтение, обновление и удаление данных.</p></section>
    </main>
    <footer><a className="brand" href="#top"><span className="brand-mark">f.</span><span>forma<span className="brand-dot">.</span></span></a><span>Лабораторная работа №8 · Express + MongoDB</span><span>© 2026</span></footer>
    {modal && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setModal(false); }}><form className="modal" onSubmit={submit}><div className="modal-head"><div><div className="eyebrow muted">PROJECT DETAILS</div><h2>{editing ? 'Редактировать проект' : 'Новый проект'}</h2></div><button type="button" className="icon-btn" onClick={() => setModal(false)}><Icon name="close"/></button></div><label>Название проекта<input name="title" value={form.title} onChange={updateField} required minLength="2" maxLength="100" placeholder="Например, FinFlow"/></label><label>Описание<textarea name="description" value={form.description} onChange={updateField} required maxLength="500" rows="4" placeholder="Кратко расскажи о проекте..."/></label><label>Ссылка на изображение <span className="optional">необязательно</span><input name="imageUrl" type="url" value={form.imageUrl} onChange={updateField} placeholder="https://example.com/image.jpg"/></label><label>Категория<input name="category" value={form.category} onChange={updateField} placeholder="Web development"/></label><div className="modal-actions"><button type="button" className="secondary-btn" onClick={() => setModal(false)}>Отмена</button><button className="primary-btn" disabled={saving}>{saving ? 'Сохранение...' : editing ? 'Сохранить изменения' : 'Добавить проект'}</button></div></form></div>}
  </div>;
}

export default App;
