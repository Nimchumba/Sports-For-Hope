import Players from './Players'
import teamPhoto from '../assets/team-photo.jpeg'

const pillars = [
  { title: 'Empower', text: 'We build confidence, discipline, and resilience, helping every player believe in their ability to achieve more' },
  { title: 'Educate', text: 'We nurture football intelligence, life skills, and respect, preparing young people for challenges on and off the pitch.' },
  { title: 'Transform', text: 'We turn potential into progress by opening doors to football, personal growth, and brighter futures for our community.' },
]

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-green-700">About us</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase">
            Our <span className="text-green-700">story</span>
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <img
            src={teamPhoto}
            alt="Sport for Hope team"
            className="relative z-0 aspect-[4/3] w-full rounded-xl object-cover shadow-md transition-all duration-300 ease-out hover:z-10 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl"
          />
          <div>
            <h3 className="text-2xl font-bold uppercase">
              CREATED FOR A PURPOSE
              <br />
              Building Talent. Shaping Character. Inspiring Hope.
            </h3>

            <p className="mt-5 text-gray-600">
              <span className="mb-2 block text-lg font-black uppercase tracking-wide text-green-700">
                More Than a Game
              </span>
              Founded in 2019 and based in Gatongora, Ruiru, Kenya, Sports for Hope Academy is dedicated to nurturing young talent and empowering young people from all backgrounds through sport. We provide football training, physical fitness and conditioning, and mentorship to help young people develop their skills, confidence, discipline, and teamwork, both on and off the pitch.
            </p>

            <p className="mt-5 text-gray-600">
              <span className="mb-2 block text-lg font-black uppercase tracking-wide text-green-700">
                A Purpose Beyond the Pitch
              </span>
              We believe every young person deserves an opportunity to discover their potential and pursue their dreams. Through sport and mentorship, we strive to develop talented players, build responsible individuals, create pathways to higher levels of football and other opportunities, and make a lasting positive impact on our community. Our vision is to grow into a recognized academy that transforms lives, inspires hope, and shapes a generation equipped to succeed both in sport and in life.
            </p>
          </div>
        </div>
        <Players />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-green-950 p-8 text-white">
            <h3 className="text-sm font-bold uppercase tracking-widest text-lime-300">Our vision</h3>
            <p className="mt-3">To shape a generation of talented, disciplined, and empowered young people who transform their communities and inspire hope through sport.
</p>
          </div>
          <div className="rounded-xl bg-green-700 p-8 text-white">
            <h3 className="text-sm font-bold uppercase tracking-widest text-lime-200">Our mission</h3>
            <p className="mt-3">To unlock the potential of every young person through football, purposeful mentorship, and character development, creating pathways to opportunity both on and beyond the pitch.
</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-green-100 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-extrabold uppercase text-green-700">{pillar.title}</h3>
              <p className="mt-3 text-gray-600">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About