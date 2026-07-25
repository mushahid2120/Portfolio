const Hero = () => {
  return (
    <header className="hero" id="top">
      <div className="grid-bg"></div>
      <span className="crop tl"></span>
      <span className="crop tr"></span>
      <span className="crop bl"></span>
      <span className="crop br"></span>
      
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              Open to full-stack &amp; AI engineering roles
            </div>
            <h1 className="title">
              Full stack developer building web products <em>and the AI systems</em> behind them.
            </h1>
            <p className="lede">
              I ship production web applications end to end — React/Next.js frontends, Node &amp; Python backends — and independently build applied AI systems: RAG pipelines, MCP servers &amp; clients, and agentic tool-calling.
            </p>
            <div className="hero-actions">
              <a className="btn solid" href="#work">View work</a>
              <a className="btn" href="https://mushahid.hashnode.dev/" target="_blank" rel="noopener noreferrer">Read the blog</a>
              <a className="btn" href="https://github.com/mushahid2120" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>

          <div className="photo-frame">
            <div className="photo-box">
              <img src="/profile_pic.png" alt="Mushahid" onError={(e) => e.target.style.display = 'none'} />
              <span className="monogram" style={{ display: 'none' }}>M</span>
            </div>
          </div>
        </div>

        <div className="titleblock">
          <div className="tb-row">
            <div className="tb-cell"><div className="tb-label">Name</div><div className="tb-value">Md Mushahid Ansari</div></div>
            <div className="tb-cell"><div className="tb-label">Focus</div><div className="tb-value">Full Stack + AI</div></div>
            <div className="tb-cell"><div className="tb-label">Base discipline</div><div className="tb-value">B.Tech, Mech. Eng.</div></div>
            <div className="tb-cell"><div className="tb-label">Status</div><div className="tb-value" style={{ color: 'var(--cyan)' }}>Available</div></div>
          </div>
          <div className="tb-row">
            <div className="tb-cell"><div className="tb-label">Stack</div><div className="tb-value">MERN / Next.js</div></div>
            <div className="tb-cell"><div className="tb-label">AI layer</div><div className="tb-value">RAG · MCP · Agents</div></div>
            <div className="tb-cell"><div className="tb-label">Grad. year</div><div className="tb-value">2023</div></div>
            <div className="tb-cell"><div className="tb-label">Rev</div><div className="tb-value">v1.0</div></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
