import { motion } from "framer-motion";

function SkillSection() {
    const handleScroll = () => {
        document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
    };
    return (   
        <section className="h-full flex flex-col  items-center text-white relative overflow-hidden montserrat-100 ">
            <div className="">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center mt-10"
                    >

                        <span className="text-5xl mt-10 font-bold montserrat-uniquifier ">SKILLS</span>
                        <div className="w-40 h-[3px] mt-1 bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]"></div>
                    </motion.div>
                </div>
                <br/>
                <div className="relative mt-10 flex flex-col gap-10 text-2xl ">
                    {/* Front End Section */}
                    <div>
                        {/* Glowing Cornner */}
                        <div className="absolute -top-10 -left-14 flex items-center justify-center animate-pulse">
                            <div className="relative">
                                {/* Horizontal line inner */}
                                <div className="absolute left-0 top-1/2 w-16 h-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-y-1/2"></div>
                                {/* Vertical line inner */}
                                <div className="absolute left-1/2 top-0 h-16 w-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-x-1/2"></div>
                                {/* Horizontal line Outter */}
                                <div className="absolute left-[-20px] top-[-20px] w-30 h-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-y-1/2"></div>
                                {/* Vertical line outter */}
                                <div className="absolute left-[-20px] top-[-20px] h-30 w-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-x-1/2"></div>
                            </div>
                        </div>
                        <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        >
                            <p className="montserrat-uniquifier mb-3">Front-End</p>
                            <ul className="text-lg flex justify-between gap-10">
                                {[
                                { src: "/HTML5_logo_and_wordmark.svg.png", name: "HTML" },
                                { src: "/CSS3_logo_and_wordmark.svg.png", name: "CSS" },
                                { src: "/Unofficial_JavaScript_logo_2.svg.png", name: "JavaScript" },
                                { src: "/React-icon.svg.png", name: "React.js" },
                                { src: "/Vue.js_Logo_2.svg.png", name: "Vue.js" },
                                { src: "/Tailwind_CSS_Logo.svg.png", name: "TailwindCSS" },
                                ].map((skill, i) => (
                                <motion.li
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300"
                                >
                                    <img src={skill.src} alt={skill.name} className="w-[50px] mb-2" />
                                    {skill.name}
                                </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    <div>
                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        >
                            <p className="montserrat-uniquifier mb-3">Back-End</p>
                            <ul className="text-lg flex justify-between gap-10">
                                {[
                                { src: "/fastapi.svg", name: "FastAPI" },
                                { src: "/icons8-express-js-100.png", name: "Express.js" },
                                { src: "/icons8-spring-boot-96.png", name: "Spring Boot" },
                                { src: "/icons8-mongo-db-96.png", name: "MongoDB" },
                                ].map((skill, i) => (
                                <motion.li
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300"
                                >
                                    <img src={skill.src} alt={skill.name} className="w-[50px] mb-2" />
                                    {skill.name}
                                </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    {/* Back End Section */}
                    <div>
                        <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        >
                            <p className="montserrat-uniquifier mb-3">Languages</p>
                            <ul className="text-lg flex justify-between gap-10">
                                {[
                                { src: "/Unofficial_JavaScript_logo_2.svg.png", name: "JavaScript" },
                                { src: "/Typescript_logo_2020.svg.png", name: "TypeScript" },
                                { src: "/226777.png", name: "Java" },
                                { src: "/python-logo.png", name: "Python" },
                                ].map((skill, i) => (
                                <motion.li
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300"
                                >
                                    <img src={skill.src} alt={skill.name} className="w-[50px] mb-2" />
                                    {skill.name}
                                </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Glowing Cornner */}
                        <div className="absolute -bottom-10 -right-14 flex items-center rotate-180 justify-center animate-pulse">
                            <div className="relative">
                                {/* Horizontal line inner */}
                                <div className="absolute left-0 top-1/2 w-16 h-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-y-1/2"></div>
                                {/* Vertical line inner */}
                                <div className="absolute left-1/2 top-0 h-16 w-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-x-1/2"></div>
                                {/* Horizontal line Outter */}
                                <div className="absolute left-[-20px] top-[-20px] w-30 h-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-y-1/2"></div>
                                {/* Vertical line outter */}
                                <div className="absolute left-[-20px] top-[-20px] h-30 w-[2px] bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] -translate-x-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={handleScroll}
                className=" mt-24 flex flex-col items-center group focus:outline-none hover:cursor-pointer"
            >
                <span className="text-lg mb-2 montserrat-100">Projects</span>
                {/* Glowing line */}
                <div className="w-24 h-0.5 bg-white/40 relative overflow-hidden mb-2">
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

export default SkillSection;