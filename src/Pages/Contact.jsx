import Nav from "../components/Nav";
import Cta from "../sections/cta";
import Contactus from "../sections/contact/Contactus";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <main className="relative">
    <Nav />
    <Contactus />
    <Cta />
    <Footer />
  </main>
  )
}

export default Contact