import useSmoothScroll from "../hooks/useSmoothScroll";
import Navbar from "../ui/Navbar";

function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section
      className="relative bg-cover bg-center bg-[url('/public/Hero.jpg')]"
      id="hero"
    >
      <Navbar />
      <div className="h-screen flex flex-col gap-10 md:gap-16 items-center justify-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-addition text-emerald-400 text-center">
          Najlepsza pizza?
        </h1>
        <p className="font-bold font-main text-gray-200 text-2xl sm:text-4xl md:text-6xl text-center">
          Pizza Valley zaprasza!
        </p>
        <div className="-mt-6 md:-mt-10 h-1 w-24 md:w-40 bg-emerald-400 mx-auto "></div>
        <a
          onClick={() => scrollToSection("menu")}
          className="font-main text-l md:text-2xl font-semibold w-16 sm:w-24 h-8  sm:h-16 text-gray-100 bg-emerald-500 rounded-md shadow-2xl md:mt-4 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-emerald-700 hover:scale-110  duration-300 cursor-pointer"
        >
          Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;
