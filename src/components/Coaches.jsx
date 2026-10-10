import coachPhoto from '../assets/coach.jpeg'

const coach = {
  name: 'NEWGUIN ADEA',
  role: 'HEAD COACH AND MANAGER',
  bio: 'My work is centered on using sport as a platform for discipleship, evangelism, character development, and positive social change. Through coaching and community engagement, I seek to create safe and empowering environments where children and young people can develop their talents, grow in faith, build life skills, and discover their God-given purpose.I am particularly committed to addressing challenges affecting young people and families, including drug and substance abuse, school dropout, early pregnancy, gender-based violence, and limited opportunities for youth development.Through Sport for Hope, I envision sport becoming a pathway to hope, opportunity, and transformation. I believe that when young people are given the right support, mentorship, opportunities, and guidance, they can overcome challenges and become responsible leaders who positively impact their communities.I welcome partnerships with individuals, churches, organizations, foundations, businesses, and donors who share a commitment to investing in young people and creating lasting community impact.Together, we can empower, educate, and transform lives through sport and the hope of Christ.',
}

const achievements = [
  {  title: 'Bachelor Arts degree in Theology', detail: 'A professionally trained football coach, Christian mentor, and sports ministry practitioner with a passion for transforming lives through sport, faith, mentorship, and community development' },
  {   title: 'HEADCOACH : ANTIOCH FC', detail: 'A senior team coach of Antioch Fc which is a faith based club of a ministry of Antioch Bible Community Church and part of sports for hope project' },
  
]

function Coaches() {
  return (
    <section id="coaches" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-green-700">Our team</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase">
            Meet our <span className="text-green-700">coach</span>
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[18rem_1fr]">
          <div className="mx-auto w-full max-w-xs text-center md:mx-0">
            <img
              src={coachPhoto}
              alt={coach.name}
              className="relative transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl aspect-[3/4] w-full rounded-xl object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold uppercase">{coach.name}</h3>
            <p className="text-sm font-medium uppercase tracking-wide text-green-700">{coach.role}</p>
          </div>

          <div>
            <p className="text-gray-600">{coach.bio}</p>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-green-700">
              Achievements
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-green-100 bg-green-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-bold text-green-700">{item.year}</p>
                  <h4 className="mt-1 font-bold uppercase">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coaches