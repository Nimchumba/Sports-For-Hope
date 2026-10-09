import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const previous = useRef(pathname)
  const savedY = useRef(0)

  useEffect(() => {
    function onScroll() {
      if (window.location.pathname === '/') savedY.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const cameFromSubPage = ['/gallery', '/register'].includes(previous.current) && pathname === '/'
    previous.current = pathname

    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else if (cameFromSubPage) {
      window.scrollTo(0, savedY.current)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToHash