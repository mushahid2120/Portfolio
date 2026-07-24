import { useState } from 'react'

const Contact = () => {

  return (
    <footer id="contact">
      <div className="wrap">
        <h2 className="contact-title">Let's build something.</h2>
        <p className="contact-sub">Open to full-stack and AI engineering roles. The fastest way to reach me is GitHub — or drop a note by email.</p>
        
        <div className="contact-links">
          <a className="btn solid" href="mailto:your.email@example.com">Email me</a>
          <a className="btn" href="https://github.com/mushahid2120" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="btn" href="https://mushahid.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog ↗</a>
        </div>

        <div className="footer-bottom">
          <span>© <span id="year"></span> Mushahid</span>
          <span>Built with React + Design System</span>
        </div>
      </div>
    </footer>
  )
}

export default Contact
