import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Cta from "../sections/Cta";
import Header from "../sections/legal/Header";
import Privacy from "../sections/legal/Privacy";
import Terms from "../sections/legal/Terms";

const Legal = () => (
  <main className="relative">
    <Nav />
    <Header />
    <Privacy />
    <Cta />
    <Footer />
  </main>
);

export default Legal;