import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

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



    return (
        <div
            
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[68px] h-[450px] w-full"
        >
            <div className="flex flex-col justify-center translate-x-4"  >
                <h1  className="text-white mb-4 text-5xl text-wrap font-customFont font-semibold"
                ref={h1Ref}>
                    Connecting Worlds,
                </h1>
                <h1 className="text-white mb-4 text-5xl text-wrap font-customFont font-semibold" 
                ref={h2Ref}>
                    Creating Futures
                </h1>

                <div
                    className="flex flex-col md:flex-row mt-5 gap-2"
                    ref={LinkRef}
                >
                    <Link className="text-white text-[25px] font-semibold text-center mb-2 md:mr-4 h-16 w-[160px] border rounded-[50px] pt-2 hover:bg-white hover:text-black
                    " >
                        Contact Us
                    </Link>
                    <Link className="text-white text-[25px] font-semibold text-center mb-2 md:mr-4 h-16 w-[160px] border rounded-[50px] pt-2 hover:bg-white hover:text-black">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="hidden md:block" ref={imgRef}>
                <img
                    src="assets/Hero.png"
                    alt="Hero Image"
                    className="w-full h-auto mr-6"
                />
            </div>
        </div>
    );
}

export default Hero;
