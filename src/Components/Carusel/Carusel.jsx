import React, { useState } from 'react'
import Slider from 'react-slick'
import './Carousel.scss'
import bannerOne from '../../assets/img/bannerOne.png'
import bannerTwo from '../../assets/img/bannerTwo.png'
import bannerThree from '../../assets/img/bannerThree.png'

const images = [bannerOne, bannerTwo, bannerThree]

export default function Carousel() {
    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setImageIndex(next),
    }

    return (
        <div className="container__width">
            <div className="container__slider">
                <div className="slider">
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div key={idx} className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                                <img src={img} alt={img} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
