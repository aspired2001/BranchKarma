
const Philanthrophy = () => {
    // Array of random company names
    const companyNames = [
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];

    return (
        <div className="mt-36">
            
            <h1 className="text-white text-3xl font-customFont ml-36 font-semibold">Philanthrophy</h1>

        <div className="flex flex-wrap justify-center p-4 mt-6">
            {companyNames.map((company, index) => (
                <div
                    key={index}
                    className="card w-72 h-[160px] md:w-1/4 bg-gray-500 hover:bg-[#81D8D0] transition-colors duration-300 rounded-lg shadow-md m-4 flex justify-center items-center text-[18px] text-white text-center font-bold"
                >
                    {company}
                </div>
            ))}
        </div>
        </div>
    );
};


export default Philanthrophy