const programs = [
  { name: 'Under 7', ages: 'Under 7 years', schedule: 'HOLIDAYS : MONDAY - SATURDAY 8AM-12PM SCHOOLDAYS : SUNDAY 2PM-5PM ', text: 'Building coordination, basic ball control, and a love for football through fun, play-based training.' },
  { name: 'Under 9', ages: 'Under 9 years', schedule: 'HOLIDAYS : MONDAY - SATURDAY 8AM-12PM SCHOOLDAYS : SUNDAY 2PM-5PM', text: 'Developing fundamental football skills, teamwork, confidence, and creativity on the ball.' },
  { name: 'Under 11', ages: 'Under 11 years', schedule: 'HOLIDAYS : MONDAY - SATURDAY 8AM-12PM SCHOOLDAYS : SUNDAY 2PM-5PM', text: 'Strengthening technical ability, decision-making, discipline, and understanding of the game.' },
  { name: 'Under 13', ages: 'Under 13 years', schedule: 'HOLIDAYS : MONDAY - SATURDAY 8AM-12PM SCHOOLDAYS : SUNDAY 2PM-5PM',  text: 'Improving tactical awareness, technical skills, fitness, and teamwork through structured training.' },
  { name: 'Under 15', ages: 'Under 15 years', schedule: 'HOLIDAYS : MONDAY - SATURDAY 8AM-12PM SCHOOLDAYS : SUNDAY 2PM-5PM',  text: 'Developing competitive ability, tactical intelligence, physical conditioning, and match performance.' },
  { name: 'Under 17', ages: 'Under 17 years', schedule: 'HOLIDAYS : MONDAY - SATURDAY 8AM-12PM SCHOOLDAYS : SUNDAY 2PM-5PM',  text: 'Preparing talented players for higher levels of football through advanced training, discipline, and competitive development.' },
]

function Programs() {
  return (
    <section id="programs" className="bg-green-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-lime-300">Training programs</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase">
            Age <span className="text-lime-300">categories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-green-100">
            Our programs are structured by age and development level, helping every player build skills, confidence, discipline, and a strong foundation for the future at their own pace. Each group receives age-appropriate training, mentorship, and support to maximize their potential on and off the pitch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col rounded-xl border border-green-800 bg-green-900/60 p-6 transition hover:-translate-y-1 hover:border-lime-300"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-lime-300">Program</p>
              <h3 className="mt-1 text-2xl font-extrabold uppercase">{program.name}</h3>
              <p className="mt-3 text-sm text-green-100">{program.text}</p>
              <ul className="mt-4 space-y-1 text-sm text-green-200">
                <li>{program.ages}</li>
                <li>{program.schedule}</li>
                <li>{program.size}</li>
              </ul>
              <a
                href="register"
                className="mt-6 rounded bg-lime-400 py-2 text-center text-sm font-bold uppercase text-green-950 hover:bg-lime-300"
              >
                Enroll now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border-2 border-lime-400 p-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-lime-300">Special program</p>
          <h3 className="mt-2 text-3xl font-extrabold uppercase">Holiday training</h3>
          <p className="mx-auto mt-3 max-w-xl text-green-100">
            Our next holiday training program runs from 1st November to 20th December 2026. Join Sports for Hope Academy for purposeful football training focused on developing skills, building confidence, strengthening discipline, and nurturing young talent.
          </p>
          <a
            href="register"
            className="mt-6 inline-block rounded bg-lime-400 px-8 py-3 font-bold uppercase text-green-950 hover:bg-lime-300"
          >
            Register now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Programs