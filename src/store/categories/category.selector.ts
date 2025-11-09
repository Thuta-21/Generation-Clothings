import { createSelector } from "reselect";
import { CategoryMap } from "./category.types";
import { CategorisState } from "./category.reducer";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategorisState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories}
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);


export const selectIsCategoriesLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
)
