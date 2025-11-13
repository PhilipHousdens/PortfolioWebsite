
function AboutSection() {
  const handleScroll = () => {
    document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-full flex flex-col justify-center items-center text-black relative overflow-hidden">
        <div className="absolute top-[10%] right-[-2%] w-[400px] h-[400px] rounded-full border-2 border-black shadow-[0_0_120px_40px_rgba(0,0,0,0.25)] animate-pulse z-0"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full border-2 border-black shadow-[0_0_120px_40px_rgba(0,0,0,0.25)] animate-pulse"></div>
        <div className="flex justify-center gap-5 items-center ">
            <div className="max-w-3xl">
                <h2 className="text-5xl font-bold mb-6 underline montserrat-uniquifier ">About Me</h2>
                <p className="text-lg text-gray-800 leading-relaxed pr-6 instrument-serif-regular">
                Hi! I’m Philip Housden, a 4th-year Software Engineering student at Chiang Mai University.
                I’m passionate about software development, especially frontend web technologies like Vue.js, TailwindCSS, and JavaScript. <br/>
                <br/>
                I enjoy designing and developing modern, responsive websites that combine clean design with solid functionality. I’m constantly learning new tools and frameworks to improve both user experience and development efficiency.<br/>
                <br/>
                Currently, I’m working on freelance projects to gain hands-on experience and collaborate with clients who want to bring their ideas to life. My goal is to create software that’s not only beautiful but also meaningful and impactful.
                </p>
            </div>
            <div className="relative z-20">
                <img src="/PhilipImg.jpg" alt="Philip Housden" className="w-[570px] rounded-2xl shadow-lg"/>
            </div>
        </div>

        <button
          onClick={handleScroll}
          className="mt-24 flex flex-col items-center group focus:outline-none hover:cursor-pointer"
        >
          <span className="text-lg mb-2 montserrat-100">My Skills</span>
          {/* Glowing line */}
          <div className="w-24 h-[2px] bg-black/40 relative overflow-hidden mb-2">
            <div className="absolute inset-0 bg-black animate-glow-line"></div>
          </div>
          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="w-6 h-6 animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
    </section>
  );
}
export default AboutSection;