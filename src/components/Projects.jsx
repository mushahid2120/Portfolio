import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'

const Projects = () => {
  const projectRefs = useRef([])
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const handlePrevImage = (projectId) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: prev[projectId] > 0 ? prev[projectId] - 1 : (projects.find(p => p.id === projectId)?.images?.length || 1) - 1
    }))
  }

  const handleNextImage = (projectId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: prev[projectId] !== undefined && prev[projectId] < totalImages - 1 ? prev[projectId] + 1 : 0
    }))
  }

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

  const renderCarousel = (project) => {
    const images = project.images && project.images.length > 0 ? project.images : [project.image]
    const currentIdx = currentImageIndex[project.id] || 0

    return (
      <div className="project-carousel">
        <img src={images[currentIdx]} alt={`${project.name} - ${currentIdx + 1}`} className="project-thumb" />
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={() => handlePrevImage(project.id)} aria-label="Previous image">‹</button>
            <button className="carousel-btn next" onClick={() => handleNextImage(project.id, images.length)} aria-label="Next image">›</button>
            <div className="carousel-dots">
              {images.map((_, idx) => (
                <span key={idx} className={`dot ${idx === currentIdx ? 'active' : ''}`} onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}></span>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

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
            {renderCarousel(project)}
            <div className="project-body">
              <div className="project-top">
                <div className="project-title-row">
                  {project.logo && (
                    <img src={project.logo} alt={`${project.name} logo`} className="project-logo" />
                  )}
                  <h3 className="project-name">{project.name}</h3>
                </div>
                
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
            {renderCarousel(project)}
            <div className="project-body">
              <div className="project-top">
                <div className="project-title-row">
                  {project.logo && (
                    <img src={project.logo} alt={`${project.name} logo`} className="project-logo" />
                  )}
                  <h3 className="project-name">{project.name}</h3>
                </div>
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
