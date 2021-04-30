import React from 'react'
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import littleleauge from '../../assets/images/little-league.jpg'
import field from '../../assets/images/field.jpg'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                <div>
                    <img className="" src={littleleauge} alt="little league" height="300px" />
                </div>
                <div>
                    <img className="" src={field} alt="field" height="300px" />

                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>

    );
}