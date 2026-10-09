import { useState } from 'react'
import { Link } from 'react-router-dom'
import badge from '../assets/badge.jpeg'

const links = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Programs', to: '/#programs' },
  { label: 'Fees', to: '/#fees' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Register', to: '/register' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/#home" className="flex items-center gap-3">
          <img src={badge} alt="Sport for Hope badge" className="h-14 w-14 object-contain transition duration-300 hover:-translate-y-1 hover:scale-110" />
          <span className="text-xl font-bold uppercase">Sport for Hope</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-green-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/#register"
            className="hidden rounded bg-green-700 px-5 py-2 text-sm font-bold uppercase text-white hover:bg-green-800 sm:block"
          >
            Join Sports for Hope
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl md:hidden"
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 border-t px-6 py-4 text-sm font-medium uppercase tracking-wide md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#register"
              onClick={() => setOpen(false)}
              className="block rounded bg-green-700 px-5 py-2 text-center font-bold text-white"
            >
              Join academy
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar