import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container fluid">
      <div className="header-inner">
        <Link to="/">AKRAM</Link>
        <nav>
          <Link to="/profile">ME</Link>
          <Link>
            <span className="disabled">WORK</span>
            <span className="label">Soon</span>
          </Link>
          <a href="mailto: wrongakram@gmail.com">CONTACT</a>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
