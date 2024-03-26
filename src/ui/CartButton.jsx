import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useCart } from "../contexts/CartContext";

function CartButton() {
  const { dispatch } = useCart();

  return (
    <IconContext.Provider value={{ color: "#d4d4d8" }}>
      <button
        onClick={() => dispatch({ type: "handleCart" })}
        className="m-4 hover:bg-emerald-500 bg-zinc-700  p-4 rounded-full z-50 ring  ring-emerald-500 transition-all"
      >
        {<FaShoppingCart />}
      </button>
    </IconContext.Provider>
  );
}

export default CartButton;
