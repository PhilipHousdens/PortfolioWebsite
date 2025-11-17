import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

function HeroSection() {
  const handleScroll = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden text-white">
      {/* === Glowing Circles === */}
      <div className="absolute top-[10%] right-[-2%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]  rounded-full border-2 border-white  shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse animate-float"></div>
      <div className="absolute bottom-[-5%] left-[-10%] lg:bottom-[-15%] lg:left-[-10%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-white shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse animate-float"></div>

      {/* === Text === */}
      <div className="w-full lg:w-[50%] mx-auto px-10 lg:pl-10">
        <span className="text-white drop-shadow-[0_0_10px_rgba(96,165,250,0.7)] text-xl lg:text-2xl instrument-serif-regular mb-2 block">
          <Typewriter
            words={['Welcome to my portfolio website.', 'Explore my projects and skills.', 'Let\'s build something great together!']}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> 
        </span>
        {/* Glowing name reveal */}
        <motion.p
          initial={{ filter: "blur(15px)", opacity: 0, scale: 0.95 }}
          animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 1 }}
          className="text-3xl md:text-[78px] lg:text-[6rem] font-light tracking-wide montserrat-uniquifier drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
        PHILIP HOUSDEN
        </motion.p>
      </div>
      

      {/* === About Me Button === */}
      <button
        onClick={handleScroll}
        className="mt-24 flex flex-col items-center group focus:outline-none hover:cursor-pointer"
      >
        <span className="text-lg mb-2 montserrat-100">About me</span>
        {/* Glowing line */}
        <div className="w-24 h-[2px] bg-white/40 relative overflow-hidden mb-2">
          <div className="absolute inset-0 bg-white animate-glow-line"></div>
        </div>
        {/* Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export default HeroSection;
