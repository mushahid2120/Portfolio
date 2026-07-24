const About = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num mono">04</span>
          <div>
            <h2 className="sec-title">About</h2>
          </div>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I started in <strong>Mechanical Engineering</strong>, then moved into software the same way I approach any system — by taking it apart to understand how it works. That habit shows up in how I build: I don't stop at using RAG or MCP as a black box, I build both sides of the client-server round trip to actually understand the protocol.
            </p>
            <p>
              Today I work across the full stack — <strong>React/Next.js on the frontend, Node.js and Python on the backend</strong> — and layer applied AI systems on top: retrieval-augmented generation, Model Context Protocol servers and clients, and agentic tool-calling with bounded memory.
            </p>
            <p>
              I care about the parts that are easy to skip: server-side webhook verification instead of trusting the client, session revocation when it actually matters, upload flows that don't bottleneck on my own server.
            </p>
          </div>
          <div className="edu-block">
            <div className="edu-label">Education</div>
            <div className="edu-title">B.Tech, Mechanical Engineering</div>
            <div className="edu-sub">Dr. B. C. Roy Engineering College</div>
            <div className="edu-stat">
              <span className="k">Graduated</span>
              <span className="v">2023</span>
            </div>
            <div className="edu-stat">
              <span className="k">CGPA</span>
              <span className="v">8.65 / 10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
