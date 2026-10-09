const fees = [
  { title: 'Registration', amount: 'KES 1,000', note: 'PAID ONCE AND PLAYER EARNS MEMBERSHIP' },
 
]

function Fees() {
  return (
    <section id="fees" className="bg-green-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-green-700">Fees</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase">
            Join the <span className="text-green-700">academy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            CLICK THE WHATSAPP LINK BELOW TO MAKE ENQUIRIES. 
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          {fees.map((fee) => (
            <div
              key={fee.title}
              className="flex flex-col justify-center rounded-2xl border border-green-100 bg-white p-8 text-center shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-green-700">{fee.title}</h3>
              <p className="mt-3 text-4xl font-extrabold text-green-950">{fee.amount}</p>
              <p className="mt-3 text-gray-600">{fee.note}</p>
            </div>
          ))}

          <div className="rounded-2xl bg-green-950 p-6 text-white shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <span className="inline-flex rounded-full bg-green-800 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime-300">
              Make a difference
            </span>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
              Talent Should Never Be Limited by Circumstance.
            </h3>
           

            <div className="my-5 border-t border-green-700" />

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-xl text-lime-400">✦</span>
                <div>
                  <h4 className="font-bold">Provide Football Kits</h4>
                  <p className="mt-1 text-sm text-green-100">Help players access the essential gear they need to train and play.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-xl text-lime-400">♡</span>
                <div>
                  <h4 className="font-bold">Support Training Fees</h4>
                  <p className="mt-1 text-sm text-green-100">Help ease financial barriers so young players can continue developing their talent.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-xl text-lime-400">↗</span>
                <div>
                  <h4 className="font-bold">Invest in a Young Dream</h4>
                  <p className="mt-1 text-sm text-green-100">Give young people a chance to grow through football, mentorship, and discipline.</p>
                </div>
              </li>
            </ul>

            <a
              href={`https://wa.me/254746782709?text=${encodeURIComponent('Hello Sport for Hope, I would like to sponsor a player.')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 font-bold uppercase transition hover:bg-lime-400 hover:text-green-950"
            >
              Sponsor a player <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fees