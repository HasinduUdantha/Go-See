import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
   
function About (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName = "hero-mid"
        heroImg = "https://img.freepik.com/free-photo/airplane-map-computer-mouse-wooden-background-top-view_169016-40916.jpg?w=1800&t=st=1694777767~exp=1694778367~hmac=24545c26706b1fbb18314579cfafd4d71205f07804732743dfff52a7c0747b13"
        title = "About"
        text = "Go Where Your Heart Takes You."
        />
        <Footer/>
        </>
    );
}

export default About;