

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
        <div className="flex flex-wrap justify-center p-4 mt-48">
            {companyNames.map((company, index) => (
                <div
                    key={index}
                    className="card w-72 h-[160px] md:w-1/4 bg-gray-400 hover:bg-gray-900 transition-colors duration-300 rounded-lg shadow-md m-4 flex justify-center items-center text-white font-bold"
                >
                    {company}
                </div>
            ))}
        </div>
    );
};

export default Holdings;
