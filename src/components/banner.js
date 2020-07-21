import React, { useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

//components
import Alert from "../components/alert"

const Headline = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="container">
      <h1 className="main-headline">
        <motion.span animate={{ opacity: hovered ? 0.2 : 1 }}>
          I am a <span className="semi-bold">Front End Developer</span> and
          <span className="semi-bold"> UI/UX Designer</span> with a bit of
          backend experience, primarily working with node. I also make{" "}
        </motion.span>
        <motion.span
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          className="semi-bold underline"
        >
          YouTube Videos
        </motion.span>{" "}
        <motion.span animate={{ opacity: hovered ? 0.2 : 1 }}>
          teaching people to create things they can be proud of.{" "}
        </motion.span>
      </h1>
    </div>
  )
}

const Accomplishments = () => (
  <div className="container">
    <div className="accomplishments-inner">
      <ul>
        <span>Recent Accomplishments:</span>
        <li>5k+ Subscribers</li>
        <li>Awwwards Jury Member</li>
        <li>Taught Oliver to play Fetch</li>
      </ul>
      <ul>
        <span>Currently at:</span>
        <li>ISN</li>
        <li className="disabled">VitalStorm</li>
      </ul>
      <ul>
        <span>Links:</span>
        <div className="columns">
          <div className="column">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/c/wrongakram"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/wrongakram"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/wrongakram"
              >
                Instagram
              </a>
            </li>
          </div>
          <div className="column">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/akram-khalid-12b977142/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://dribbble.com/wrongakram"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/wrongakram"
              >
                Github
              </a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
)

const ScrollForWork = () => {
  // Fade view work out
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  return (
    <motion.div style={{ opacity }} className="scroll-for-work">
      <span>WORK</span>
      <span className="line"></span>
    </motion.div>
  )
}

const Banner = () => (
  <>
    <Alert />
    <div className="banner">
      <div className="inner-banner">
        <Headline />
        <Accomplishments />
      </div>
      <ScrollForWork />
    </div>
  </>
)

export default Banner
