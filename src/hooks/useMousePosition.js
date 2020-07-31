import { useState, useEffect } from "react"

export default function useMousePosition() {
  let [mousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener("mousemove", handlePosition)
    return () => window.removeEventListener("mousemove", handlePosition)
  }, [])

  return mousePosition
}
