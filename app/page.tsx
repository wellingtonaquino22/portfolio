import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import Contact from '@/src/components/Contact'
import BackToTop from '@/src/components/BackToTop'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
    </main>
  )
}
