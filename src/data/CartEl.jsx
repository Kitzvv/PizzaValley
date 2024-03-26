import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IconContext } from "react-icons";
import { useCart } from "../contexts/CartContext";

function CartEl({ pizza }) {
  const { dispatch } = useCart();

  const { id, name, price, quantity } = pizza;

  function handleAddAmount() {
    dispatch({ type: "addQuantity", payload: id });
    dispatch({ type: "calculateTotalPrice" });
    dispatch({ type: "countItems" });
  }
  function handleRemoveAmount() {
    dispatch({ type: "removeQuantity", payload: id });
    dispatch({ type: "calculateTotalPrice" });
    dispatch({ type: "countItems" });
  }

  return (
    <div className="p-4 text-zinc-300 flex flex-col text-sm border-b-[0.1rem] border-zinc-300 font-main">
      <p className="font-bold">{name}</p>
      <p className="text-amber-300">{price}</p>
      <div className="flex justify-between">
        <p>Ilość:</p>
        <span className="text-lg font-bold ">{quantity}</span>
        <div className="mb-4">
          <button>
            <IconContext.Provider value={{ size: "2rem" }}>
              <CiCirclePlus onClick={handleAddAmount} />
            </IconContext.Provider>
          </button>
          <button>
            <IconContext.Provider value={{ size: "2rem" }}>
              <CiCircleMinus onClick={handleRemoveAmount} />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartEl;
