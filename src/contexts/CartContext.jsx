import { createContext, useContext, useReducer } from "react";
import { FaQuora } from "react-icons/fa";

const CartContext = createContext();

const initialState = {
  cart: [],
  isCartOpen: false,
  totalPrice: 0,
  amountInCart: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "handleCart":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "addToCart":
      if (state.cart.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "addQuantity":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "removeQuantity":
      if (
        state.cart.find((item) => item.id === action.payload).quantity === 1
      ) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "calculateTotalPrice":
      return {
        ...state,
        totalPrice: state.cart.reduce(
          (acc, item) =>
            acc + parseFloat(item.price) * parseFloat(item.quantity),
          0
        ),
      };

    case "clearCart":
      return {
        ...state,
        cart: [],
        totalPrice: 0,
        isCartOpen: false,
      };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [{ cart, isCartOpen, totalPrice }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ cart, isCartOpen, dispatch, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");
  return context;
}

export { CartProvider, useCart };
