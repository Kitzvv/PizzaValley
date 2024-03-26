import { useCart } from "../contexts/CartContext";
import ButtonToTop from "./ButtonToTop";
import CartButton from "./CartButton";

function ManageButtons() {
  const { isCartOpen } = useCart();

  if (isCartOpen) return null;
  return (
    <div className="flex flex-col fixed top-[35rem] right-0 m-4 z-50">
      <CartButton />
      <ButtonToTop />
    </div>
  );
}

export default ManageButtons;
