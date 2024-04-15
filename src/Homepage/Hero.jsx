import { useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import './Hero.css'

function Hero() {

    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const imgRef = useRef(null);
    const LinkRef = useRef(null);


    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            h1Ref.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.5 }
        ).fromTo(
            h2Ref.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.7 }
        ).fromTo(
            imgRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.7 }
        ).fromTo(
            LinkRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.6 }
        );

        // Play the timeline
        tl.play();
    }, []);


    const [words, setWords] = useState(['Build', 'Out', 'Karma', 'Beyond']);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentLetterIndex((prevIndex) => {
                if (prevIndex < words[currentWordIndex].length - 1) {
                    return prevIndex + 1;
                } else {
                    setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
                    return 0;
                }
            });
        }, 270); // Change interval duration as needed

        return () => clearInterval(intervalId);
    }, [words, currentWordIndex]);
    return (
        <div
            
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[75px] h-[450px] w-full px-4"
        >
            <div className="flex flex-col justify-center translate-x-4 mt-16"  >
                <h1  className="text-white mb-4 text-5xl text-wrap font-customFont font-semibold"
                ref={h1Ref}>
                    Connecting Worlds,
                </h1>
                <h1 className="text-white mb-4 text-5xl text-wrap font-customFont font-semibold" 
                ref={h2Ref}>
                    Creating Futures
                </h1>

                <div
                    className="flex flex-row md:flex-row mt-5 gap-2"
                    ref={LinkRef}
                >
                    <Link to={'/contact'} className="text-white text-[20px] font-semibold text-center mb-2 md:mr-4 h-12 w-[160px] border rounded-[50px] pt-2 hover:bg-white hover:text-black
                    " >
                        Contact Us
                    </Link>
                    <Link to={'/company'} className="text-white text-[20px] font-semibold text-center mb-2 md:mr-4 h-12 w-[160px] border rounded-[50px] pt-2 hover:bg-white hover:text-black mr-4">
                        Learn More
                    </Link>
                </div>
                <div className="mt-20 text-white">
                    <h1 className="text-3xl">Branch
                        <span className="animated-word text-[#81D8D0] font-semibold">
                            {words[currentWordIndex].substring(0, currentLetterIndex + 1)}
                        </span>
                    </h1>
                </div>
            </div>
            <div className="hidden md:block" ref={imgRef}>
                <img
                    src="assets/old.png"
                    alt="Hero Image"
                    className="w-[790px] h-[470px] mr-6"
                />
            </div>
        </div>
    );
}

export default Hero;
