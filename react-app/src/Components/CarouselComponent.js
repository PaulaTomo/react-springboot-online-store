import OwlCarousel from "react-owl-carousel";
import React from "react";

function CarouselComponent(props) {
    return (
        <div className='container-fluid m-0 p-0'>
            <OwlCarousel items={5} margin={props.margin} autoplay={props.autoplay}
                         autoplayTimeout={1000}
                         autoplayHoverPause={true}
                         loop={true}>
                <div><img className="img-carousel" src={props.image1} alt="img"/></div>
                <div><img className="img-carousel" src={props.image2} alt="img"/></div>
                <div><img className="img-carousel" src={props.image3} alt="img"/></div>
                <div><img className="img-carousel" src={props.image4} alt="img"/></div>
                <div><img className="img-carousel" src={props.image5} alt="img"/></div>
                <div><img className="img-carousel" src={props.image6} alt="img"/></div>
                <div><img className="img-carousel" src={props.image7} alt="img"/></div>
            </OwlCarousel>

        </div>
    )
}

export default CarouselComponent;
