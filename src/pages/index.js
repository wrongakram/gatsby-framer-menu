import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//components
import Banner from "../components/banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ScrollForWork />
  </Layout>
)

const ScrollForWork = () => (
  <div className="container">
    <div className="scroll-for-work">
      <span>WORK</span>
      <span className="line"></span>
    </div>
  </div>
)

export default IndexPage
