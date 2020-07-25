import React from "react"

import SEO from "../components/seo"

//components
import Banner from "../components/banner"
import ISN from "../components/projects/isn"
import { motion, AnimatePresence } from "framer-motion"

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

const IndexPage = () => (
  <AnimatePresence
    exitBeforeEnter
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
    >
      <SEO title="Home" />
      <Banner />
      <ISN />
    </motion.div>
  </AnimatePresence>
)

export default IndexPage
