
function AboutSection() {
  return (
    <section className="h-screen flex flex-col justify-center bg-white items-center text-black relative">
      <div className="max-w-3xl">
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a 4th-year Software Engineering student at Chiang Mai University.
          Passionate about building clean, functional, and visually appealing web apps.
        </p>
      </div>
      {/* optional glow effect at the top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-white/10 blur-md shadow-[0_0_30px_10px_rgba(255,255,255,0.2)]" />
    </section>
  );
}
export default AboutSection;