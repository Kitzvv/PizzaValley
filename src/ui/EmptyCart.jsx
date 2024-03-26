import { IconContext } from "react-icons";
import { useCart } from "../contexts/CartContext";
import { IoMdClose } from "react-icons/io";

function EmptyCart() {
  const { isCartOpen, dispatch } = useCart();

  const cartRevealAnim = isCartOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-72 shadow-2xl z-50 bg-zinc-800 transition-all transform ${cartRevealAnim} duration-300`}
    >
      <IconContext.Provider value={{ size: "2rem", color: "#d4d4d8" }}>
        <IoMdClose
          onClick={() => dispatch({ type: "handleCart" })}
          className="absolute top-0 left-0 cursor-pointer"
        />
      </IconContext.Provider>
      <div className="flex flex-col items-center justify-center w-full h-full mt-6 ">
        <p className="font-main text-2xl text-zinc-300">
          Twój koszyk jest pusty 🥺
        </p>
        <button
          onClick={() => dispatch({ type: "handleCart" })}
          className="mt-8 font-main text-xl font-semibold w-64  text-zinc-200 bg-emerald-700 rounded-md shadow-2xl   hover:bg-emerald-500 "
        >
          Zamknij
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
