import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaLocationDot, FaLinkedinIn } from 'react-icons/fa6'

const info = {
  phone: '254746782709',      
  whatsapp: '254746782709',   
  email: 'sportforhope201@gmail.com',      
  location: 'Gatongora, Ruiru - Gikumari 100 m off Gatongora Police station.',   
  mapLink: 'https://www.google.com/maps/place/Ruiru+Kihunguro+Secondary+School/@-1.1611336,36.968566,17z/data=!3m1!4b1!4m6!3m5!1s0x182f41d9663d577f:0x87eb0fca0bbafa02!8m2!3d-1.1611336!4d36.9711409!16s%2Fg%2F11pznznrvv?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D',    // a Google Maps link to the pitch
  facebook: 'https://www.facebook.com/profile.php?id=61587739757711&__cft__[0]=AZhPf2-PB-0shBiTLswdaief0plzOuVePJtd9nQPeZ0GQqO7n3AuZ8zWHcCODi5AOZHoaDlnxSlUENvhT4Tkp3c0EtLBvNpOHdNm0ZjNEX0HLTkH6SIFeGrZ_uC_5Z-4fIYJ-BHimaYPSogxzMMPs9kUaOT1V04ygg',   
  instagram: 'https://www.instagram.com/sportforhope1', 
   linkedin: 'https://www.linkedin.com/in/newguin-adea-976489235/', 
  tiktok: 'https://www.tiktok.com/@sportforhopeacademy',     
}

const cards = [
  { label: 'Phone', text: info.phone ? `+${info.phone}` : '[PHONE NUMBER]', href: info.phone && `tel:+${info.phone}` },
  { label: 'WhatsApp', text: info.whatsapp ? `+${info.whatsapp}` : '[WHATSAPP NUMBER]', href: info.whatsapp && `https://wa.me/${info.whatsapp}` },
  { label: 'Email', text: info.email || '[EMAIL ADDRESS]', href: info.email && `mailto:${info.email}` },
  { label: 'Location', text: info.location || '[PITCH OR VENUE, AREA, TOWN]', href: info.mapLink },
]

const socials = [
  { name: 'Facebook', icon: FaFacebookF, href: info.facebook },
  { name: 'Instagram', icon: FaInstagram, href: info.instagram },
  { name: 'TikTok', icon: FaTiktok, href: info.tiktok },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: info.linkedin },
  { name: 'WhatsApp', icon: FaWhatsapp, href: info.whatsapp && `https://wa.me/${info.whatsapp}` },
  { name: 'Email', icon: FaEnvelope, href: info.email && `mailto:${info.email}` },
  { name: 'Location', icon: FaLocationDot, href: info.mapLink },
].filter((social) => social.href)

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-green-700">Get in touch</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase">
            Contact <span className="text-green-700">us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Parents, guardians, and supporters are welcome to call, message, or visit Sports for Hope  to enroll a player or partner with us in nurturing talent and transforming young lives through sport.

          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, text, href }) => {
            const Tag = href ? 'a' : 'div'
            const linkProps = href
              ? { href, ...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' }) }
              : {}

            return (
              <Tag
                key={label}
                {...linkProps}
                className="rounded-xl border border-green-100 bg-green-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-green-700">{label}</p>
                <p className="mt-2 text-gray-700">{text}</p>
              </Tag>
            )
          })}
        </div>

        {socials.length > 0 && (
          <div className="mt-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">Follow us</p>
            <div className="mt-4 flex justify-center gap-4">
              {socials.map(({ name, icon: Icon, href }) => (
              
                              <a
                  key={name}
                  href={href}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                  aria-label={name}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-xl text-white transition hover:-translate-y-1 hover:bg-green-800"
                >
                  <Icon />
                </a>
                
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact