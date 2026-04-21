'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background orbs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[15%] -left-40 w-[600px] h-[600px] rounded-full bg-purple-700/25 blur-[130px] animate-float1" />
        <div className="absolute bottom-[10%] -right-40 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[120px] animate-float2" />
        <div className="absolute top-[55%] left-[45%] w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[90px] animate-float3" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">

          {/* ── Text side ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 text-sm text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Disponível para projetos
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-syne leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="block text-slate-400 font-medium text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase mb-3">
                Olá, eu sou
              </span>
              <span className="gradient-text-animated font-extrabold text-6xl sm:text-7xl lg:text-8xl xl:text-[90px] block">
                Wellington
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-dm text-xl sm:text-2xl text-slate-400 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Desenvolvedor{' '}
              <span className="text-purple-400 font-semibold">Front-End</span>{' '}
              &{' '}
              <span className="text-blue-400 font-semibold">Full-Stack</span>
            </motion.p>

            <motion.p
              className="font-dm text-slate-500 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Apaixonado por criar experiências web memoráveis com JavaScript,
              TypeScript, React e Next.js.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link
                href="#projects"
                className="btn-gradient px-8 py-3.5 rounded-full font-dm font-semibold text-white text-base"
              >
                Ver Projetos
              </Link>
              <Link
                href="#about"
                className="px-8 py-3.5 rounded-full font-dm font-semibold text-slate-300 text-base glass border border-white/10 hover:border-purple-500/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Sobre Mim
              </Link>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {['TypeScript', 'React', 'Next.js', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-dm text-slate-500 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.03]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Photo side ── */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.75, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative isolate">
              {/* Outer glow – behind everything */}
              <div className="absolute -inset-8 rounded-full bg-purple-600/25 blur-3xl pointer-events-none -z-10" />
              <div className="absolute -inset-4 rounded-full bg-blue-500/15 blur-2xl pointer-events-none -z-10" />

              {/* Rotating gradient ring acts as a 3px border via padding */}
              <div className="profile-ring p-[3px] rounded-full">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden bg-[#0a0a1a]">
                  <Image
                    src="/profile.jpg"
                    alt="Wellington Aquino"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] font-dm tracking-[0.3em] uppercase text-slate-600">
            scroll
          </span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-purple-500/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
