// CubeSlider.js

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CubeSlider.css';

const CubeSlider = ({ images, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [images, interval]);

    return (
        <div className="cube-slider">
            <div className="cube">
                <div className="cube-inner">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`cube-face face-${index}`}
                            style={{
                                backgroundImage: `url(${image})`,
                                transform: `rotateY(${index * 90}deg) translateZ(150px)`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

CubeSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
};

CubeSlider.defaultProps = {
    interval: 3000,
};

export default CubeSlider;
