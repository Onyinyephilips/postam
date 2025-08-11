import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Cta from '../sections/cta'
import Faqsection from '../sections/faq/Faqsection'
import HeaderFaq from '../sections/faq/HeaderFaq'

const Faq = () => {
  return (
    <main>
        <Nav />
        <HeaderFaq />
        <Faqsection />
        <Cta />
        <Footer/>
    </main>
   

  )
}

export default Faq