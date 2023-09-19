import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactUs from "../Assests/ContactUs.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg= {ContactUs}
        title="Contact Us"
        text="Your Adventure Awaits."
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
