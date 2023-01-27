import Headc from '../src/components/Header'
import { Main } from '../src/components/main'
import Habilits from '../src/components/Habilits'
import Projects from '../src/components/Projects'
import ButtomHome from '../src/components/ButtomHome'
import Contact from '../src/components/Contact'
import About from '../src/components/About'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])

  return (
    <>
    <Headc/>
    <Main/>
    <About/>
    <Habilits/>
    <Projects/>
    <Contact/>
    <ButtomHome/>
  </>
  )
}
