

function Industries() {
  return (
 <div className="flex flex-wrap justify-center mt-[200px]">
      {/* First Column */}
      <div className="bubble bg-white shadow-inner rounded-full p-8 m-4 text-center group hover:bg-[#81D8D0] cursor-pointer">
        <span className="text-lg font-bold">Construction</span>
      </div>
          <div className="bubble bg-white hover:bg-[#81D8D0] cursor-pointer  shadow-inner rounded-full p-8 m-4 text-center">
        <span className="text-lg font-bold">Consulting</span>
      </div>

      {/* Second Column */}
          <div className="bubble bg-white hover:bg-[#81D8D0] cursor-pointer rounded-full p-8 m-4 text-center">
        <span className="text-lg font-bold">Asset Management</span>
      </div>
          <div className="bubble bg-white hover:bg-[#81D8D0] cursor-pointer rounded-full p-8 m-4 text-center">
        <span className="text-lg font-bold">Angel Investing</span>
      </div>
          <div className="bubble bg-white hover:bg-[#81D8D0] cursor-pointer shadow-inner rounded-full p-8 m-4 text-center">
        <span className="text-lg font-bold">Agriculture</span>
      </div>

      {/* Third Column */}
          <div className="bubble bg-white hover:bg-[#81D8D0] cursor-pointer shadow-inner rounded-full p-8 m-4 text-center">
        <span className="text-lg font-bold">Consumer Goods</span>
      </div>
      <div className="bubble bg-white hover:bg-[#81D8D0] cursor-pointer rounded-full p-8 m-4 text-center">
        <span className="text-lg font-bold">Technology</span>
      </div>
    </div>
  )
}

export default Industries