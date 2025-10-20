import { call, put, takeLatest, all } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createAuthWithEmailPassword,
  signOutUser,
} from "../../utilities/firebase/firebase.utilis";

import { signInSuccess, signInFailed, signUpFailed, signUpSuccess, signOutFailed, signOutSuccess } from "./user.actions";

export function* getSnapshotFromAuth(userAuth, addtionalInfo) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      addtionalInfo
    );
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* siginInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromAuth, user);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromAuth, userAuth);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromAuth, user);
  } catch (e) {
    yield put(signInFailed(e));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {

  try {
    const { user } = yield call(createAuthWithEmailPassword, email, password);
    yield put(signUpSuccess(user, {displayName}));
  } catch (e) {
    if (e.code === "auth/email-already-in-use") {
      alert("Cannot Sign Up! Email alreday in use");
    } else {
      console.log("Error", e);
    }
    yield put(signUpFailed(e));
  }
}

export function* signInAfterSignUp({payload: {user, addtionalInfo}}) {
  yield call(getSnapshotFromAuth, user, addtionalInfo);
  alert('Sign Up successfully');
}

export function* signOut() {
  try {
    yield signOutUser();
    yield put(signOutSuccess());
  } catch(e) {
    yield put(signOutFailed(e));
  }
}

export function* onGooleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, siginInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGooleSignIn),
    call(onEmailSignIn),
    call(onSignUpStart),
    call(onSignOutStart)
  ]);
}
