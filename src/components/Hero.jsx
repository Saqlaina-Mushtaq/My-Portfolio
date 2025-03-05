export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <h1 className="text-5xl font-bold">Hi, I'm <span className="text-green-400">Saqlaina Mushtaq</span></h1>
      <p className="mt-4 text-lg">A Frontend Web Developer </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-green-400 text-black rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
}
