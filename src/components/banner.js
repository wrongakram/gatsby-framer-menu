import React from "react"

const Headline = () => (
  <div className="container">
    <h1 className="main-headline">
      I am a <span className="semi-bold">Front End Developer</span> and
      <span className="semi-bold"> UI/UX Designer</span> with a bit of backend
      experience, primarily working with node. I also make{" "}
      <span className="semi-bold underline">YouTube Videos</span> teaching
      people to create things they can be proud of.
    </h1>
  </div>
)

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

const Banner = () => (
  <div className="banner">
    <div className="inner-banner">
      <Headline />
      <Accomplishments />
    </div>
  </div>
)

export default Banner
