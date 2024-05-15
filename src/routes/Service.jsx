import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Trip from '../component/Trip';

// Image import---------------
import trip1 from "../assets/1.jpg"
import trip2 from "../assets/8.jpg"
import trip3 from "../assets/7.jpg"

function Service() {
    return (
        <>
            <Navbar />
            <Hero cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1675251978349-cd73ece6ab72?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Services"
            />
            <Trip image1={trip1}
                heading1="Trip to Odisha"
                para1="On the beach in Odisha from sunrise to sunset feel like The Little Prince sitting here, watching the sunset from the beach on the Bay of Bengal in Odisha; and tomorrow morning I will be able to see the sunrise from the same beach. It’s a strange twist of geography that you can see the sun rise and set on the same beach in Odisha."
                image2={trip2}
                heading2="Trip to Banaras"
                para2="On the beach in Odisha from sunrise to sunset feel like The Little Prince sitting here, watching the sunset from the beach on the Bay of Bengal in Odisha; and tomorrow morning I will be able to see the sunrise from the same beach. It’s a strange twist of geography that you can see the sun rise and set on the same beach in Odisha."
                image3={trip3}
                heading3="Trip to Rajasthan"
                para3="On the beach in Odisha from sunrise to sunset feel like The Little Prince sitting here, watching the sunset from the beach on the Bay of Bengal in Odisha; and tomorrow morning I will be able to see the sunrise from the same beach. It’s a strange twist of geography that you can see the sun rise and set on the same beach in Odisha."
            />
            <Footer />
        </>
    )
}

export default Service;