import { all, call, takeLatest, put } from "redux-saga/effects";

import { getCategoriesAndDocs } from "../../utilities/firebase/firebase.utilis";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORY_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() { // worker saga
  try {
    const categoryArray = yield call(getCategoriesAndDocs);
    yield put(fetchCategoriesSuccess(categoryArray));
  } catch (err) {
    yield put(fetchCategoriesFailed(err));
  }
}

export function* onFetchCategories() { // watcher saga
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, // ဒါတွေ့ရင်
    fetchCategoriesAsync   // ဒီ worker saga ကိုခေါ်
  );
}

export function* categoriesSaga() { // start watcher saga
  yield all([call(onFetchCategories)]);
}

// call => for async function. call(func, argu)
// put => equal to dispatch
// all => the watcher saga runner
// takeLatest => handle only the lastaction
//               it cancels the previous saga and only runs the most recent one.