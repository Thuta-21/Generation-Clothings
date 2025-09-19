import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPKEPoHHd21H8LLoby2bkXVT1w1TQNjzM",
  authDomain: "generation-clothings.firebaseapp.com",
  projectId: "generation-clothings",
  storageBucket: "generation-clothings.firebasestorage.app",
  messagingSenderId: "1043317241617",
  appId: "1:1043317241617:web:e7c6b1396bb0af769dbeb0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
// auth က ငါတို့ authentication လုပ်တဲ့ဟာတွေကိုခြေရာခံပြီး မှတ်ပေးထားတဲ့ memory bank လိုပဲ။

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addtionalInfo={}) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid); // google ကပြန်ပို့လိုက်တဲ့ထဲမှာ uid က unique ဖြစ်တယ်။
  // db name, collection name, unique identifier(users collection ထဲက ဒီ unique id ရှိတဲ့docကိုညွှန်ပြတယ်)

  const userSnapShot = await getDoc(userDocRef);
  // snapshop ဆိုတာ dataပဲ။ specific object

  if(!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInfo
      })
    } catch(err) {
      console.log('error created the user', err);
    }
  }

  return userDocRef;
}

export const createAuthWithEmailPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}