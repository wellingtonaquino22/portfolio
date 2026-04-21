'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wellington-aquino-046328172/',
    color: '#0A66C2',
    glow: 'rgba(10,102,194,0.4)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5581981824479',
    color: '#25D366',
    glow: 'rgba(37,211,102,0.4)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/wellingtonaquino22',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.15)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      {/* Orb accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-dm text-purple-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Vamos Conversar
          </span>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
            Entre em{' '}
            <span className="gradient-text">Contato</span>
          </h2>
          <p className="font-dm text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Tem um projeto em mente? Vamos trabalhar juntos! Estou disponível
            para freelance e oportunidades de tempo integral.
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map((social, i) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:border-white/20"
                  style={{
                    color: social.color,
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 8px 30px ${social.glow}`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                  }}
                >
                  {social.icon}
                </div>
                <span className="font-dm text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-200">
                  {social.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/[0.05]">
          <p className="font-dm text-slate-600 text-sm">
            Desenvolvido com{' '}
            <span className="gradient-text font-medium">Next.js & TailwindCSS</span>{' '}
            ·{' '}
            <span className="text-slate-700">© {new Date().getFullYear()} Wellington Aquino</span>
          </p>
        </div>
      </div>
    </section>
  )
}
