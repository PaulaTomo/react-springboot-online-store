import "../../Styles/home.css";
import {Image} from "react-bootstrap";
import Banner from "../../Images/Banner.webp"
import BannerTwo from "../../Images/BannerTwo.webp"
import Banner3 from "../../Images/Banner3.webp"
import NewCollectionCarousel from "./NewCollectionCarousel";
import Title from "../../Components/Title";
import React from "react";
import SummerCarousel from "./SummerCarousel";
import DiscountCarousel from "./DiscountCarousel";
import FormPromo from "../../Components/FormPromo";

function Home() {
    return (
        <>
            <div className="container m-0">
                <div className="row  m-0">
                    <div className="col row ">
                        <Image className="img-home" src={Banner} alt={"Banner"}/>
                    </div>
                    <div className="col row">
                        <Image className="img-home" src={BannerTwo} alt={"Banner"}/>
                    </div>
                    <div className="col row ">
                        <Image className="img-home" src={Banner3} alt={"Banner"}/>
                    </div>
                </div>
            </div>
            <Title title={<h1>New collection</h1>}/>
            <NewCollectionCarousel/>
            <Title title={<h1>Summer collection</h1>}/>
            <SummerCarousel/>

            <Title title={<h1>Discount%</h1>}/>
            <DiscountCarousel/>
            <FormPromo/>
        </>

    );
}

export default Home;