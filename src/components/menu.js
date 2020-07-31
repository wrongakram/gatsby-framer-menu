import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
// Framer motion
import { motion, AnimatePresence } from "framer-motion"
//Gatby Image
import { Image } from "../components/gatsby-images/image"
//Data
import menuList from "../data/products.json"
//icons
import { Close } from "../icons/icons.js"

// Transition Animation
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
}
// Menu Title Slide Up
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}
// Menu lines grow
const lineGrow = {
  initial: { width: "100%" },
  animate: { width: 0 },
}

const Menu = ({ setMenuState, menuState, setCursorHovered, x, y }) => {
  const closeMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <>
      <AnimatePresence>
        {menuState && (
          <>
            <motion.div
              initial={{ visibility: "hidden" }}
              exit={{
                visibility: "hidden",
                transition: { delay: 1 },
              }}
              animate={{
                visibility: "visible",
                transition: { delay: 1 },
              }}
              className="projects"
            >
              <div className="menu-title">Products</div>
              <div
                onClick={() => closeMenu()}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="close"
              >
                <Close />
              </div>
              <div className="menu">
                <div className="container">
                  <div className="menu-inner">
                    <motion.ul
                      variants={parent}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {menuList.map(list => (
                        <List
                          key={list.id}
                          setCursorHovered={setCursorHovered}
                          leftLineFlex={list.leftLineFlex}
                          rightLineFlex={list.rightLineFlex}
                          title={list.title}
                          thumbnailPosition={list.thumbnailPosition}
                          offset={list.offset}
                          src={list.src}
                          id={list.id}
                          x={x}
                          y={y}
                        />
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>
            <Panels />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const List = ({
  leftLineFlex,
  rightLineFlex,
  title,
  thumbnailPosition,
  offset,
  src,
  id,
  setCursorHovered,
  x,
  y,
}) => {
  const [hoverState, setHoverState] = useState(false)
  const list = useRef()
  const [state, setState] = useState({
    top: 0,
    left: 0,
  })
  useEffect(() => {
    setState({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    })
  }, [hoverState])

  return (
    <motion.li ref={list}>
      <Link to={`/product/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              variants={lineGrow}
              className="mask"
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
          <motion.div
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="title"
          >
            <h2>
              <motion.div
                variants={titleSlideUp}
                transition={transition}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <Image src={src} />
            <motion.div
              variants={lineGrow}
              transition={{ ...transition, duration: 1 }}
              className="mask"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            className="floating-image"
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - state.left + offset,
              y: y - state.top,
            }}
            transition={{
              ease: "linear",
            }}
          >
            <Image src={src} />
          </motion.div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div
              variants={lineGrow}
              className="mask right"
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </Link>
    </motion.li>
  )
}

const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false)
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        style={{ background: panelComplete ? "#e7e7de" : "#e7dee7" }}
        className="left-panel-background"
      ></motion.div>
      <motion.div
        style={{
          background: panelComplete ? "#e7e7de" : "#e7dee7",
        }}
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
        onAnimationComplete={() => {
          setPanelComplete(!panelComplete)
        }}
      ></motion.div>
    </>
  )
}

export default Menu
