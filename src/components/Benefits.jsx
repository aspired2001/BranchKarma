import React from 'react';
import "../Stylesheets/Benefits.css"

const Benefits = () => {
    return (
        <div className="container bg-black mx-auto w-full h-full font-customFont">
            <h1 className='text-center text-3xl font-customFont font-semibold'>Benefits</h1>
            <div className="relative wrap overflow-hidden p-10 h-full mt-8">
                <div className="border-2-2 absolute border-opacity-20 h-full border" style={{ left: '50%' }}></div>

                {/* Right timeline */}
                <div className="mb-8 flex justify-between items-center w-full relative">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 relative flex items-center order-1 bg-gray-800 shadow-xl w-auto h-auto rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-24 bg-white h-[1px] w-[99px] bottom-line flip-horizontal"></div>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Unlimited Growth</h3>
                        <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">We pay for any learning material such as books, courses, and extended education.
                        </p>
                    </div>
                </div>

                {/* Left timeline */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full relative">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 relative flex items-center order-1 bg-gray-800 shadow-xl w-auto h-auto rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-24 bg-white h-[1px] w-[99px] bottom-line "></div>
                    </div>
                    <div className="order-1 bg-[#81D8D0] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">Virtual network</h3>
                        <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100"> Work and connect globally. You can work from anywhere including your home or at one of our global offices.
                        </p>
                    </div>
                </div>

                {/* Right timeline */}
                <div className="mb-8 flex justify-between items-center w-full relative">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 relative flex items-center order-1 bg-gray-800 shadow-xl w-auto h-auto rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-24 bg-white h-[1px] w-[99px] bottom-line flip-horizontal"></div>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">24 hours flexibility</h3>
                        <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">Our 24/7 operations in multiple time zones allow you to have your preferred schedule. </p>
                    </div>
                </div>

                {/* Left timeline */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full relative">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 relative flex items-center order-1 bg-gray-800 shadow-xl w-auto h-auto rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-24 bg-white h-[1px] w-[99px] bottom-line"></div>
                    </div>
                    <div className="order-1 bg-[#81D8D0] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">Internal Promotions</h3>
                        <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100"> Existing team members get priorities for new projects and growth opportunities.
                        </p>
                    </div>
                </div>

                {/* Right timeline */}
                <div className="mb-8 flex justify-between items-center w-full relative">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 relative flex items-center order-1 bg-gray-800 shadow-xl w-auto h-auto rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-24 bg-white h-[1px] w-[99px] bottom-line flip-horizontal"></div>
                    </div>
                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Benefit</h3>
                        <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">Insurance, stock options, and retirement planning. Making sure you are covered with wellness that extends beyond.
                        </p>
                    </div>
                </div>

                {/* Left timeline */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full relative">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 relative flex items-center order-1 bg-gray-800 shadow-xl w-auto h-auto rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-24 bg-white h-[1px] w-[99px] bottom-line"></div>
                    </div>

                    <div className="order-1 bg-[#81D8D0] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">Culture</h3>
                        <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">We have active team building activities to integrate trust and leadership.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Benefits;
