
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="nav-logo">
        APB<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
         <a href="#experience">EXPERIENCE</a>
         <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
       </div>

      <div className="nav-socials">
        <a
          href="https://github.com/realmk-r"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          GH
        </a>

        <a
          href="https://www.linkedin.com/in/adwaid-p-b-8b8165332"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          IN
        </a>
      </div>

      <button className="mobile-menu" aria-label="Menu">
        <Menu size={24} />
      </button>

    </nav>
  );
}

export default Navbar;
