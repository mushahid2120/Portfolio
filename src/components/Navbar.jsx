const Navbar = () => {
  return (
    <nav>
      <div className="inner">
        <a href="#top" className="brand">
          <span className="mark">M</span>
          <span>Mushahid</span>
        </a>
        <ul>
          <li><a className="navlink" href="#work">Work</a></li>
          <li><a className="navlink" href="#skills">Skills</a></li>
          <li><a className="navlink" href="#writing">Writing</a></li>
          <li><a className="navlink" href="#about">About</a></li>
          <li><a className="navlink" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
