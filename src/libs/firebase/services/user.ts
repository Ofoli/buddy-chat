import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../index/config";
import { createDocRef, USER_COLLECTION } from "../index/db";
import type { LoginData, RegisterData } from "../../../types/user";

export async function registerUserApiRequest(data: RegisterData) {
  const { fullname, email, password } = data;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const { uid: id, photoURL } = user;

  const setUserDocRef = createDocRef(USER_COLLECTION, user.uid);
  await setDoc(setUserDocRef, {
    fullname,
    email,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return { email, fullname, id, photoUrl: photoURL ?? "" };
}
export async function loginUserApiRequest(data: LoginData) {
  const { email, password } = data;
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const { uid: id, photoURL } = user;

  const userRef = createDocRef(USER_COLLECTION, id);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists) throw new Error("User not found");

  const userInfo = userDoc.data();
  if (!userInfo) throw new Error("Could Not Fetch User Info");

  return { id, email, fullname: userInfo.fullname, photoUrl: photoURL ?? "" };
}

export async function logoutUserApiRequest() {
  await signOut(auth);
}

//sazUWm7QeEaDYXorASwXL05RJYF2
