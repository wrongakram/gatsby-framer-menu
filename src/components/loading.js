import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"

const Loading = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      counter <= 99 && setCounter(counter + 1)
    }, 20)
  }, [counter])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
    >
      <>
        <span className="text">Loading</span>
      </>
      <span className="progress">%{counter}</span>
    </motion.div>
  )
}

export default Loading
