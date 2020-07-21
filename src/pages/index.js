import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//components
import Banner from "../components/banner"
import ISN from "../components/projects/isn"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Banner />
    <ISN />
  </>
)

export default IndexPage
