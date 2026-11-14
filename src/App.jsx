export default function App() {
  return (
    <main className="page">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Linosogames home">
          <span className="wordmark-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>linoso<span className="wordmark-light">games</span></span>
        </a>
        <a
          className="header-link"
          href="https://github.com/Heimatbrot/linosogames"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Independent game studio</p>
          <h1 id="hero-title">Small worlds.<br /><span>Big play.</span></h1>
          <p className="intro">
            A home for playful ideas, curious experiments, and games in the making.
          </p>
          <a className="primary-link" href="https://github.com/Heimatbrot?tab=repositories">
            Explore the games <span aria-hidden="true">↗</span>
          </a>
          <p className="footnote">Made with curiosity&nbsp; ✳</p>
        </div>

        <div className="artwork" role="img" aria-label="A colorful abstract game world with a floating character">
          <div className="art-grid" />
          <span className="art-label">WORLD 001&nbsp; / &nbsp;PLAY</span>
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="spark spark-one">✳</span>
          <span className="spark spark-two">✦</span>
          <div className="moon" />
          <div className="character">
            <span className="character-eye eye-left" />
            <span className="character-eye eye-right" />
            <span className="character-smile" />
          </div>
          <div className="platform platform-back" />
          <div className="platform platform-front" />
          <span className="art-caption">Press start to explore</span>
        </div>
      </section>

      <footer className="site-footer">
        <span>Independent games &amp; experiments</span>
        <span>© {new Date().getFullYear()} Linosogames</span>
      </footer>
    </main>
  );
}
