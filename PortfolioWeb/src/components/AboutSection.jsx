import { motion } from "framer-motion";

function AboutSection() {
  const handleScroll = () => {
    document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative flex h-full flex-col overflow-hidden justify-center  items-center bg-gray-950 text-white px-6 sm:px-8 py-24"
    >
      {/* === Background Glow === */}
      <div className="absolute top-[5%] right-[-20%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full border border-white/20 shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse"></div>

      <div className="absolute bottom-[-20%] left-[-30%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full border border-white/20 shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse"></div>

      {/* === Profile Picture === */}
      <motion.img
        src="/PhilipImg.jpg"
        alt="Philip Housden"
        initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          w-28 h-28 
          sm:w-36 sm:h-36 
          md:w-38 md:h-38 
          rounded-full object-cover shadow-[0_0_40px_rgba(255,255,255,0.25)]
          mb-6 md:mb-5
          md:mt-15
        "
      />

      {/* === Title === */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-2xl font-semibold mb-8 md:mb-2 tracking-wide"
      >
        About Me
      </motion.h2>

      {/* === Content Wrapper === */}
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-center text-center lg:text-left">

        {/* === About Text === */}
        <div className="w-full lg:w-2/3 space-y-4 mx-auto">
          {[
            "Hi! I’m Philip Housden, a 4th-year Software Engineering student at Chiang Mai University. I’m passionate about software development, especially designing and building web applications.",
            "I enjoy designing and developing modern, responsive websites that combine clean design with solid functionality. I’m constantly learning new tools and frameworks to improve both user experience and development efficiency.",
            "Currently, I’m working on freelance projects to gain hands-on experience and collaborate with clients who want to bring their ideas to life. My goal is to create software that’s not only beautiful but also meaningful and impactful.",
            <a key="github" href="https://github.com/PhilipHousdens" className="underline text-blue-400">Visit my GitHub</a>
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.25 + 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-base text-gray-300 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>

      {/* === Scroll To Skills Button === */}
      <button
        onClick={handleScroll}
        className="mt-8 flex flex-col items-center group hover:cursor-pointer"
      >
        <span className="text-base sm:text-lg mb-2">Skills</span>

        <div className="w-20 sm:w-24 h-[2px] bg-white/40 relative overflow-hidden mb-2">
          <div className="absolute inset-0 bg-white animate-glow-line"></div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

    </section>
  );
}

export default AboutSection;
