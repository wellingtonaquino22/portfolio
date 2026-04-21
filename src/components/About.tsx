'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Anos de Experiência', value: '3+' },
  { label: 'Projetos Realizados', value: '10+' },
  { label: 'Tecnologias', value: '8+' },
]

const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 },
}

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      {/* Accent orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-700/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-600/8 blur-[100px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ── Left: text ── */}
          <motion.div className="flex-1" {...fadeLeft}>
            <span className="font-dm text-purple-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Sobre Mim
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-10 leading-[1.1]">
              Quem sou{' '}
              <span className="gradient-text">eu?</span>
            </h2>

            <div className="space-y-6 font-dm text-slate-400 text-lg leading-relaxed">
              <p>
                Olá! Sou{' '}
                <span className="text-white font-medium">Wellington Aquino</span>
                , tenho 24 anos e moro em Vitória de Santo Antão/PE. Sou
                desenvolvedor graduando em Sistemas da Informação.
              </p>
              <p>
                Trabalho com{' '}
                <span className="text-purple-400 font-medium">
                  Desenvolvimento Web
                </span>
                , utilizando tecnologias como JavaScript, TypeScript, ReactJs e
                NextJs. Também tenho contato com Docker, GraphQL, Git/Github e
                outras ferramentas modernas do ecossistema.
              </p>
              <p>
                Movido por uma forte curiosidade e vontade de{' '}
                <span className="text-blue-400 font-medium">fazer sempre mais</span>
                . Fique à vontade para conhecer um pouco do meu trajeto
                profissional.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Docker', 'GraphQL'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-sm font-dm text-slate-400 px-4 py-1.5 rounded-full glass border border-white/[0.06] hover:border-purple-500/30 hover:text-white transition-all duration-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* ── Right: stat cards ── */}
          <motion.div className="w-full lg:w-auto flex-shrink-0" {...fadeRight}>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:w-[240px]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="animated-border glass rounded-2xl p-6 text-center lg:text-left cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <div className="font-syne font-extrabold text-4xl lg:text-5xl gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="font-dm text-slate-500 text-sm leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
