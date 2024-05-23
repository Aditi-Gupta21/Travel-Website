import "./Destination.css"
import React from "react"
import temple1 from "../assets/ayodhya1.jpg"
import temple2 from "../assets/ayodhya2.jpg"
import temple3 from "../assets/tamil1.jpg"
import temple4 from "../assets/tamil2.jpg"
import temple5 from "../assets/7.jpg"
import temple6 from "../assets/uttarkand2.jpg"
import DestinationData from "./DestinationData"

function Destination() {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>See the world. It’s more fantastic than any dream.</p>
            <DestinationData
                className="first-desc"
                heading="Temple of Uttar Pradesh"
                para="A land where cultures have evolved and religion have emerged, Uttar Pradesh along the mighty rivers take the tourists on a magical trip. Moving from one end of the state to other, Uttar Pradesh let the tourists come across the popular tourist attractions and take a close look at the celebration of life in the vastness of the state. Once tourists are done with exploring the heritage in Lucknow, a visit to Dewa Sharif, Dudhwa and Naimisharanya can also be made to make the most of the heritage tour in Uttar Pradesh. Famed as the birthplace of Lord Ram, Ayodhya is yet another heritage tour destination in Uttar Pradesh offering the tourists a number of places for sightseeing tour."
                img1={temple1}
                img2={temple2}
            />
            <DestinationData
                className="first-desc-reverse"
                heading="Temple of Tamil Nadu"
                para="Tamil Nadu that not only provides you a great spiritual experience but also gives you a chance to revel in their mesmerizing designs, still speaking stories of their glorious past. Here is a list of 20 Top temples of Tamil Nadu for the divinely inspired travellers.Badrinath Temple is located in a small town Badrinath which is in Chamoli district of Uttarakhand. It is one of the most revered pilgrimage sites of “Char Dham” (four abodes) which in turn is the most scared set of pilgrimage sites in Hindu religion. Every year thousands and thousands of disciples visit this temple. Located at the height of 3133 meters above the sea level Badrinath Temple is not easy to reach. One has to drive through hilly terrains with dangerous cliffs and curves to reach the temple."
                img1={temple3}
                img2={temple4}
            />
            <DestinationData
                className="first-desc"
                heading="Temple of Uttarakhand"
                para="The glorifying Uttarakhand is a peaceful state which has been conferred with the epithet of “Devbhoomi”, the land of gods. To live up to its name the state possesses various sacred shrines that are visited by thousands of devotees each year. Uttarakhand houses many sacred Hindu temples like Chota Char Dham, Panch Kedar, Panch Prayag, Panch Badri, Shakti Peeth and Siddha Peeth.There are temples of representing “divine knowledge”, Durga, the (fire) form of lord Shiva, goddess par excellence, Chandika, representing kali in her most terrible forms has nine temples in Garhwal and two in Kumaon, Sitala, the goddess of small pox has temples dedicated to her in Almora, Srinagar, Jageshwar and other places."
                img1={temple5}
                img2={temple6}
            />
        </div>
    )
}

export default Destination;