import React from "react"

import { MyISNImage } from "../../components/image"

const ISN = () => {
  return (
    <div className="projects">
      <ProjectHeader />
      <ThreeDeviceShowcase />
    </div>
  )
}

const ProjectHeader = () => {
  return (
    <div className="project-header">
      <div className="container">
        <div className="project-inner">
          <div className="project-title">
            <h5>ISN</h5>
          </div>
          <div className="project-description">
            <p>
              Looking to improve the overall quality of the product through a
              design thinking approach, as well as conducting Usability sessions
              to ensure the product appeals to our users.
            </p>
          </div>
          <div className="projects-worked-on">
            <ul>
              <span>Projects worked on: </span>
              <li>myISN</li>
              <li>Incident Management Tool</li>
              <li>Design System</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ThreeDeviceShowcase = () => {
  return (
    <div className="three-device-showcase">
      <div className="container">
        <div className="three-device-showcase-inner">
          <div className="device">
            <MyISNImage id={1} />
          </div>
          <div className="device">
            <MyISNImage id={2} />
          </div>
          <div className="device">
            <MyISNImage id={3} />
          </div>
        </div>
      </div>
      <span className="background-box"></span>
    </div>
  )
}

export default ISN
