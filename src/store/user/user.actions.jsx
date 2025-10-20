import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utilities/reducer/reducer.utils";

export const setCurrentUser = (user) => 
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
// one parameter, no {}, so don't need to return

export const checkCurrentUser = () => 
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);


export const googleSignInStart = () => 
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);


export const emailSiginInStart = (email, password) => 
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})

export const signUpStart = (email, password, displayName) => 
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password, displayName})

export const signUpSuccess = (user, addtionalInfo) => 
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, addtionalInfo})

export const signUpFailed = (error) => 
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)

export const signInSuccess = (user) => 
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = (error) => 
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)

export const signOutStart = () => 
  createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () => 
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = (e) => 
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, e)
