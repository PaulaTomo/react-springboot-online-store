import CarouselComponent from "../../Components/CarouselComponent";
import summerImg1 from "../../Images/SummerCollection/summer1.jpg"
import summerImg2 from "../../Images/SummerCollection/summer5.webp"
import summerImg3 from "../../Images/SummerCollection/summer3.jpg"
import summerImg4 from "../../Images/SummerCollection/summer4.webp"
import summerImg5 from "../../Images/SummerCollection/summer2.jpg"
import summerImg6 from "../../Images/SummerCollection/summer6c.jpg"
import summerImg7 from "../../Images/SummerCollection/summer7.webp"


import React from "react";
import {Link} from "react-router-dom";

function SummerCarousel() {
    return (
        <div>
            <CarouselComponent
                image1={summerImg1}
                image2={summerImg2}
                image3={summerImg3}
                image4={summerImg4}
                image5={summerImg5}
                image6={summerImg6}
                image7={summerImg7}
            />
            <Link to="summerCollection">
                <button className="btn btn-carousel">View More</button>
            </Link>
        </div>


    )
}

export default SummerCarousel;