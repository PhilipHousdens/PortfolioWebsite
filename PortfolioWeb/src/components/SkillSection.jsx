function SkillSection() {
    const handleScroll = () => {
        document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
    };
    return (   
        <section className="h-screen flex flex-col  items-center text-white relative overflow-hidden montserrat-100 ">
            <div className="">
                <div className="flex flex-col items-center">
                    <span className="text-5xl mt-25 font-bold montserrat-uniquifier ">SKILLS</span>
                    <div className="w-40 h-[3px] mt-1 bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]"></div>
                </div>
                <br/>
                <div className="relative mt-10 flex flex-col gap-20 text-2xl ">
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
                        <p className="montserrat-uniquifier ">Front-End</p>
                        <ul className="text-lg flex justify-between gap-15 mt-5"> 
                            <li className="flex-col justify-center items-center flex"><img src="/HTML5_logo_and_wordmark.svg.png" alt="" className="h-[95px]" />HTML</li>
                            <li className="flex-col justify-center items-center flex"><img src="/CSS3_logo_and_wordmark.svg.png" alt="" className="w-[70px]" />CSS</li>
                            <li className="flex-col justify-center items-center flex"><img src="/Unofficial_JavaScript_logo_2.svg.png" alt="" className="w-[70px]" />JavaScript</li>
                            <li className="flex-col justify-center items-center flex"><img src="/React-icon.svg.png" alt="" className="w-[70px]" />React.js</li>
                            <li className="flex-col justify-center items-center flex"><img src="/Vue.js_Logo_2.svg.png" alt="" className="w-[70px]" />Vue.js</li>
                            <li className="flex-col justify-center items-center flex"><img src="/Tailwind_CSS_Logo.svg.png" alt="" className="w-[70px]" />TailwindCSS</li>
                        </ul>
                    </div>
                    <div>
                        <p className="montserrat-uniquifier ">Back-End</p>
                        <ul className="text-lg flex justify-between gap-15 mt-5">
                            <li className="flex-col justify-center items-center flex"><img src="/fastapi.svg" alt="" className="w-[70px]" />Node.js</li>
                            <li className="flex-col justify-center items-center flex"><img src="/icons8-express-js-100.png" alt="" className="w-[70px]" />Express.js</li>
                            <li className="flex-col justify-center items-center flex"><img src="/icons8-spring-boot-96.png" alt="" className="w-[70px]" />Spring Boot</li>
                            <li className="flex-col justify-center items-center flex"><img src="/icons8-mongo-db-96.png" alt="" className="w-[70px]" />MongoDB</li>
                        </ul>

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