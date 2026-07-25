const Skills = () => {
  const skills = [
    {
      title: 'Frontend',
      tag: 'CORE',
      desc: 'Product-grade UI with real state management, not just component wiring.',
      items: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit / RTK Query', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Backend',
      tag: 'CORE',
      desc: 'Layered architecture, real auth trade-offs, and payment flows that never trust the client.',
      items: ['Node.js / Express', 'FastAPI', 'MongoDB', 'MySQL', 'REST API design', 'Session & JWT auth']
    },
    {
      title: 'AI Engineering',
      tag: 'APPLIED',
      desc: 'Self-taught, working implementations — not just API calls to a chat model.',
      items: ['RAG (LangChain + Pinecone)', 'MCP — server & client', 'LangGraph', 'Agentic tool-calling', 'Gemini / Groq']
    },
    {
      title: 'Shipping & Tooling',
      tag: 'SUPPORT',
      desc: 'Just enough DevOps to deploy and automate my own work — not a core focus.',
      items: ['Git / GitHub Actions CI', 'Docker', 'AWS (S3, Lambda, CloudFront)', 'Vercel / Render / Netlify']
    }
  ]

  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num mono">02</span>
          <div>
            <h2 className="sec-title">Skills</h2>
            <p className="sec-sub">Web development first, AI as an applied layer on top of it — plus just enough tooling to ship what I build.</p>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-panel">
              <h3>
                {skill.title} 
                <span className="tag" style={{ backgroundColor: skill.tag === 'APPLIED' ? 'var(--amber)' : skill.tag === 'SUPPORT' ? 'var(--ink-faint)' : 'var(--cyan)', color: skill.tag === 'SUPPORT' ? 'var(--bg)' : 'inherit' }}>
                  {skill.tag}
                </span>
              </h3>
              <p className="desc">{skill.desc}</p>
              <div className="chips">
                {skill.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
