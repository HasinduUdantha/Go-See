import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../Assests/service_1.jpeg";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={HeroImg}
        title="Services"
        text="Crafting Personalized Travel Experiences."
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
