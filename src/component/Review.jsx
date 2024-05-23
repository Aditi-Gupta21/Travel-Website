import React from 'react'
import Cartoon1 from "../assets/client1.webp"
import Cartoon2 from "../assets/client2.webp"
import Cartoon6 from "../assets/client3.jpg"
import "./Review.css"

const Review = () => {
    return (
        <>
            <section class="gradient-custom">
                <div class="container py-3">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-10 carBox">
                            <div id="carouselExampleIndicators" class="carousel slide carSlider">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={Cartoon1} class="d-block w-60%" alt="..." />
                                        <h4 class="he">Maria Smantha</h4>
                                        <p class="pa">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta
                                            distinctio, enim error eum iste libero modi nam natus
                                            perferendis possimus quasi sint sit tempora voluptatem. Est,
                                            exercitationem id ipsa ipsum laboriosam perferendis.
                                        </p>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={Cartoon2} class="d-block w-60%" alt="..." />
                                        <h4 class="he">Andrew Garfield</h4>
                                        <p class="pa">Lorem ipsum dolor sit amet, consectetur adipisicing elit.enim error eum iste libero modi nam natusperferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis.
                                        </p>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={Cartoon6} class="d-block w-60%" alt="..." />
                                        <h4 class="he">Kris Hammper</h4>
                                        <p class="pa">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aaliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus.
                                        </p>
                                    </div>
                                </div>
                                <button class="carousel-control-prev arrow" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next arrow" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review
