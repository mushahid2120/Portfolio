import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'

const Projects = () => {
  const projectRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.12,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num mono">01</span>
          <div>
            <h2 className="sec-title">Selected work</h2>
            <p className="sec-sub">Flagship products, shipped and deployed — followed by the AI systems built independently alongside them.</p>
          </div>
        </div>

        {projects.slice(0, 3).map((project, idx) => (
          <div key={project.id} className="project reveal" ref={(el) => (projectRefs.current[idx] = el)}>
            <img src={project.image} alt={project.name} className="project-thumb" />
            <div className="project-body">
              <div className="project-top">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-index mono">PRJ / {project.index}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-meta">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="meta-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live / Repo ↗</a>
                <a href={project.links.source} target="_blank" rel="noopener noreferrer">Source ↗</a>
              </div>
            </div>
          </div>
        ))}

        <p className="ai-note reveal">The three projects below are self-directed AI engineering work — built to understand these systems from first principles, independent of any single tutorial.</p>

        {projects.slice(3).map((project, idx) => (
          <div key={project.id} className="project reveal" ref={(el) => (projectRefs.current[idx + 3] = el)}>
            <img src={project.image} alt={project.name} className="project-thumb" />
            <div className="project-body">
              <div className="project-top">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-index mono">{project.index}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-meta">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className={`meta-tag ${tag.includes('AI') ? 'ai' : ''}`}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Endpoint ↗</a>
                <a href={project.links.source} target="_blank" rel="noopener noreferrer">Source ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
