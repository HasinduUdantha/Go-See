import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../Assests/about.jpeg";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={HeroImg}
        title="About"
        text="Go Where Your Heart Takes You."
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
