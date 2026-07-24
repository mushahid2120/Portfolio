import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-blue-500/20 bg-secondary/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Mushahid</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer | AI Engineer | Problem Solver
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="https://mushahid.hashnode.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="https://github.com/mushahid2120" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mushahid-developer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://mushahid.hashnode.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Hashnode Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Mushahid. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/mushahid2120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                title="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mushahid-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                title="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                title="Twitter"
              >
                <FiTwitter size={20} />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all ml-4 border border-gray-600 hover:border-blue-400"
                title="Scroll to top"
              >
                <FiArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-xs text-gray-500 mt-6">
          <p>Designed & Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
