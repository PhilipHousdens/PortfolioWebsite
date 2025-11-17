import { motion } from "framer-motion";

function AboutSection() {
  const handleScroll = () => {
    document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="about"
      className="relative flex h-full flex-col overflow-hidden justify-center items-center bg-gray-950 text-white px-8 py-24 md:py-30"
    >
      {/* === Background Glow === */}
      <div className="absolute top-[10%] right-[-2%] w-[400px] h-[400px] md:w-[300px] md:h-[300px] rounded-full border-2 border-white  shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] md:w-[300px] md:h-[300px] rounded-full border-2 border-white shadow-[0_0_120px_40px_rgba(255,255,255,0.15)] animate-pulse"></div>
      {/* === Profile Picture === */}
        <motion.img
          src="/PhilipImg.jpg"
          alt="Philip Housden"
          initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-50 h-50 md:w-30 md:h-30 md:mt-10 rounded-full object-cover shadow-[0_0_40px_rgba(255,255,255,0.2)] mb-10 md:mb-5"
        />

      {/* === Title === */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-2xl font-semibold mb-12 md:mb-5 tracking-wide"
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl md:max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">

        {/* === About Text === */}
        <div className="md:w-2/3 space-y-6 md:space-y-3">
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
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.3 + 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>

      <button
            onClick={handleScroll}
            className="mt-5 flex flex-col items-center group focus:outline-none hover:cursor-pointer"
            >
                <span className="text-lg mb-2 montserrat-100">Skills</span>
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
    </section>
  );
}

export default AboutSection;
