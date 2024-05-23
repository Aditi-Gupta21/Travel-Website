import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";
import Team from '../component/Team';

// Image import---------------
import bg1 from "../assets/travel4.jpg"
import smita from "../assets/smita.jpg"
import aditi1 from "../assets/aditi1.jpg"
import saloni1 from "../assets/saloni2.jpg"
import shitu from "../assets/shitu.jpg"
import ankita1 from "../assets/ankita2.jpg"
import janvi from "../assets/janvi.jpg"
import TitleHeading from "../component/TitleHeading";


function About() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg={bg1}
                title="About Us"
            />
            <TitleHeading
                h1="Our Team Members"
                p="Meet the mega-talented crew on a mission to help people to travel world with full knownledge. They make it possible to build websites that lead the industry and convert more customers and they’re great to work with Passionate developers who bring the best for You."
            />
            <Team image1={smita}
                heading1="Smita Sharma"
                para1="Frontend Developer : UX and UI Designer and Developer.
                Expertise in HTML , CSS  and ReactJs."
                image2={aditi1}
                heading2="Aditi Gupta"
                para2="Frontend Developer : Proficient in HTML , CSS , JavaScript and ReactJs with version control knowledge."
                image3={saloni1}
                heading3="Saloni Mani Tripthi"
                para3="Backend Developer with strong command on Python and Django.
                Database developer and Management expert."
            />
            <Team image1={shitu}
                heading1="Shitu Mishra"
                para1="Backend Developer : Vast knowlege and experience in Database. Prowess in MySQL database. "
                image2={janvi}
                heading2="Janhvi Singh"
                para2="LOGO Designer proficiency with Photoshop, Flash, Adobe Illustrator a strong background in design."
                image3={ankita1}
                heading3="Ankita Raj"
                para3="Document code and processes: support a team's administrative tasks ensure that the knowledge is shared across the team."
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;