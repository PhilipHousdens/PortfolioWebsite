function HeroSection() {
  const handleScroll = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden text-white">
      {/* === Glowing Circles === */}
      <div className="absolute top-[10%] right-[-2%] w-[400px] h-[400px] rounded-full border-2 border-white  shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full border-2 border-white shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse"></div>

      {/* === Text === */}
      <div className="w-[50%] mx-auto pl-10">
        <h1 className="text-3xl font-light mb-6">Welcome to my portfolio website.<br />Here is where I store all my work</h1>
        <p className="text-[6rem] font-light tracking-wide">PHILIP HOUSDEN</p>
      </div>
      

      {/* === About Me Button === */}
      <button
        onClick={handleScroll}
        className="mt-24 flex flex-col items-center group focus:outline-none hover:cursor-pointer"
      >
        <span className="text-lg mb-2">About me</span>
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
