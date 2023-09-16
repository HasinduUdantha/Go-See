import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName = "hero"
        heroImg = "https://images.pexels.com/photos/3889704/pexels-photo-3889704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title = "Adventure Awaits, Go Find It."
        text = "Choose your Favourite Destination."
        buttonText = "Travel Plan"
        url = "/"
        btnClass = "show"
        />
        
        <Destination/>
        </>
    );
}

export default Home;