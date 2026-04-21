'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Movie API',
    description:
      'Aplicação web para explorar filmes e séries usando a API do TMDB, com pesquisa e detalhes completos.',
    image: '/movie.png',
    href: 'https://web-api-movies-react.vercel.app/',
    tags: ['React', 'API', 'TypeScript'],
    gradient: 'from-purple-600/30 to-blue-600/30',
  },
  {
    title: 'Eletronic Store',
    description:
      'Loja virtual de eletrônicos com carrinho de compras, catálogo de produtos e interface responsiva.',
    image: '/eletronic_store.png',
    href: 'https://eletronic-store.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    gradient: 'from-blue-600/30 to-cyan-600/30',
  },
]

const comingSoon = [
  {
    title: 'Em Breve',
    gradient: 'from-violet-600/20 to-purple-600/20',
    tags: ['React', 'Node.js'],
  },
  {
    title: 'Em Breve',
    gradient: 'from-cyan-600/20 to-teal-600/20',
    tags: ['Next.js', 'API'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      {/* Orb accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-700/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-dm text-purple-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
        </motion.div>

        {/* Active projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="animated-border glass rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-52 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* External link icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-syne font-bold text-xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-dm text-slate-400 px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comingSoon.map((project, i) => (
            <motion.div
              key={`soon-${i}`}
              className="glass rounded-2xl overflow-hidden border border-dashed border-white/[0.08]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.24 + i * 0.12 }}
            >
              <div
                className={`relative h-52 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                {/* Decorative dots */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,.3) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="text-center z-10">
                  <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="font-syne font-semibold text-slate-500 text-sm tracking-widest uppercase">
                    Em Breve
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-dm text-slate-600 px-3 py-1 rounded-full border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
