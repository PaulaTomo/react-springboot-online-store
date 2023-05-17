import CarouselComponent from "../../Components/CarouselComponent";
import img1 from "../../Images/Discount/discount1.jpg"
import img2 from "../../Images/Discount/discount2_.jpg"
import img3 from "../../Images/Discount/discount3.jpg"
import img4 from "../../Images/Discount/discount4.jpg"
import img5 from "../../Images/Discount/discount5.jpg"
import img6 from "../../Images/Discount/discount6.jpg"
import img7 from "../../Images/Discount/discount7.jpg"


import {Link} from "react-router-dom";
import React from "react";

function DiscountCarousel() {
    return (
        <div>
            <CarouselComponent
                margin={10}
                image1={img1}
                image2={img2}
                image3={img3}
                image4={img4}
                image5={img5}
                image6={img6}
                image7={img7}


            />
            <Link to="discount">
                <button className="btn btn-carousel">View More</button>
            </Link>
        </div>
    )
}

export default DiscountCarousel;