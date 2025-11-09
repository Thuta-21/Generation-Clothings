import { Category, CATEGORY_ACTION_TYPES } from "./category.types";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  FetchCategoriesFailed,
  fetchCategoriesFailed,
} from "./category.action";
import { UnknownAction } from "redux";

export type CategorisState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: CategorisState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action: UnknownAction
): CategorisState => {

  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    };
  }

  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }

  return state;
};
