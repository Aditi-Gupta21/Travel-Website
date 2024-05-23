import React from "react";
import Destination from "../component/Destination";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";
import Review from "../component/Review";
import '../component/Trip.css'
import Footer from "../component/Footer";
// Image import---------------
import trip1 from "../assets/Bihar.jpg"
import trip2 from "../assets/gujrat.jpg"
import trip3 from "../assets/odisha.jpg"
import bg2 from "../assets/travel5.jpg"
import TitleHeading from "../component/TitleHeading";

function Home() {
    return (
        <>
            <Navbar />
            <Hero cName="hero"
                title="We make vacations magical"
                heroImg={bg2}
                text="Travel further. Travel longer. Travel deeper"
            />
            <Destination />
            <Trip
                h1="Recent Trips"
                p="One’s destination is never a place, but a new way of seeing things."
                image1={trip1}
                heading1="Mahabodhi Temple - Bihar"
                para1="Located in the ancient city of Bodh Gaya in Bihar, Mahabodhi Temple literally means the ‘Great Awakening Temple’. It is the sole-surviving shrine out of the 84,000 shrines erected by King Ashoka The Great."
                image2={trip2}
                heading2="Golden Temple - Punjab"
                para2="Sri Harmandir Sahib, also known as Darbar Sahib or Golden temple is the most pious site of pilgrimage in Amritsar, Punjab for people who follow Sikhism. The temple is built on the values of universal brotherhood and equality."
                image3={trip3}
                heading3="Sun Temple - Odisha"
                para3="The Sun temple is situated in the small town of Konark situated in the Puri district of Odisha. This marvel of architecture is dedicated to Indian God of Sun, Surya. The temple has been built in the shape of his chariot which is drawn by seven horses."
            />
            <TitleHeading
                h1="Our Client's Review"
                p="One’s destination is never a place, but a new way of seeing things."
            />
            <Review />
            <Footer />
        </>
    );
}

export default Home; 