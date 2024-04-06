import React, { useState } from 'react';
import './CubeSlider.css';

const CubeSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="cube-slider">
            <div className="cube" style={{ transform: `rotateY(${currentImageIndex * -90}deg)` }}>
                {images.map((image, index) => (
                    <div key={index} className="side" style={{ backgroundImage: `url(${image})` }}></div>
                ))}
            </div>
            <button className="prev " onClick={prevImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
    );
};

export default CubeSlider;
