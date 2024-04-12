import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination'; // Include pagination CSS if needed

const CubeCarousel = ({ images }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && images.length > 0) {
            const swiper = new Swiper(swiperRef.current, {
                effect: 'cube',
                grabCursor: true,
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loop: true,
            });

            return () => {
                swiper.destroy();
            };
        }
    }, [images]);

    return (
        <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
                {images.map((image, index) => (
                    <div className="swiper-slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

CubeCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CubeCarousel;
