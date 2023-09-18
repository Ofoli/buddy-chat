import { auth } from "../index/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import {
  createDocRef,
  USER_COLLECTION,
  fetchData,
  userCollection,
} from "../index/db";
import {
  PROFILE_BUCKET,
  uploadFileToBucket,
  getFileUrlFromBucket,
} from "../index/bucket";
import type {
  User,
  LoginData,
  RegisterData,
  UploadProfileData,
} from "../../../types/user";

export async function registerUserApiRequest(data: RegisterData) {
  const { fullname, email, password } = data;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const { uid: id } = user;

  const setUserDocRef = createDocRef(USER_COLLECTION, id);
  await setDoc(setUserDocRef, {
    fullname,
    email,
    photoUrl: "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  const userInfo = await fetchUserApiRequest(id);

  if (userInfo === null) {
    throw new Error(
      "Login attempt failed after registration \n Continue at login page"
    );
  }

  return userInfo;
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

  if (res.length === 1) return res.pop();
  return null;
}

export async function logoutUserApiRequest() {
  await signOut(auth);
}

export async function uploadProfileApiRequest(data: UploadProfileData) {
  const { userId, file } = data;
  const filepath = await uploadFileToBucket(file, PROFILE_BUCKET);
  const photoUrl = await getFileUrlFromBucket(filepath);

  const userRef = createDocRef(USER_COLLECTION, userId);
  await updateDoc(userRef, { photoUrl });
  return photoUrl;
}
