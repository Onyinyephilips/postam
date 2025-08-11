import Footer from '../components/Footer'
import Nav from '../components/Nav'
import AbtCTA from '../sections/about/AbtCTA'
import Story1 from '../sections/about/Story1'
import Story2 from '../sections/about/Story2'
import Values from '../sections/about/Values'
import Cta from '../sections/Cta'

const About = () => {
  return (
    <main>
        <Nav />
        <Story1 />
        <Story2 />
        <Values />
        <AbtCTA />
        <Cta />
        <Footer />

    </main>
  )
}

export default About