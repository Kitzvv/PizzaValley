import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { useCart } from "../contexts/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = () => {
    setIsOpen(!isOpen);
  };

  const { isSticky, scrollToSection } = useSmoothScroll(handleBurger, isOpen);

  const { dispatch } = useCart();

  return (
    <div>
      <div
        className={`transition-transform duration-500 bg-opacity-20  ${
          isSticky
            ? "fixed top-0 w-full bg-opacity-100 bg-zinc-900 z-50 translate-y-0 "
            : ""
        }`}
      >
        <ul className="h-24 bg-zinc-900 font-main  text-gray-200 flex justify-around items-center bg-opacity-75  w-full relative">
          <li className="hidden md:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xl"
            >
              O nas
            </button>
          </li>
          <li className="hidden md:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <button onClick={() => scrollToSection("menu")} className="text-xl">
              Menu
            </button>
          </li>

          <button
            onClick={() => scrollToSection("hero")}
            className="font-bold text-3xl cursor-pointer sm:text-5xl"
          >
            🍕Pizza Valley
          </button>

          <li className="hidden md:block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xl"
            >
              Kontakt
            </button>
          </li>
          <li className="hidden md:block ">
            <button
              onClick={() => dispatch({ type: "handleCart" })}
              className="font-main text-xl font-semibold md:block sm:w-20  sm:h-12 text-zinc-200 bg-emerald-700 rounded-md shadow-2xl  flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-emerald-500 hover:scale-110  duration-300 cursor-pointer"
            >
              Koszyk
            </button>
          </li>

          <li className="cursor-pointer md:hidden absolute right-4 top-8">
            <IconContext.Provider value={{ size: "2rem" }}>
              <GiHamburgerMenu onClick={handleBurger} />
            </IconContext.Provider>
          </li>
        </ul>
        {isOpen && (
          <div
            className={`h-42 bg-zinc-900 bg-opacity-80 transition-all absolute w-full top-24`}
          >
            <ul className="flex flex-col items-center gap-4 font-main text-white text-xl">
              <li>
                <button
                  onClick={() => {
                    scrollToSection("hero");
                  }}
                >
                  Strona Główna
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("menu");
                  }}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("about");
                  }}
                >
                  O nas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                  }}
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
