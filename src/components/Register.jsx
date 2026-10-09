import { useState } from 'react'

const PHONE = '254746782709' // the academy's WhatsApp number: 254, then the number without the leading 0

const categories = ['Under 7', 'Under 9', 'Under 11', 'Under 13', 'Under 15', 'Under 17']

const emptyForm = { parent: '', phone: '', email: '', player: '', category: '', message: '' }

const inputClass =
  'mt-1 w-full rounded border border-green-800 bg-green-900/60 px-4 py-3 text-white placeholder-green-300 focus:border-lime-300 focus:outline-none'

function Register() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const text = [
      'Hello Sport for Hope, I would like to register a player.',
      '',
      `Parent/guardian: ${form.parent}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Player: ${form.player}`,
      `Age category: ${form.category}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <section id="register" className="bg-green-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-lime-300">Register</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase md:text-5xl">Be part of the team</h2>
          <p className="mt-4 text-green-100">
            Fill in the form and send your details to us on WhatsApp. We will get back to you about trials, fees and training sessions.
          </p>
        </div>

        {sent ? (
          <div className="rounded-xl border border-lime-300 p-8 text-center">
            <h3 className="text-2xl font-extrabold uppercase text-lime-300">Almost done</h3>
            <p className="mt-2 text-green-100">
              WhatsApp should have opened with your details. Tap the send button there to finish registering.
            </p>
            <button onClick={() => setSent(false)} className="mt-6 text-sm underline">
              Register another player
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium">
              Parent or guardian name
              <input name="parent" value={form.parent} onChange={handleChange} required className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Phone number
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Email (optional)
              <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Player name
              <input name="player" value={form.player} onChange={handleChange} required className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              Age category
              <select name="category" value={form.category} onChange={handleChange} required className={inputClass}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category} className="text-black">
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Message (optional)
              <textarea name="message" rows="3" value={form.message} onChange={handleChange} className={inputClass} />
            </label>
            <button
              type="submit"
              className="w-full rounded bg-lime-400 py-3 font-bold uppercase text-green-950 hover:bg-lime-300"
            >
              Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Register