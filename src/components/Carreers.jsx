import TimelineComponent from "../constants/TimelineComponent";
import {Link}  from 'react-router-dom';
import Benefits from "./Benefits";



function Carreers() {
  return (
    <div className="text-white mt-28">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        <div className="flex items-center flex-col justify-center border-r border-gray-300">
          <span className="italic font-serif text-lg text-center">&quot;Anyone who has never made a mistake has never tried anything new.&quot;</span>
          <img className="max-w-[400px] h-[270px] rounded-[10px] shadow-lg hover:transition-all hover:-translate-y-2 hover:cursor-pointer my-3 px-2" src="assets/img15.png" alt="Join us!" />
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <span className="text-lg text-center font-serif">Let&apos;s team up!</span>
          <div className="relative w-[400px] h-[270px] rounded-lg shadow-lg overflow-hidden my-3">
            <img className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50" src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D" alt="Join us!" />
            <Link to={'/contact'} className="absolute inset-0 flex justify-center items-center text-white text-2xl font-semibold bg-[#81D8D0] bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              Join Now
            </Link>
          </div>
        </div>
      </div>


      <div className="mt-24">
        <h1 className="text-center text-3xl font-serif font-semibold">Our Application Process</h1>
        <TimelineComponent />
      </div>

      <div className="px-20 mt-16">
        <h2 className="text-center text-3xl font-serif font-semibold mb-8">Careers at Branch Karma</h2>
        <p className="mt-8 text-lg font-serif text-justify leading-relaxed tracking-wide">
          Join our global team and embark on a journey of growth, innovation, and excellence. At{' '}
          <span className="font-bold ">Branch Karma</span>, we believe that our team is the cornerstone of our success, and we are committed to fostering a dynamic and inclusive work environment where every individual can thrive.
        </p>
        <p className="mt-4 text-lg font-serif text-justify leading-relaxed tracking-wide">
          As a multinational organization operating in multiple countries across diverse industries, including{' '}
          <span className="font-bold italic">technology, healthcare, finance, energy, and manufacturing</span>, we offer a wide range of career opportunities. Whether you&apos;re a seasoned professional or a recent graduate, you&apos;ll find a world of possibilities to explore, from research and development to marketing, management, and beyond.
        </p>
        <p className="mt-4 text-lg font-serif text-justify leading-relaxed tracking-wide">
          We are looking for passionate, talented, and driven individuals who are eager to make a positive impact and contribute to our mission of shaping a better future. In return, we offer competitive compensation packages, comprehensive benefits, and numerous professional development programs designed to help you grow both personally and professionally.
        </p>
        <p className="mt-4 text-lg font-serif text-justify leading-relaxed tracking-wide">
          At Branch Karma, diversity is our strength. We celebrate and respect the unique perspectives and backgrounds of our global workforce and are committed to promoting equality and inclusion in all aspects of our business.
        </p>
        <p className="mt-4 text-lg font-serif text-justify leading-relaxed tracking-wide">
          If you&apos;re ready to join a company that values innovation, sustainability, and social responsibility, we invite you to explore our current openings and discover how you can make a difference with us.
        </p>
      </div>

      <div  className="mt-20">
          <Benefits/>

      </div>

      <div className="mt-20 ">
        <Link className=" w-24  h-12  hover:bg-white hover:text-black border-2 text-2xl p-4 font-customFont ml-[640px] rounded-3xl font-semibold hover ">Let&apos;s team up </Link>
      </div>

    </div>

  )
}

export default Carreers