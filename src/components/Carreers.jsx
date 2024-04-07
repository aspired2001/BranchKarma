import TimelineComponent from "../constants/TimelineComponent"


function Carreers() {
  return (
    <div className="text-white mt-20">
      <h1 className="text-5xl font-bold font-serif text-center">Careers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        <div className="flex items-center flex-col justify-center border-r border-gray-300">
          <span className="italic font-serif text-lg text-center">&quot;Anyone who has never made a mistake has never tried anything new.&quot;</span>
          <img className="max-w-[400px] h-[270px] rounded-lg shadow-lg hover:transition-all hover:-translate-y-2 hover:cursor-pointer my-3" src="assets/img15.png" alt="Join us!" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-lg text-center font-serif">Let&apos;s team up!</span>
          <img className="w-[400px] h-[270px] rounded-lg shadow-lg hover:transition-all hover:-translate-y-2 hover:cursor-pointer my-3 " src="assets/img11.png " alt="Join us!" />
        </div>
      </div>


      <div>
        <h1 className="text-center text-3xl font-serif font-semibold">Our Application Process</h1>
        <TimelineComponent />
      </div>
    </div>

  )
}

export default Carreers