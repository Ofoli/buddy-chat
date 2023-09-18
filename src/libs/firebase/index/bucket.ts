import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { bucket } from "./config";

export const PROFILE_BUCKET = "profiles";

export const uploadFileToBucket = async (file: File, dir: string) => {
  const filename = `${dir}/${Date.now()}_${file.name}`;
  const bucketRef = ref(bucket, filename);

  const { metadata } = await uploadBytes(bucketRef, file);
  return metadata.fullPath;
};

export const getFileUrlFromBucket = async (filepath: string) => {
  const bucketRef = ref(bucket, filepath);
  return await getDownloadURL(bucketRef);
};

export const getBucketError = (code: string) => {
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
