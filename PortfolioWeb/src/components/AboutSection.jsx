
function AboutSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-black relative overflow-hidden">
        <div className="absolute top-[10%] right-[-2%] w-[400px] h-[400px] rounded-full border-2 border-black shadow-[0_0_120px_40px_rgba(0,0,0,0.25)] animate-pulse z-0"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full border-2 border-black shadow-[0_0_120px_40px_rgba(0,0,0,0.25)] animate-pulse"></div>
        <div className="flex justify-center items-start gap-5">
            <div className="max-w-3xl">
                <h2 className="text-5xl font-bold mb-6 underline">About Me</h2>
                <p className="text-lg text-gray-800 leading-relaxed pr-6">
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
    </section>
  );
}
export default AboutSection;