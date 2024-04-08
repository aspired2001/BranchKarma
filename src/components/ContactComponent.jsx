import React from 'react';

const ContactCards = () => {
    return (
        <div>
            <h1 className="text-white text-3xl font-serif font-semibold text-center">Contacts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ml-20 max-w-7xl">
                <div className="bg-white rounded-xl overflow-hidden w-[300px] h-[340px] hover:bg-blue-500 hover:text-white drop-shadow-md">
                    <div className="p-6 space-y-2  ">
                        <h2 className="text-black text-xl font-semibold">India: Global Headquarters</h2>
                        <p className="text-gray-500">Adani Corporate House</p>
                        <p className="text-gray-500">Shantigram, Near Vaishnodevi Circle, S G Highway,</p>
                        <p className="text-gray-500">Ahmedabad-382421, Gujarat, India</p>
                        <p className="text-gray-500">Tel: +91-79-26565555</p>
                        <p className="text-gray-500">www.adani.com</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] h-[340px] hover:bg-blue-500 hover:text-white drop-shadow-md">
                    <div className="p-6 space-y-2">
                        <h2 className="text-black text-xl font-semibold">India: Global Headquarters</h2>
                        <p className="text-gray-500">Adani Corporate House</p>
                        <p className="text-gray-500">Shantigram, Near Vaishnodevi Circle, S G Highway,</p>
                        <p className="text-gray-500">Ahmedabad-382421, Gujarat, India</p>
                        <p className="text-gray-500">Tel: +91-79-26565555</p>
                        <p className="text-gray-500">www.adani.com</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] h-[340px] hover:bg-blue-500 hover:text-white drop-shadow-md">
                    <div className="p-6 space-y-2">
                        <h2 className="text-black text-xl font-semibold">India: Global Headquarters</h2>
                        <p className="text-gray-500">Adani Corporate House</p>
                        <p className="text-gray-500">Shantigram, Near Vaishnodevi Circle, S G Highway,</p>
                        <p className="text-gray-500">Ahmedabad-382421, Gujarat, India</p>
                        <p className="text-gray-500">Tel: +91-79-26565555</p>
                        <p className="text-gray-500">www.adani.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCards;
