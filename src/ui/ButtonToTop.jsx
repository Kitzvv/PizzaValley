import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import useSmoothScroll from "../hooks/useSmoothScroll";

function ButtonToTop() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <IconContext.Provider value={{ color: "#d4d4d8" }}>
      <button
        onClick={() => scrollToSection("hero")}
        className="m-4 hover:bg-emerald-500 bg-zinc-700  py-4 px-4 rounded-full z-50 ring  ring-emerald-500 transition-all"
      >
        <FaArrowUp />
      </button>
    </IconContext.Provider>
  );
}

export default ButtonToTop;
