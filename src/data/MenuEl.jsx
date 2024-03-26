import toast from "react-hot-toast";
import { useCart } from "../contexts/CartContext";

export function MenuEl({ pizzaObj }) {
  const { dispatch, cart } = useCart();

  const { id, name, price, quantity } = pizzaObj;

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      price,
      quantity,
    };
    dispatch({ type: "addToCart", payload: newItem });
    dispatch({ type: "calculateTotalPrice" });
    toast.success("Dodano do koszyka", {
      style: {
        padding: "1rem",
        backgroundColor: "#3f3f46",
        color: "#f9fafb",
      },
    });
  }

  console.log(cart);
  return (
    <div>
      <li className="flex flex-col gap-4 sm:items-center lg:flex-row ">
        <img
          className="w-full h-full sm:h-64 sm:w-64 sm:border-gray-200 sm:border-4 "
          src={pizzaObj.img}
          alt={pizzaObj.name}
        ></img>
        <div className="w-full md:w-72 flex flex-col h-[20rem]">
          <p className="font-main text-gray-200 font-semibold text-2xl mt-4 mb-2">
            {pizzaObj.name}
          </p>
          <p className="font-main text-amber-300 font-semibold text-xl mb-2">
            {pizzaObj.price}
          </p>
          <div className="h-1 w-20 bg-emerald-400 mb-2 md:mb-4"></div>
          <p className="font-main mb-4 text-white sm:mb-12 md:flex-grow ">
            {pizzaObj.desc}
          </p>

          <button
            onClick={handleAddToCart}
            className=" font-main font-semibold w-full md:w-76 lg:w-56 xl:w-72 h-16 min-h-[4rem] text-zinc-900 bg-emerald-400 shadow-2xl hover:text-white  hover:bg-emerald-600 transition-all "
          >
            Dodaj do koszyka
          </button>
        </div>
      </li>
    </div>
  );
}
