import React, { useState } from 'react';
import CubeImageSlider from '../constants/CubeSlider';

const Company = () => {
    const images = [
        "assets/img1.png",
        "assets/img2.png",
        "assets/img3.png",
        "assets/img4.png",
        "assets/img5.png"
    ];

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className='px-4'>
                <h1 className='text-5xl font-serif font-semibold'>Company</h1>
                <h2 className='text-xl mt-3'>Your trusted partner.</h2>
                <p className='text-justify font-serif text-[18px] mt-4'>
                    Branch Karma International is a group of brands committed to excellence, innovation, and sustainable growth. We currently are primarily serving India and the United States of America. Our diverse portfolio encompasses a wide range of industries. The sectors we proudly serve are technology, finance, construction, consulting, education, and consumer goods. We aim to be a key player in driving economic advancement and technological innovation worldwide.
                </p>
                <p className={expanded ? 'text-justify text-[18px] font-serif' : 'line-clamp-3 text-[18px]'}>
                    At Branch Karma, we believe in the strength of collaboration and diversity. Our team of dedicated professionals brings together a wealth of experience, expertise, and cultural perspectives, enabling us to tackle complex challenges and deliver cutting-edge solutions. Our commitment to innovation is at the heart of everything we do, as we continuously invest in research and development to stay at the forefront of industry trends and emerging technologies.
                </p>
                <button className="text-[#81D8D0]" onClick={toggleExpanded}>
                    {expanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
            <div className='mt-20'>
                <CubeImageSlider images={images} />
            </div>
        </div>
    );
};

export default Company;
