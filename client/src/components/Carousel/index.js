import React from 'react'
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import group from '../../assets/images/group.jpg'
import pitcher from '../../assets/images/pitcher.PNG'
import batter from '../../assets/images/batter.PNG'
import pitch from '../../assets/images/pitch.PNG'
import tag from '../../assets/images/tag.PNG'
import pitch2 from '../../assets/images/pitch2.PNG'
import team from '../../assets/images/team.jpg'
import team2 from '../../assets/images/team2.jpg'
import legends from '../../assets/images/legends.jpg'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows: true,
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
                    <img className="" src={team} alt="team" height="300px" />
                </div>
                <div>
                    <img className="" src={team2} alt="team2" height="300px" />
                </div>
                <div>
                    <img className="" src={group} alt="group" height="300px" />
                </div>
                <div>
                    <img className="" src={pitch} alt="pitch" height="300px" />
                </div>
                <div>
                    <img className="" src={pitcher} alt="pitcher" height="300px" />
                </div>
                <div>
                    <img className="" src={batter} alt="batter" height="300px" />
                </div>
                <div>
                    <img className="" src={tag} alt="tag" height="300px" />
                </div>
                <div>
                    <img className="" src={pitch2} alt="pitch2" height="300px" />
                </div>
                <div>
                    <img className="" src={legends} alt="legends" height="300px" />
                </div>
            </Slider>
        </div>

    );
}