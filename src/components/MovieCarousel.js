import React from 'react'
import { Carousel } from "react-bootstrap";
import 'C:/Users/inxjv/Desktop/Mojave/movieapp/src/App.css'

export default function MovieCarousel() {
    return (
        <div className="componentTwo">
            <Carousel className="carouselSize" contentContainerCustomStyle={{ alignItems: 'center' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ecopunk.info/journals/images/1391812285000-3fd7c507cbdfb1f0-3fe2fcb597cf828c.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="blackBox">
                        <h3>Her</h3>
                        <p>Theodore Twombly, an introvert writer, buys an Artificial Intelligence system to help him write. However, amazed by the AI's ability to learn and adapt, he falls in love with it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.netflix-nederland.nl/wp-content/uploads/2018/03/Eternal-Sunshine-of-the-Spotless-Mind-Netflix-810x456.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="blackBox">
                        <h3>Eternal Sunshine of the Spotless Mind</h3>
                        <p>Joel and Clementine begin a relationship post a train journey together, unaware that they had previously been in a relationship, the memories of which were clinically erased.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://prepareyourselfenglish.files.wordpress.com/2014/03/gattaca1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="blackBox">
                        <h3>Gattaca</h3>
                        <p>Vincent, a genetically inferior man who always aspired to travel in space, assumes the identity of a paraplegic in order to accomplish his goal.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hype.my/wp-content/uploads/2018/01/Arrival.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption className="blackBox">
                        <h3>Arrival</h3>
                        <p>Louise Banks, a linguistics expert, along with her team, must interpret the language of aliens who've come to earth in a mysterious spaceship.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="intro">
                <h3 className="redText">Welcome to Baohaus Movies!</h3>
                <p>Hover over any movie poster to see more details about it.</p>
            </div>
        </div>
    )
}
