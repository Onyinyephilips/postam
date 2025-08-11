import Footer from "../components/Footer";
import NavHome from "../components/NavHome";
import Cta from "../sections/cta";
import Discover from "../sections/home/Discover";
import Experience from "../sections/home/Experience";
import Hero from "../sections/home/Hero";
import Homecta from "../sections/home/Homecta";
import HomeFaq from "../sections/home/HomeFaq";
import Reviews from "../sections/home/Reviews";
import Trending from "../sections/home/Trending"
import Why from "../sections/home/Why";
import Works from "../sections/home/Works";

const App = () => (
  <main className="relative">
    <NavHome />
    <Hero />
    <Discover />
    <Trending />
    <Experience />
    <Works/>
    <Why />
    <Reviews />
    <HomeFaq/>
    <Homecta/>
    <Cta />
    <Footer />
  </main>
);

export default App;