import React from "react";
import "./Header.css";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a href="/" className="logo" onClick={closeMenu}>
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        checked={menuOpen}
        onChange={(event) => setMenuOpen(event.target.checked)}
      />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        aria-label="Toggle navigation menu"
      >
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        {exp === true && (
          <li>
            <a href="#experience" onClick={closeMenu}>
              Work Experiences
            </a>
          </li>
        )}
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        {/*<li>
          <a href="#projects">Projects</a>
        </li>*/}
        {/*<li>
          <a href="#achievements">Achievements</a>
        </li>*/}
        <li>
          <a href="#certs" onClick={closeMenu}>
            Certfications
          </a>
        </li>
        <li>
          <a href="#blogs" onClick={closeMenu}>
            Blogs
          </a>
        </li>
        {/*<li>
          <a href="#talks">Talks</a>
        </li>*/}
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact Me
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
