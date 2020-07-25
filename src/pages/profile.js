import React from "react"

import ProfileBanner from "../components/profile/profileBanner"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }
const SecondPage = () => (
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
      <SEO title="Me" />
      <ProfileBanner />
    </motion.div>
  </AnimatePresence>
)

export default SecondPage
