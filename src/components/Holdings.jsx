

const Holdings = () => {
    // Array of random company names
    const companyNames = [
        'Company A',
        'Company B',
        'Company C',
        'Company D',
        'Company E',
        'Company F',
        'Company G',
        'Company H',
        'Company I'
    ];

    return (
        <div className="mt-32">
            <h1 className="text-white text-3xl font-customFont ml-36 font-semibold">Holdings</h1>
        
        <div className="flex flex-wrap justify-center p-4 mt-16">
            
            {companyNames.map((company, index) => (
                <div
                    key={index}
                    className="card w-72 h-[160px] md:w-1/4 bg-gray-400 hover:bg-gray-900 transition-colors duration-300 rounded-lg shadow-md m-4 flex justify-center items-center text-white text-center text-[18px] font-bold "
                >
                    {company}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Holdings;
