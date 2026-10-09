const DEV_NAME = 'Xentro Technologies'
const DEV_LINK = 'https://xentro-technologies.vercel.app/'

import { Link } from 'react-router-dom'
import badge from '../assets/badge.jpeg'

const quickLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'About us', to: '/#about' },
  { label: 'Programs', to: '/#programs' },
  { label: 'Fees', to: '/#fees' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Register', to: '/register' },
  { label: 'Contact', to: '/#contact' },
]

const programs = ['Under 7', 'Under 9', 'Under 11', 'Under 13', 'Under 15', 'Under 17', 'Holiday training']

function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <img src={badge} alt="Sport for Hope badge" className="h-20 w-20 rounded-full bg-white object-contain p-1 transition duration-300 hover:-translate-y-1 hover:scale-110" />
          <p className="mt-4 text-sm"> Empower. Educate. Transform.</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lime-300">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-lime-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lime-300">Our programs</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {programs.map((program) => (
              <li key={program}>{program}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lime-300">Contact info</h3>
          <ul className="mt-4 space-y-2 text-sm">
                       <li>VENUE: Gatongora, Ruiru, Kiambu County, Kenya</li>
            <li>
              <a href="tel:+254746782709" className="hover:text-lime-300">+254 746 782 709</a>
            </li>
            <li>
              <a href="mailto:sportforhope201@gmail.com" className="hover:text-lime-300">sportforhope201@gmail.com</a>
            </li>

          </ul>
        </div>
      </div>

            <div className="border-t border-green-800">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-5 text-sm">
          <p>© {new Date().getFullYear()} Sport for Hope. All rights reserved.</p>
          <p className="font-bold text-lime-300">Created for a purpose</p>
        </div>
        <p className="pb-5 text-center text-xs text-green-300">
          Developed by : {' '}
          <a href={DEV_LINK} target="_blank" rel="noreferrer" className="font-bold text-lime-300 hover:underline">
            {DEV_NAME}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer