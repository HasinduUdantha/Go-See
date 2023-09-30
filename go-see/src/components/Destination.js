import DestinationData from "./DestinationData";
import pamukkale from "../Assests/pamukkale.jpg";
import pamukkale_2 from "../Assests/pamukkale_2.jpg";
import bali_1 from "../Assests/bali_1.jpg";
import bali_2 from "../Assests/bali_2.jpeg";
import rome_1 from "../Assests/rome_1.jpg";
import rome_2 from "../Assests/rome_2.jpg";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours Give you the best Oppurtunity</p>

      <DestinationData
        className="first-des"
        heading="Pamukkale, Turkey"
        text="Pamukkale is located in southwestern Turkey, in the Denizli Province. 
            It is very famous for its travertines 
            (hot water springs) which is a magical site with turquoise pools and snow-white cliffs. 
            It is one of the most photogenic places in the world.
             Pamukkale, which means 'cotton castle' in Turkey, is a natural site with carbonate mineral deposits left behind by the flowing water of the hot springs. 
             There are 17 hot springs in the area, known are known for their healing properties."
        img1={pamukkale}
        img2={pamukkale_2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Bali, Indonesia"
        text="Also known as the Land of the Gods, 
            Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity.
            It is also famous for surfers’ paradise! Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, 
            to its luxurious beach resorts and exciting nightlife. And everywhere,
            you will find intricately carved temples."
        img1={bali_1}
        img2={bali_2}
      />

      <DestinationData
        className="first-des"
        heading="Rome, Italy"
        text="
        Rome, often referred to as the Eternal City,
         is a destination that captivates travelers with its rich history,
          art, architecture, and undeniable beauty. 
          This iconic city offers a blend of ancient and modern attractions that 
          continue to draw visitors from around the world.
          Modern Rome has 280 fountains and more than 900 churches."
        img1={rome_1}
        img2={rome_2}
      />
    </div>
  );
};

export default Destination;
