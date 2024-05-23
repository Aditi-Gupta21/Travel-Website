import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";
import bg4 from "../assets/travel3.jpg"

function Contact() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg={bg4}
                title="Contact Us"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;