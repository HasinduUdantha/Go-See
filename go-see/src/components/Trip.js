import "./TripStyles.css"
import TripData from "./TripData";
import trip1 from "../Assests/france.jpg"
import trip2 from "../Assests/srilanka.jpg"
import trip3 from "../Assests/japan.jpg"
function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps. </p>
            <div className="tripcard">
                <TripData
                image={trip1}
                heading = "Trip in Paris, France"
                text = "Paris, the capital of France, is one of the world’s most popular tourist destinations,
                with people flocking from around the globe to soak up the atmosphere of this cultural city and visit its main attractions. 
                Paris is also regarded as the world’s most romantic city and a heaven for foodies and fashion lovers."
                />

                <TripData
                image={trip2}
                heading = "Trip in Galle, Sri Lanka"
                text = "A historical city located in Southwestern Sri Lanka is an Asian tourist haven today and many are flocking from around the world to this beautiful place! 
                A stunning fort, Dutch colonial architecture and beaches; 
                there is no shortage of places to visit in Galle and around. 
                Whether you are an artist, a poet, a photographer or something else,
                 you will fall in love with Sri Lanka!"
                />

                <TripData
                image={trip3}
                heading = "Trip in Kyoto, Japan"
                text = "Kyoto is the former capital city of Japan and world-famous for its refined culture,
                 dining, and charm of rural Japan. Kyoto City attracts millions of local and international visitors each year looking for traditional Japanese culture. 
                 Temples and shrines such as Kiyomizudera Temple and Kinkakuji draw lots off attention from visitors,
                 as do the bamboo groves of nearby Arashiyama."
                />
            </div>
        </div>
    )
}

export default Trip;