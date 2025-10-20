import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
// createStore ကိုအမှားခြစ်နေတာက redux toolkit ကိုသုံးဖို့ပြောတာ။ pure redux နဲ့ဆိုရင် ပိုခက်တယ်။ ပိုရှပ်တယ်ဆိုတာကိုပြောနေတာ။
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
// root reducer

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const middleWares = [process.env.NODE_ENV != "production" && logger, sagaMiddleware].filter(
  Boolean
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer =
  (process.env.NODE_ENV != "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));
// destructure လုပ်ထားတာက middleWares ထဲမှာ loggerမဟုတ်ဘဲအခြား middlewaresတွေရောလာရင်အဆင်ပြေအောင်လို့လုပ်တာ။
// middleware ကို  applyMiddleware လုပ်မှသုံးရမှာ။ compose နဲ့သုံးတာ။
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
