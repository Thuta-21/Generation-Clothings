import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  // action ဆိုတာ dispath

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
    //    redux က state တစ်ခုတည်းကိုပဲ update လုပ်လို့ default ကို state ပြန်ပေးရတယ်။ မပြန်ဘဲ error ပြန်ရင် error ကြီးထွက်လာမှာ။ ရိုးရိုး useReducer နဲ့ကွဲတာကိုသတိထားရမယ်။
  }
};
