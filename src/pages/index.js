import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//components
import Banner from "../components/banner"
import ISN from "../components/projects/isn"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <ScrollForWork />
    <ISN />
  </Layout>
)

const ScrollForWork = () => (
  <div className="scroll-for-work">
    <span>WORK</span>
    <span className="line"></span>
  </div>
)

export default IndexPage
