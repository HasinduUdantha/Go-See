import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
   
function Service (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName = "hero-mid"
        heroImg = "https://images.pexels.com/photos/2361999/pexels-photo-2361999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title = "Contact Us"
        text = "We Make Your Housing Dreams a Reality.."
        
        />
        </>
    );
}

export default Service;