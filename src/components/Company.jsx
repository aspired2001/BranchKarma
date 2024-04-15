import { useRef, useEffect } from 'react';
import CubeSlider from '../constants/CubeSlider';
import { gsap } from 'gsap';

const Company = () => {
    const images = [
        "assets/img1.png",
        "assets/img2.png",
        "assets/img3.png",
        "assets/img4.png",
        "assets/img5.png"
    ];


    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const divRef = useRef(null);
    const cube=useRef(null);

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
            p1Ref.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.7 }
        ).fromTo(
            p2Ref.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.8 }
        ).fromTo(
            divRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.8 }
        );

        // Play the timeline
        tl.play();
    }, []);

    return (
        <>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4 mt-36">
            <div className='px-12'>
                <h1 className='text-3xl font-customFont   font-semibold ' ref={h1Ref}>
                    Empowering Global Progress, Together
                </h1>
                <h2 className='font-customFont  text-2xl mt-8 italic' ref={h2Ref}>
                    Your trusted partner.
                </h2>
                <p className='text-justify font-customFont text-[20px] mt-12 leading-relaxed tracking-wide' ref={p1Ref}>
                    <span className='text-md font-bold'>BranchKarma International</span> is a group of brands committed to excellence, innovation, and sustainable growth. We currently primarily serve India and the United States of America. Our diverse portfolio encompasses a wide range of industries including technology, finance, construction, consulting, education, and consumer goods. We aim to be a key player in driving economic advancement and technological innovation worldwide.
                </p>
                <p className={'text-justify text-[20px] font-customFont leading-relaxed tracking-wide mt-6'} ref={p2Ref}>
                    At Branch Karma, we believe in the strength of collaboration and diversity. Our team of dedicated professionals brings together a wealth of experience, expertise, and cultural perspectives, enabling us to tackle complex challenges and deliver cutting-edge solutions. Our commitment to innovation is at the heart of everything we do, as we continuously invest in research and development to stay at the forefront of industry trends and emerging technologies.
                </p>
               
            </div>
            <div ref={cube} className='mt-[80px] ml-[80px]  px-[50px] translate-y-36'>
                <CubeSlider images={images} interval={5000} />
            </div>
           
        </div>

            <div ref={divRef} className='font-customFont mx-12 text-white'>
                <p className='text-justify text-[20px] font-customFont leading-relaxed tracking-wide mt-6'>
                    Sustainability and social responsibility are fundamental to our business philosophy. We are dedicated to creating a positive impact on society and the environment, implementing sustainable practices across our operations and supporting community initiatives that promote education, health, and well-being.

                </p>
                <p className='text-justify text-[20px] font-customFont leading-relaxed tracking-wide mt-6'>
                    Our teamwork is built on a foundation of strong values, including integrity, excellence, and respect. We remain committed to driving growth, delivering value to our stakeholders, and shaping a better future for generations to come. We will always continue to expand our horizons, innovate for a sustainable future, and make a lasting impact on the world.

                </p>
            </div>

        </>
    );
};

export default Company;
