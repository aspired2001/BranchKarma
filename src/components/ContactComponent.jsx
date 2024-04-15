import React from 'react';
import Form from '../constants/Form';

const ContactCards = () => {
    return (
        <div className='mt-48'>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-16 max-w-7xl">
                <div className="bg-white overflow-hidden w-full md:w-[300px] h-[340px] hover:bg-blue-500 hover:text-white drop-shadow-md">
                    <div className="p-6 space-y-2">
                        <h2 className="text-black text-xl font-semibold">India: Global Headquarters</h2>
                        <p className="text-gray-500">Adani Corporate House</p>
                        <p className="text-gray-500">Shantigram, Near Vaishnodevi Circle, S G Highway,</p>
                        <p className="text-gray-500">Ahmedabad-382421, Gujarat, India</p>
                        <p className="text-gray-500">Tel: +91-79-26565555</p>
                        <p className="text-gray-500">www.adani.com</p>
                    </div>
                </div>
                <div className="bg-white shadow-md overflow-hidden w-full md:w-[300px] h-[340px] hover:bg-blue-500 hover:text-white drop-shadow-md">
                    <div className="p-6 space-y-2">
                        <h2 className="text-black text-xl font-semibold">USA: Headquarters</h2>
                        <p className="text-gray-500">Adani Corporate House</p>
                        <p className="text-gray-500">Shantigram, Near Vaishnodevi Circle, S G Highway,</p>
                        <p className="text-gray-500">Ahmedabad-382421, Gujarat, India</p>
                        <p className="text-gray-500">Tel: +91-79-26565555</p>
                        <p className="text-gray-500">www.adani.com</p>
                    </div>
                </div>
                <div className="bg-white shadow-md overflow-hidden w-full md:w-[300px] h-[340px] hover:bg-blue-500 hover:text-white drop-shadow-md">
                    <div className="p-6 space-y-2">
                        <h2 className="text-black text-xl font-semibold">Mexico: Headquarters</h2>
                        <p className="text-gray-500">Adani Corporate House</p>
                        <p className="text-gray-500">Shantigram, Near Vaishnodevi Circle, S G Highway,</p>
                        <p className="text-gray-500">Ahmedabad-382421, Gujarat, India</p>
                        <p className="text-gray-500">Tel: +91-79-26565555</p>
                        <p className="text-gray-500">www.adani.com</p>
                    </div>
                </div>
            </div>

            <div className='mt-16 px-16'>
                <h1 className='text-white font-customFont text-3xl text-center pb-12'>Contact Us</h1>
                <Form/>
            </div>
        </div>
    );
};

export default ContactCards;
