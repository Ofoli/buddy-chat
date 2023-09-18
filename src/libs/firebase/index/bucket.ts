import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { bucket } from "./config";
import { FirebaseError } from "firebase/app";

export const PROFILE_BUCKET = "profiles";

export const uploadFileToBucket = async (file: File, dir: string) => {
  const filename = `${dir}/${Date.now()}_${file.name}`;
  const bucketRef = ref(bucket, filename);

  try {
    const { metadata } = await uploadBytes(bucketRef, file);
    return { error: "", path: metadata.fullPath };
  } catch (err) {
    const { code } = err as FirebaseError;
    const message = getBucketError(code);
    return { error: message, path: "" };
  }
};

export const getFileUrlFromBucket = async (filepath: string) => {
  const bucketRef = ref(bucket, filepath);

  try {
    const url = await getDownloadURL(bucketRef);
    return { erorr: "", url };
  } catch (err) {
    const { code } = err as FirebaseError;
    const message = getBucketError(code);
    return { error: message, path: "" };
  }
};

const getBucketError = (code: string) => {
  switch (code) {
    case "storage/object-not-found":
      return "File doesn't exist";
    case "storage/unauthorized":
      return "User doesn't have permission to perform this action";
    case "storage/unknown":
    default:
      return "Unknown error occurred, inspect the server response";
  }
};
