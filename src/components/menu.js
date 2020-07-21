import React from "react"
import { Link } from "gatsby"

//icons
import { Close } from "../icons/icons.js"

const Menu = ({ setMenuState, menuState }) => {
  return (
    <>
      {menuState && (
        <div className="menu">
          <div onClick={() => setMenuState(!menuState)} className="close">
            CLOSE <Close />
          </div>
          <div className="container">
            <div className="menu-inner">
              <ul>
                <li>
                  <Link to="/profile">Me</Link>
                </li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
