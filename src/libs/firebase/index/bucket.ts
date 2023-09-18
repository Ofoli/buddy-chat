import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { bucket } from "./config";

export const PROFILE_BUCKET = "profile";

export const uploadFileToBucket = async (file: File, dir: string) => {
  const bucketRef = ref(bucket, `${dir}/${file.name}}`);

  try {
    const res = await uploadBytes(bucketRef, file);
    return res;
  } catch (err) {
    console.log({ UPLOAD_ERROR: err });
    return null;
  }
};

export const getFileUrlFromBucket = async (filepath: string) => {
  const bucketRef = ref(bucket, filepath);

  try {
    const res = await getDownloadURL(bucketRef);
    return res;
  } catch (err) {
    console.log({ DOWNLOAD_ERROR: err });
    return "";
  }
};
