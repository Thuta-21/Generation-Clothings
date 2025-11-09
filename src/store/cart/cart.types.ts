import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS =  "SET_CART_ITEMS",
  TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN",
};

export type CartItem = CategoryItem & {
  quantity: number;
}