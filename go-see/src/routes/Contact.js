import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
   
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName = "hero-mid"
        heroImg = "https://img.freepik.com/free-photo/airplane-flying-vibrant-blue-sky-clouds-generative-ai_188544-7985.jpg?w=1800&t=st=1694777240~exp=1694777840~hmac=e11417934f7ca5a88ef57b81f11fdb3cf69579a57feb4790939c7c8b3363aaa8"
        title = "Contact Us"
        text = "Your Adventure Awaits."
        
        />
        </>
    );
}

export default Contact;