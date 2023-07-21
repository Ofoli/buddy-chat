import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  serverTimestamp,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { auth } from "../index/config";
import {
  createDocRef,
  USER_COLLECTION,
  fetchData,
  userCollection,
} from "../index/db";
import type { User, LoginData, RegisterData } from "../../../types/user";

export async function registerUserApiRequest(data: RegisterData) {
  const { fullname, email, password } = data;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const { uid: id, photoURL } = user;

  const setUserDocRef = createDocRef(USER_COLLECTION, user.uid);
  await setDoc(setUserDocRef, {
    fullname,
    email,
    photoUrl: "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return { email, fullname, id, photoUrl: photoURL ?? "" };
}
export async function loginUserApiRequest(data: LoginData) {
  const { email, password } = data;
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const userInfo = await fetchUserApiRequest(user.uid);

  if (userInfo === null) throw new Error("User not found");

  return userInfo;
}

export async function fetchUserApiRequest(userId: string) {
  const userRef = createDocRef(USER_COLLECTION, userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists) return null;

  const userInfo = userDoc.data();
  if (!userInfo) throw new Error("Could Not Fetch User Info");

  return { id: userId, ...userInfo } as User;
}

export async function fetchUserByEmailApiRequest(email: string) {
  const userQuery = query(userCollection, where("email", "==", email));
  const res = await fetchData<User>(userQuery);

  if (res.length === 1) return res[1];
  return null;
}

export async function logoutUserApiRequest() {
  await signOut(auth);
}

//sazUWm7QeEaDYXorASwXL05RJYF2
