import { motion } from "framer-motion";

function ProjectsSection() {
    const handleScroll = () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    };
    const projects = [
        {
        title: "Biker SKY",
        tech: "Vue.js, Node.js, MongoDB",
        img: "/projects/bikersky.png",
        link: "https://bike-sky.vercel.app",
        },
    ];
    return (
        <section className="relative overflow-hidden h-full flex justify-center items-center flex-col montserrat-100">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-15%] right-[-10%] w-[400px] h-[400px] md:w-[300px]  md:h-[300px] rounded-full border-2 border-white shadow-[0_0_120px_40px_rgba(255,255,255,0.25)] animate-pulse animate-float"></div>
                <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] md:w-[300px]  md:h-[300px] rounded-full border-2 border-white shadow-[0_0_120px_40px_rgba(255,255,255,0.25)] animate-pulse animate-float"></div>
            </div>
            <div className="flex flex-col justify-center items-center pt-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mt-10"
                >

                        <span className="text-5xl md:text-2xl font-bold montserrat-uniquifier ">Projects</span>
                        <div className="w-50 h-[3px] md:w-25 mt-1 bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]"></div>
                </motion.div>
            </div>
            {/* === Grid Container === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full p-5 mx-auto mt-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-white transition-all duration-300"
                    >
                        <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-4">{project.tech}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
                        >
                            View Project
                        </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <button
            onClick={handleScroll}
            className="mt-5 flex flex-col items-center group focus:outline-none hover:cursor-pointer"
            >
                <span className="text-lg mb-2 montserrat-100">Contact</span>
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

export default ProjectsSection;