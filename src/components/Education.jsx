import { FiAward, FiBook } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Mechanical Engineering',
      institution: 'Dr. B.C. Roy Engineering College',
      year: '2023',
      cgpa: '8.65',
      description: 'Graduated with honors. Strong foundation in problem-solving and system design principles.'
    }
  ]

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Self-Taught through Projects',
      description: 'Comprehensive experience building production-grade applications with modern frameworks.'
    },
    {
      title: 'AI & LLM Engineering',
      issuer: 'Hands-On Implementation',
      description: 'In-depth knowledge of RAG systems, LangGraph, MCP protocols, and AI agents.'
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      issuer: 'Practical Experience',
      description: 'Proficient in Docker, Kubernetes, Terraform, and CI/CD pipeline automation.'
    }
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">Education & Learning</h2>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FiAward className="text-blue-400" size={28} />
            Formal Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-2">{edu.degree}</h4>
                    <p className="text-gray-300 font-semibold mb-1">{edu.field}</p>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-3xl font-bold gradient-text mb-2">{edu.cgpa}</p>
                    <p className="text-gray-400">CGPA</p>
                  </div>
                </div>
                <p className="text-gray-300 border-t border-blue-500/20 pt-4">{edu.description}</p>
                <div className="mt-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                    Graduated {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FiBook className="text-blue-400" size={28} />
            Continuous Learning & Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-bold text-blue-400 mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 p-8 rounded-xl border border-blue-500/30 bg-blue-500/5">
          <h3 className="text-xl font-bold mb-4 text-blue-400">My Learning Approach</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            While my academic background is in Mechanical Engineering, I've successfully transitioned 
            into software development through intense self-directed learning. My approach combines:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Build real-world projects to master concepts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Study best practices from production-grade codebases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Experiment with cutting-edge technologies independently</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Document learnings and share knowledge through blogging</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education
