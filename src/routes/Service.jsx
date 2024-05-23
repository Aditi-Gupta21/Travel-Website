import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Trip from '../component/Trip';

// Image import---------------
import trip1 from "../assets/Bihar.jpg"
import trip2 from "../assets/gujrat.jpg"
import trip3 from "../assets/odisha.jpg"
import hotel1 from "../assets/hotel1.jpg"
import hotels2 from "../assets/hotels2.jpg"
import hotel3 from "../assets/hotel3.jpg"
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.webp"
import bg3 from "../assets/travel1.webp"
import Services from "../component/Services";

function Service() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg={bg3}
                title="Services"
            />
            <Services />
            <Trip
                h1="........Hotels........"
                p="One’s destination is never a place, but a new way of seeing things."
                image1={hotel1}
                heading1="The Oberoi - New Delhi"
                para1="Nestled amidst sprawling greenery, The Oberoi New Delhi offers panoramic views of Delhi's Golf Club and the UNESCO World Heritage site of Humayun's Tomb. The rooms are inspired by the majestic contemporary interpretation of Sir Edwin Lutyens' interiors."
                image2={hotels2}
                heading2="The Taj Mahal Tower Mumbai"
                para2="The iconic Taj Mahal Tower stands majestically facing the Gateway of India and the Arabian Sea, keeping you at the city’s nerve centre of art, culture and glamour. For an extravagant dining feast, the on-site restaurants serve innovative Japanese, Chinese and other international delicacies."
                image3={hotel3}
                heading3="The Westin Gurgaon - New Delhi"
                para3="Powered by the reputed hotel chain, the Marriott, this extravagant 5-star hotel is situated in the heart of the business hub in Gurgaon, ideal for business and leisure travellers. The hotel features well-appointed rooms covered in luxurious furnishings and contemporary decor with world class amenities."
            />
            <Trip
                h1="..........Temples........"
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
            <Trip
                h1=".......Foods........"
                p="One’s destination is never a place, but a new way of seeing things."
                image1={food1}
                heading1="Sweet corn sundal"
                para1="Sweet corn sundal – Sundals are South Indian based dishes made with a variety of legumes and is prepared during Ganesh Chaturthi or Navratri. Though you can even make them on regular days too."
                image2={food2}
                heading2="Crispy Corn dogs"
                para2="Corn dogs are essentially cornbread batter + hot dogs. This homemade Corn Dog Recipe has the best honey batter. They are fried to perfection with a crisp exterior and a soft cornbread inside that keeps the sausage juicy."
                image3={food3}
                heading3="Honey Chilli potato"
                para3="Chilli potato recipe with step by step pics. This is a deliciously addictive spicy chilli potato recipe. These crispy fried potatoes in a spicy, sour and slightly sweet sauce are so good and you will definitely ask for more."
            />
            <Footer />
        </>
    )
}

export default Service;