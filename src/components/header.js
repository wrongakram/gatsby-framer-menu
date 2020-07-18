import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="header-inner">
        <nav>
          <Link to="/">AKRAM</Link>
          <Link to="/profile">PROFILE</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
