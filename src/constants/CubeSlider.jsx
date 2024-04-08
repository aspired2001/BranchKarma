import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CubeSlider.css';

const CubeSlider = ({ images, interval }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(nextImage, interval);

        return () => {
            clearInterval(intervalId);
        };
    }); // Re-run effect whenever currentImageIndex or interval changes

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // const prevImage = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    return (
        <div className="cube-slider">
            <div className="cube" style={{ transform: `rotateY(${currentImageIndex * -90}deg)` }}>
                {images.map((image, index) => (
                    <div key={index} className="side" style={{ backgroundImage: `url(${image})` }}></div>
                ))}
            </div>
            {/* <button className="prev" onClick={prevImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button> */}
        </div>
    );
};

CubeSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number
};

CubeSlider.defaultProps = {
    interval: 3000
};

export default CubeSlider;
