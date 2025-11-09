import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
  apiKey: "AIzaSyCPKEPoHHd21H8LLoby2bkXVT1w1TQNjzM",
  authDomain: "generation-clothings.firebaseapp.com",
  projectId: "generation-clothings",
  storageBucket: "generation-clothings.firebasestorage.app",
  messagingSenderId: "1043317241617",
  appId: "1:1043317241617:web:e7c6b1396bb0af769dbeb0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// auth က ငါတို့ authentication လုပ်တဲ့ဟာတွေကိုခြေရာခံပြီး မှတ်ပေးထားတဲ့ memory bank လိုပဲ။

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDoc = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectToAdd: T[]
): Promise<void> => {
  const colllectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.map((object) => {
    const docRef = doc(colllectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocs = async (): Promise<Category[]> => {
  const colllectionRef = collection(db, "categories");
  const q = query(colllectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditonalInfo = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  addtionalInfo = {} as AdditonalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid); // google ကပြန်ပို့လိုက်တဲ့ထဲမှာ uid က unique ဖြစ်တယ်။
  // db name, collection name, unique identifier(users collection ထဲက ဒီ unique id ရှိတဲ့docကိုညွှန်ပြတယ်)

  const userSnapShot = await getDoc(userDocRef);
  // snapshop ဆိုတာ dataပဲ။ specific object

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInfo,
      });
    } catch (err) {
      console.log("error created the user", err);
    }
  }

  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

export const createAuthWithEmailPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = async (
  callback: NextOrObserver<User>
) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe(), resolve(userAuth);
      },
      reject
    );
  });
};

// onAuthStateChanged(auth, callback(run if success), callback(run if error));
