import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../contexts/CartContext";
import CartEl from "../data/CartEl";
import { FaTrash } from "react-icons/fa";
import EmptyCart from "./EmptyCart";
import toast from "react-hot-toast";

function Cart() {
  const { isCartOpen, cart, dispatch, totalPrice } = useCart();

  const { id } = cart;

  const cartRevealAnim = isCartOpen ? "translate-x-0" : "translate-x-full";

  function handleClearCart() {
    dispatch({ type: "clearCart" });
    toast.success("Pomyślnie opróżniono koszyk 🗑️", {
      style: {
        padding: "1rem",
        backgroundColor: "#3f3f46",
        color: "#f9fafb",
      },
    });
  }

  function makeOrder() {
    dispatch({ type: "clearCart" });
    toast.success("Zamówienie dostarczymy do 45 minut", {
      style: {
        padding: "1rem",
        backgroundColor: "#3f3f46",
        color: "#f9fafb",
      },
    });
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-72 shadow-2xl z-50 bg-zinc-800 transition-all transform ${cartRevealAnim} duration-300`}
    >
      <div className=" h-full w-full  flex-col sm:flex-none sm:flex-row items-center  gap-16 sm:gap-8 ">
        <IconContext.Provider value={{ size: "2rem", color: "#d4d4d8" }}>
          <IoMdClose
            onClick={() => dispatch({ type: "handleCart" })}
            className="absolute top-0 left-0 cursor-pointer"
          />
        </IconContext.Provider>
        <div className="flex flex-col items-center justify-center mt-6">
          <p className=" text-2xl text-zinc-300 font-main font-bold">Koszyk</p>
          <div className="bg-emerald-300 h-[0.1rem] w-4 "></div>
        </div>
        <div className="flex flex-col justify-center">
          {cart.map((pizza) => (
            <CartEl key={pizza.id} pizza={pizza} />
          ))}
        </div>

        <div className="flex justify-around p-4 gap-5 sm:gap-0">
          <p className="text-zinc-300 font-main">Do zapłaty:</p>
          <span className="text-amber-300 font-main">{totalPrice} złoty</span>
          <button onClick={handleClearCart}>
            <IconContext.Provider value={{ size: "1.2rem", color: "#d4d4d8" }}>
              <FaTrash />
            </IconContext.Provider>
          </button>
        </div>

        <div className="p-8 flex justify-center">
          <button
            onClick={makeOrder}
            className="mb-8 font-main text-xl font-semibold w-64  sm:w-full sm:h-10 text-zinc-200 bg-emerald-700 rounded-md shadow-2xl  flex items-center justify-center  hover:bg-emerald-500 "
          >
            Zamów
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
