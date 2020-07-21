import React from "react"

import { MyISNImage } from "../gatsby-images/myISNImage"
import { IMTImage } from "../gatsby-images/imtImage"

const ISN = () => {
  return (
    <div className="projects">
      <ProjectHeader />
      <ThreeDeviceShowcase />
      <ProjectDetails />
      <SingleShowcase />
      <TwoDeviceShowcase left={3} right={4} />
      <TwoDeviceShowcase left={5} right={6} flip={true} />
      <VideoShowcase />
      <ProjectDetailsDesignSystem />
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

const ProjectDetails = () => {
  return (
    <div className="project-header details">
      <div className="container">
        <div className="project-inner">
          <div className="project-title">
            <h5>Incident Management Tool (IMT)</h5>
          </div>
          <div className="project-description">
            <p>
              The purpose of this tool is to allow field workers and admins a
              quick and easy way to report and track incidents that occur within
              their jobsites. Countless usability testing proved the design of
              this tool was "Intuitive" and left users excited to get their
              hands on it.
            </p>
          </div>
          <div className="projects-worked-on">
            <ul>
              <span>Design & Tech Used: </span>
              <li>Adobe XD & Protopie</li>
              <li>Next.js</li>
              <li>Context for State Management</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectDetailsDesignSystem = () => {
  return (
    <div className="project-header details">
      <div className="container">
        <div className="project-inner">
          <div className="project-title">
            <h5>Design System</h5>
          </div>
          <div className="project-description">
            <p>
              With a product that is used everyday, not having a design system
              is an absolute nightmare. I've been working to establish a design
              system through out the time I've been at ISN and soon I am looking
              to use Stencil.js to get the Design System developed.
            </p>
          </div>
          <div className="projects-worked-on">
            <ul>
              <span>Design & Tech Used: </span>
              <li>Adobe XD</li>
              <li>Stencil.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ThreeDeviceShowcase = ({ flip }) => {
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
        <span className="subtitle">
          Early preview of myISN App. Not much to show...
        </span>
      </div>
      <span className={`background-box ${flip && "left"}`}></span>
    </div>
  )
}

const TwoDeviceShowcase = ({ left, right, flip }) => {
  return (
    <div className="two-device-showcase">
      <div className="container">
        <div className="two-device-showcase-inner">
          <div className="device">
            <IMTImage id={left} />
          </div>
          <div className="device">
            <IMTImage id={right} />
          </div>
        </div>
      </div>
      <span className={`background-box ${flip && "left"}`}></span>
    </div>
  )
}

const SingleShowcase = () => {
  return (
    <div className="single-showcase">
      <div className="container">
        <div className="single-showcase-inner">
          <div className="device">
            <IMTImage id={1} />
            <span className="subtitle">
              This is the dashboard the user will see once they log into the
              application. A layout thats easy for the eye to scan important
              information quickly was crucial to the project.
            </span>
          </div>
          <div className="device">
            <IMTImage id={2} />
            <span className="subtitle">
              As a user is reporting an incident, they will experience a very
              simple reporting technique. Once a response is made we auto scroll
              the user to the next question. The use does have the capabilty to
              scroll back if need to make a change.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const VideoShowcase = () => {
  return (
    <div className="single-showcase">
      <div className="container">
        <div className="single-showcase-inner">
          <div className="device youtube-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BvJZaOMsa3I?autoplay=1&rel=1&showinfo=0&loop=1&controls=0&playlist=BvJZaOMsa3I"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ISN
