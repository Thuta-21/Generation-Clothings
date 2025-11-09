import { call, put, takeLatest, all } from "typed-redux-saga/macro";
import { Auth, User } from "firebase/auth";
import { AdditonalInfo } from "../../utilities/firebase/firebase.utilis";
import { USER_ACTION_TYPES } from "./user.types";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createAuthWithEmailPassword,
  signOutUser,
} from "../../utilities/firebase/firebase.utilis";

import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signUpSuccess,
  signOutFailed,
  signOutSuccess,
  EmailSigninStart,
  SignUpStart,
  SignUpSuccess,
} from "./user.actions";

export function* getSnapshotFromAuth(
  userAuth: User,
  addtionalInfo?: AdditonalInfo
) {
  try {
    const userSnapShot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      addtionalInfo
    );
    if (userSnapShot) {
      yield* put(
        signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
      );
    }
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* siginInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromAuth, user);
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromAuth, userAuth);
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSigninStart) {
  try {
    const userCredential = yield* call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromAuth, user);
    }
  } catch (e) {
    yield* put(signInFailed(e as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthWithEmailPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (e) {
    if ((e as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
      alert("Cannot Sign Up! Email alreday in use");
    } else {
      console.log("Error", e as Error);
    }
    yield* put(signUpFailed(e as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, addtionalInfo },
}: SignUpSuccess) {
  yield* call(getSnapshotFromAuth, user, addtionalInfo);
  alert("Sign Up successfully");
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (e) {
    yield* put(signOutFailed(e as Error));
  }
}

export function* onGooleSignIn() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, siginInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignIn() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGooleSignIn),
    call(onEmailSignIn),
    call(onSignUpStart),
    call(onSignOutStart),
  ]);
}
