import { ActionWithPayload } from "../../utilities/reducer/reducer.utils";
import {
  createAction,
  withMatcher,
} from "../../utilities/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

//helper functions
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_DROPDOWN, boolean>;

export type SetCartItem = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

// actions
export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN, bool)
);

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItem =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};
