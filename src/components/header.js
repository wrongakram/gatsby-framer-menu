import { Link } from "gatsby"
import React from "react"

const Header = ({ menuState, setMenuState }) => (
  <header>
    <div className="container fluid">
      <div className="header-inner">
        <Link to="/">AKRAM</Link>
        <nav>
          <Link to="/profile">ME</Link>
          <Link to="/">
            <span className="disabled">WORK</span>
            <span className="label">Soon</span>
          </Link>
          <a href="mailto: wrongakram@gmail.com">CONTACT</a>
        </nav>
        <div
          onClick={() => setMenuState(!menuState)}
          className="hamburger-menu"
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
)

export default Header
