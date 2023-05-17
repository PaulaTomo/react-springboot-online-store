import React from 'react';
import CarouselComponent from "../../Components/CarouselComponent"
import imgOne from "../../Images/NewCollection/newCollection1.webp"
import img2 from "../../Images/NewCollection/newCollection2.webp"
import img4 from "../../Images/NewCollection/newCollection3.webp"
import img3 from "../../Images/NewCollection/newCollection4.webp";
import img5 from "../../Images/NewCollection/newCollection5.webp";
import img6 from "../../Images/NewCollection/newCollection6.webp";
import img7 from "../../Images/NewCollection/newCollection9.webp";
import "../../Styles/carousel.css";
import {Link} from "react-router-dom";

function NewCollectionCarousel(props) {

    return (
        <div>
            <CarouselComponent
                margin={8}
                autoplay={true}
                image1={imgOne}
                image2={img2}
                image3={img3}
                image4={img4}
                image5={img5}
                image6={img6}
                image7={img7}
            />
            <Link to="newCollection">
                <button className="btn btn-carousel">View More</button>
            </Link>
        </div>

    )
}

export default NewCollectionCarousel;