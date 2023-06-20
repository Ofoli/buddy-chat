import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../index/config";
import { createDocRef, USER_COLLECTION } from "../index/db";
import type { LoginData, RegisterData } from "../../../types/form-data";

export async function registerUserApiRequest(data: RegisterData) {
  const { fullname, email, password } = data;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  const setUserDocRef = createDocRef(USER_COLLECTION, user.uid);
  await setDoc(setUserDocRef, {
    fullname,
    email,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return { email, fullname, id: user.uid };
}
export async function loginUserApiRequest(data: LoginData) {
  const { email, password } = data;
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  const userRef = createDocRef(USER_COLLECTION, user.uid);
  const { data: getUser } = await getDoc(userRef);
  const userInfo = getUser();

  if (!userInfo) throw new Error("Could Not Fetch User Info");

  return { email, id: user.uid, fullname: userInfo.fullname };
}

export async function logoutUser() {
  await signOut(auth);
}
