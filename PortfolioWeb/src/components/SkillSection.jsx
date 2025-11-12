function SkillSection() {
    return (   
        <section className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
        <div className="h-full">
            <div className="flex flex-col justify-center items-center">
                <span className="text-5xl mt-25 font-bold">SKILLS</span>
                <div className="w-40 h-[3px] mt-1 bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]"></div>
            </div>
            <br/>
            <div className="mt-10 flex flex-col gap-20 text-2xl ">
                {/* Front End Section */}
                <div>
                    <p>Front-End</p>
                    <ul className="text-lg flex justify-between gap-15 mt-5"> 
                        <li className="flex-col justify-center items-center flex"><img src="../../public/HTML5_logo_and_wordmark.svg.png" alt="" className="h-[95px]" />HTML</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/CSS3_logo_and_wordmark.svg.png" alt="" className="w-[70px]" />CSS</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/Unofficial_JavaScript_logo_2.svg.png" alt="" className="w-[70px]" />JavaScript</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/React-icon.svg.png" alt="" className="w-[70px]" />React.js</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/Vue.js_Logo_2.svg.png" alt="" className="w-[70px]" />Vue.js</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/Tailwind_CSS_Logo.svg.png" alt="" className="w-[70px]" />TailwindCSS</li>
                    </ul>
                </div>
                <div>
                    <p>Back-End</p>
                    <ul className="text-lg flex justify-between gap-15 mt-5">
                        <li className="flex-col justify-center items-center flex"><img src="../../public/fastapi.svg" alt="" className="w-[70px]" />Node.js</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/icons8-express-js-100.png" alt="" className="w-[70px]" />Express.js</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/icons8-spring-boot-96.png" alt="" className="w-[70px]" />Spring Boot</li>
                        <li className="flex-col justify-center items-center flex"><img src="../../public/icons8-mongo-db-96.png" alt="" className="w-[70px]" />MongoDB</li>
                    </ul>
                </div>
            </div>

        </div>
        </section>

    );
}

export default SkillSection;