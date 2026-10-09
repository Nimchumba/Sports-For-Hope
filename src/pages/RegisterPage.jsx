import { Link } from 'react-router-dom'
import Register from '../components/Register'

function RegisterPage() {
  return (
    <div className="min-h-screen bg-green-950">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link to="/" className="text-sm font-bold uppercase text-lime-300 hover:underline">
          ← Back to home
        </Link>
      </div>
      <Register />
    </div>
  )
}

export default RegisterPage