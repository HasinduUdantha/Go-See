import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName = "hero"
        heroImg = "https://images.pexels.com/photos/1796706/pexels-photo-1796706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title = "Adventure Awaits, Go Find It."
        text = "Choose your Favourite Destination."
        buttonText = "Travel Plan"
        url = "/"
        btnClass = "show"
        />
        
        </>
    );
}

export default Home;