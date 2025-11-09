import { UnknownAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.actions";
import { CartItem } from "./cart.types";

export type CartState = {
   readonly cartItems: CartItem[];
   readonly isDropdownOpen: boolean;
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  isDropdownOpen: false
};

export const cartReducer = (state = INITIAL_STATE, action: UnknownAction): CartState => {

  if(setCartItems.match(action)) {
      return {
        ...state,
        cartItems: action.payload,
      };
  }

  if (setIsCartOpen.match(action)) {
      return {
        ...state,
        isDropdownOpen: action.payload,
      };
  }

  return state;
};