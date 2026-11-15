import { useEffect, useState } from 'react';
import brandLogo from './assets/linosogames-logo.png';
import animatedLogo from './assets/linoso-mark.gif';
import heroPhoto from './assets/linoso-hero.jpg';
import trophyPhoto from './assets/linoso-gold.jpg';
import { navigation, participantStats, questions, rules, tips, winners } from './content.js';

const pages = ['home', 'winners', 'tips', 'rules', 'faq', 'app', 'credits', 'impressum'];
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

function Icon({ name, size = 19 }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" /></>,
    spark: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z" /><path d="M4 5.5v14A2.5 2.5 0 0 1 6.5 17H20M8 7h8" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.4 1.6c-1.2 1.2-2 1.5-2 3.4M12 17.5h.01" /></>,
    app: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.spark}</svg>;
}

function Header({ route, standalone, onInstall }) {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#/home" aria-label="Linosogames – Startseite">
          <img className="brand-mark" src={brandLogo} alt="" />
          <span className="brand-name">LINOSO GAMES<span>seit 2022</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {navigation.map((item) => <a key={item.id} className={route === item.id ? 'active' : ''} href={`#/${item.id}`}>{item.label}</a>)}
        </nav>
        {!standalone && <button className="install-link" type="button" onClick={onInstall}><span className="install-plus">＋</span><span>Zum Home-Bildschirm</span></button>}
      </header>
      <nav className="compact-nav" aria-label="Hauptnavigation">
        {navigation.map((item) => <a key={item.id} className={route === item.id ? 'active' : ''} href={`#/${item.id}`}><Icon name={item.icon} size={16} /><span>{item.label}</span></a>)}
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><img src={brandLogo} alt="" /><span>LINOSO GAMES</span></div>
      <p>Jährliche Spiele, grosse Gefühle und eine goldene Giesskanne.</p>
      <nav aria-label="Weitere Seiten"><a href="#/credits">Credits</a><a href="#/impressum">Impressum</a><a href="mailto:linosogames@gmail.com">Kontakt</a></nav>
      <small>© 2022–{new Date().getFullYear()} Linoso Games</small>
    </footer>
  );
}

function PageHeading({ eyebrow, title, description }) {
  return <header className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="page-description">{description}</p>}</header>;
}

function HomePage() {
  const games = ['Löffeleier', 'Dart', 'Sackhüpfen', 'Boccia', 'Mario Kart', 'Looping Louie', 'Kartenspiele', 'Tischtennis'];
  return (
    <>
      <section className="hero-photo" style={{ '--hero-photo': `url(${heroPhoto})` }}>
        <div className="hero-photo-inner">
          <p className="hero-kicker"><span /> Seit 2022 · Zürich</p>
          <div className="home-hero-title-row">
            <h1>Die Linoso<br /><em>Games</em></h1>
            <svg className="sticker-filter-defs" aria-hidden="true"><defs><filter id="sticker-cutout" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB"><feMorphology in="SourceAlpha" operator="dilate" radius="2.5" result="dilated" /><feGaussianBlur in="dilated" stdDeviation=".6" result="softDilation" /><feGaussianBlur in="dilated" stdDeviation="3" result="blurred" /><feOffset in="blurred" dx="0" dy="6" result="offsetShadow" /><feFlood floodColor="#21190f" floodOpacity=".32" result="shadowColor" /><feComposite in="shadowColor" in2="offsetShadow" operator="in" result="shadow" /><feFlood floodColor="#fff" result="outlineColor" /><feComposite in="outlineColor" in2="softDilation" operator="in" result="outline" /><feMerge><feMergeNode in="shadow" /><feMergeNode in="outline" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs></svg>
            <span className="home-hero-sticker"><img className="home-hero-logo" src={animatedLogo} alt="Animiertes Linosogames-Logo" /></span>
          </div>
          <p className="hero-subtitle">Geburtstag. Spiele. Goldene Giesskanne.</p>
          <a className="button button-light" href="#/rules">So wird gespielt <Icon name="arrow" size={18} /></a>
        </div>
        <span className="hero-index">SOURCE 01</span>
        <span className="photo-credit">Bild: <a href="https://www.freepik.com/free-photo/front-view-kids-playing-with-potato-bags_5103816.htm" target="_blank" rel="noreferrer">Freepik</a></span>
      </section>

      <section className="intro-section content-width">
        <div className="section-label"><span>01</span> DIE ERSTEN SPIELE</div>
        <div className="intro-copy">
          <h2>Ein Geburtstag.<br /><span>Ein bisschen anders.</span></h2>
          <p>Die Linoso Games sind eine Reihe von Spielen rund um Geburtstage und andere Feiern. Die erste Ausgabe fand im Oktober 2022 statt. Erwachsene messen sich in Kindheitsspielen, feiern, lachen und kämpfen um den Wanderpokal: eine goldene Giesskanne.</p>
          <a className="text-link" href="#/winners">Alle Gewinner ansehen <Icon name="arrow" size={17} /></a>
        </div>
      </section>

      <section className="games-section">
        <div className="content-width games-layout">
          <div>
            <div className="section-label section-label-light"><span>02</span> DIE SPIELE</div>
            <h2>Acht Spiele.<br />Ein Pokal.</h2>
            <p>Kindheit trifft Wettkampfgeist. Bei der ersten Ausgabe standen diese Spiele auf dem Programm:</p>
            <a className="text-link text-link-light" href="#/rules">Regeln entdecken <Icon name="arrow" size={17} /></a>
          </div>
          <div className="game-list" aria-label="Spiele der ersten Ausgabe">{games.map((game, i) => <div className="game-chip" key={game}><span>{String(i + 1).padStart(2, '0')}</span>{game}</div>)}</div>
        </div>
      </section>

      <section className="values-section content-width">
        <div className="section-label"><span>03</span> DIE GRUNDIDEE</div>
        <div className="values-grid">
          <article><span className="value-symbol">✳</span><h3>Zusammen feiern</h3><p>Ein Fest für Freundinnen und Freunde – mit Teams, Traditionen und einer guten Portion Ehrgeiz.</p></article>
          <article><span className="value-symbol">↗</span><h3>Fair spielen</h3><p>Das Orga-Team hält die Spiele sicher, unterhaltsam und für alle unvergesslich.</p></article>
          <article><span className="value-symbol">◉</span><h3>Gross träumen</h3><p>Unser Ziel: eines Tages im Hallenstadion, vor Publikum und mit Live-Übertragung.</p></article>
        </div>
      </section>

      <section className="invite-band content-width">
        <div><p className="eyebrow">NUR AUF EINLADUNG</p><h2>Bereit für die nächste Ausgabe?</h2><p>Die Teilnahme ist aktuell nur mit Einladung möglich. Für die Zukunft ist nichts ausgeschlossen.</p></div>
        <a className="button button-dark" href="#/faq">Häufige Fragen <Icon name="arrow" size={18} /></a>
      </section>
    </>
  );
}

function WinnersPage() {
  const [query, setQuery] = useState('');
  const leaderboard = [...participantStats]
    .sort((a, b) => b.first - a.first || b.second - a.second || b.third - a.third || a.name.localeCompare(b.name, 'de-CH'))
    .filter((participant) => participant.name.toLocaleLowerCase('de-CH').includes(query.trim().toLocaleLowerCase('de-CH')));

  return <>
    <section className="trophy-hero" style={{ '--trophy-photo': `url(${trophyPhoto})` }}><div><p className="hero-kicker"><span /> DIE HALL OF FAME</p><h1>Die<br /><em>Gewinner</em></h1><p>Eine Giesskanne. Viele Geschichten.</p></div><span className="hero-index">SOURCE 02</span><span className="photo-credit">Pokal-Hintergrund: <a href="https://www.freepik.com/free-photo/close-up-golden-glitter_11291752.htm" target="_blank" rel="noreferrer">Freepik</a></span></section>
    <section className="winners content-width"><PageHeading eyebrow="DIE SIEGERTEAMS" title="Jahr für Jahr." description="Wer die Linoso Games gewinnt, darf die goldene Giesskanne bis zur nächsten Ausgabe hüten." />
      <ol className="winner-list">{winners.map((winner) => <li className={winner.featured ? 'winner-featured' : ''} key={winner.year}><span className="winner-year">{winner.year}</span><p>{winner.names}</p><span className="winner-mark" aria-hidden="true">{winner.featured ? '✳' : '↗'}</span></li>)}</ol>
      <div className="winner-note"><span>✳</span><p>Das Siegerteam verewigt seine Namen auf der goldenen Giesskanne – bis die nächste Ausgabe einen neuen Champion kürt.</p></div>
      <section className="participant-stats" aria-labelledby="participant-stats-title">
        <div className="participant-stats-heading">
          <div><p className="eyebrow">DAS SCOREBOARD</p><h2 id="participant-stats-title">Alle Teilnehmenden.</h2><p>Teilnahmen und Platzierungen bei den Linoso Games.</p></div>
          <label className="participant-search"><span className="visually-hidden">Teilnehmende suchen</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name suchen …" /></label>
        </div>
        <div className="participant-table-wrap"><table className="participant-table">
          <thead><tr><th scope="col">Name</th><th scope="col">Teiln.</th><th scope="col">1.</th><th scope="col">2.</th><th scope="col">3.</th></tr></thead>
          <tbody>{leaderboard.length ? leaderboard.map((participant) => <tr key={participant.name}><th scope="row">{participant.name}</th><td>{participant.editions}</td><td>{participant.first}</td><td>{participant.second}</td><td>{participant.third}</td></tr>) : <tr><td className="participant-empty" colSpan="5">Keine Teilnehmenden gefunden.</td></tr>}</tbody>
        </table></div>
      </section>
    </section>
  </>;
}

function TipsPage() {
  return <section className="content-width interior-page tips-page"><PageHeading eyebrow="FÜR ALLE TEILNEHMENDEN" title="Tipps & Tricks" description="Kleine Weisheiten aus dem Orga-Team. Mit einem Augenzwinkern – und trotzdem gut auf dich aufpassen." />
    <div className="tip-grid">{tips.map(([situation, cause, suggestion], i) => <article className="tip-card" key={situation}><span className="tip-number">{String(i + 1).padStart(2, '0')}</span><h2>{situation}</h2><div className="tip-detail"><span>Die Lage</span><p>{cause}</p></div><div className="tip-answer"><span>Unser Tipp</span><p>{suggestion}</p></div></article>)}</div>
  </section>;
}

function RulesPage() {
  return <section className="content-width interior-page rules-page"><PageHeading eyebrow="DAS KLEINGEDRUCKTE" title="Die Gebote" description="Das Regelwerk der Linoso Games. Lies es einmal durch – danach zählen Teamgeist, Fairness und die Entscheidung des Orga-Teams." />
    <div className="rules-intro"><span>✳</span><p>Das Orga hat immer Recht.</p></div>
    <div className="rule-list">{rules.map((rule, i) => <article className="rule-card" key={rule.title}><span className="rule-index">{String(i + 1).padStart(2, '0')}</span><div><h2>{rule.title}</h2><ul>{rule.paragraphs.map((paragraph, paragraphIndex) => <li key={`${rule.title}-${paragraphIndex}`}>{typeof paragraph === 'string' ? paragraph : <>{paragraph.text}<a href={paragraph.href}>{paragraph.link}</a>{paragraph.suffix}</>}</li>)}</ul></div></article>)}</div>
  </section>;
}

function FAQPage() {
  const [open, setOpen] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  function sendMessage(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Kontaktanfrage von ${values.get('name')}`);
    const body = encodeURIComponent(`Name: ${values.get('name')}\nE-Mail: ${values.get('email')}\n\n${values.get('message')}`);
    window.location.href = `mailto:linosogames@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  return <section className="content-width interior-page faq-page"><PageHeading eyebrow="GUT ZU WISSEN" title="Häufige Fragen" description="Noch etwas unklar? Hier findest du Antworten rund um die Linoso Games." />
    <div className="faq-layout"><div className="faq-list">{questions.map((item, i) => <article className={`faq-item ${open === i ? 'faq-open' : ''}`} key={item.question}><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{item.question}</span><span className="faq-toggle">{open === i ? '−' : '+'}</span></button>{open === i && <div className="faq-answer"><p>{item.answer}</p></div>}</article>)}</div>
      <aside className="contact-card"><p className="eyebrow">SCHREIB UNS</p><h2>Kontakt</h2><p>Für Fragen oder Anträge erreichst du das Orga-Team hier.</p><form onSubmit={sendMessage}><label htmlFor="contact-name">Name <span>*</span></label><input id="contact-name" name="name" autoComplete="name" required placeholder="Dein Name" /><label htmlFor="contact-email">E-Mail-Adresse <span>*</span></label><input id="contact-email" type="email" name="email" autoComplete="email" required placeholder="du@beispiel.ch" /><label htmlFor="contact-message">Nachricht <span>*</span></label><textarea id="contact-message" name="message" rows="5" required placeholder="Was möchtest du uns sagen?" /><button className="button button-dark" type="submit">Nachricht vorbereiten <Icon name="arrow" size={17} /></button>{submitted && <p className="form-note" role="status">Dein E-Mail-Programm sollte sich mit der vorbereiteten Nachricht öffnen. <a href="mailto:linosogames@gmail.com">E-Mail direkt öffnen</a>.</p>}<small>Deine E-Mail-App öffnet sich mit der Nachricht – es wird nichts auf dieser Website gespeichert.</small></form></aside></div>
  </section>;
}

function CreditsPage() {
  return <section className="content-width interior-page simple-page"><PageHeading eyebrow="BILDMATERIAL" title="Credits" description="Alle Quellangaben für die verwendeten Bilder." /><div className="credit-list"><a href="https://www.freepik.com/free-photo/front-view-kids-playing-with-potato-bags_5103816.htm" target="_blank" rel="noreferrer"><span>01</span><strong>Kinder beim Sackhüpfen</strong><small>Freepik · Startseite</small><Icon name="arrow" /></a><a href="https://www.freepik.com/free-photo/close-up-golden-glitter_11291752.htm" target="_blank" rel="noreferrer"><span>02</span><strong>Goldener Pokal-Hintergrund</strong><small>Freepik · Gewinnerseite</small><Icon name="arrow" /></a><div className="credit-local"><span>03</span><strong>Linoso Games Logo</strong><small>Eigene Grafik · seit 2022</small></div></div></section>;
}

function ImprintPage() {
  return <section className="content-width interior-page simple-page"><PageHeading eyebrow="RECHTLICHES" title="Impressum" description="Für weitere Informationen verwende bitte das Kontaktformular." /><article className="imprint-card"><p>Die Linoso Games sind weder ein Verein noch verfolgen sie einen kommerziellen oder journalistischen Zweck. Diese Website dient lediglich der Unterhaltung von Freunden und Familie. Wir bieten weder Waren, Werke noch Leistungen an.</p><dl><div><dt>Kontaktadresse</dt><dd>Linoso Games<br />8000 Zürich</dd></div><div><dt>Kontakt Orga-Team</dt><dd><a href="mailto:linosogames@gmail.com">linosogames@gmail.com</a></dd></div></dl><a className="button button-dark" href="#/faq">Zum Kontaktformular <Icon name="arrow" size={18} /></a></article></section>;
}

function EmbeddedAppPage() {
  return <section className="embedded-app-page" aria-label="Linosogames App">
    <iframe
      className="embedded-app-frame"
      src="https://linosogames.duckdns.org/"
      title="Linosogames App"
      allow="fullscreen; clipboard-read; clipboard-write"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </section>;
}

function InstallDialog({ onClose, standalone, canInstall, onInstall }) {
  if (standalone) return null;
  return <div className="install-modal" role="dialog" aria-modal="true" aria-labelledby="install-title"><button className="modal-close" onClick={onClose} aria-label="Schliessen"><Icon name="close" /></button><span className="modal-icon">＋</span><p className="eyebrow">EINMAL SPEICHERN</p><h2 id="install-title">Linosogames in deiner Hosentasche.</h2><p>Füge Linosogames zum Home-Bildschirm hinzu – dann öffnet sich die Seite ohne Browser-Leiste und fühlt sich wie eine App an.</p>{canInstall ? <button className="button button-dark" onClick={onInstall}>Jetzt installieren <Icon name="arrow" size={17} /></button> : <ol><li>Tippe in Safari auf <strong>Teilen</strong> <span aria-hidden="true">↑</span></li><li>Wähle <strong>Zum Home-Bildschirm</strong></li><li>Tippe oben rechts auf <strong>Hinzufügen</strong></li></ol>}</div>;
}

function MobileTabBar({ route }) {
  return <nav className="app-tabbar" aria-label="App-Navigation">{navigation.map((item) => <a key={item.id} className={route === item.id ? 'active' : ''} href={`#/${item.id}`}><Icon name={item.icon} size={20} /><span>{item.label}</span></a>)}</nav>;
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, '') || 'home');
  const [standalone, setStandalone] = useState(isStandalone);
  const [showInstall, setShowInstall] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const updateRoute = () => {
      const next = window.location.hash.replace(/^#\/?/, '') || 'home';
      setRoute(pages.includes(next) ? next : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const updateStandalone = () => setStandalone(isStandalone());
    const installReady = (event) => { event.preventDefault(); setInstallPrompt(event); };
    window.addEventListener('hashchange', updateRoute);
    window.addEventListener('beforeinstallprompt', installReady);
    window.addEventListener('appinstalled', updateStandalone);
    window.matchMedia('(display-mode: standalone)').addEventListener?.('change', updateStandalone);
    return () => {
      window.removeEventListener('hashchange', updateRoute);
      window.removeEventListener('beforeinstallprompt', installReady);
      window.removeEventListener('appinstalled', updateStandalone);
      window.matchMedia('(display-mode: standalone)').removeEventListener?.('change', updateStandalone);
    };
  }, []);

  useEffect(() => {
    const names = { home: 'Start', winners: 'Gewinner', tips: 'Tipps & Tricks', rules: 'Die Gebote', faq: 'FAQ', app: 'App', credits: 'Credits', impressum: 'Impressum' };
    document.title = `${names[route] || 'Start'} · Linosogames`;
  }, [route]);

  async function startInstall() {
    if (installPrompt) {
      await installPrompt.prompt();
      setInstallPrompt(null);
      setShowInstall(false);
      return;
    }
    setShowInstall(true);
  }

  const currentPage = {
    home: <HomePage />,
    winners: <WinnersPage />,
    tips: <TipsPage />,
    rules: <RulesPage />,
    faq: <FAQPage />,
    app: <EmbeddedAppPage />,
    credits: <CreditsPage />,
    impressum: <ImprintPage />,
  }[route] || <HomePage />;

  return (
    <div className={`app-shell ${standalone ? 'is-standalone' : ''}`}>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <Header route={route} standalone={standalone} onInstall={startInstall} />
      <main id="main-content" key={route} className="main-content">{currentPage}</main>
      <Footer />
      <MobileTabBar route={route} />
      {showInstall && <div className="modal-backdrop" onClick={(event) => { if (event.target === event.currentTarget) setShowInstall(false); }}><InstallDialog standalone={standalone} canInstall={Boolean(installPrompt)} onInstall={startInstall} onClose={() => setShowInstall(false)} /></div>}
    </div>
  );
}
