import { useState } from "react";
import {
  PROFILE_UPLOAD_REQUESTED,
  addRequestError,
  useReduxHooks,
  requestProfileUpload,
} from "../index/imports";

const ACCEPTED_FILES_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export default function useUserProfileLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { loadingActions } = slices.uiSlice;
  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploadAvartar, setIsUploadAvartar] = useState(false);

  const isUploadImageLoading = loadingActions.includes(
    PROFILE_UPLOAD_REQUESTED
  );
  const showImagePreview = isUploadImageLoading || imageSrc !== "";

  const showUploadAvartar = () => setIsUploadAvartar(true);
  const removeUploadAvartar = () => setIsUploadAvartar(false);
  const closeImagePreview = () => setImageSrc("");
  const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!ACCEPTED_FILES_TYPES.includes(file.type)) {
      return dispatch(
        addRequestError({
          action: PROFILE_UPLOAD_REQUESTED,
          message: "File Type Not Accepted",
        })
      );
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target!.result as string;
      setImageSrc(result);
    };
    reader.readAsDataURL(file);
    setImageFile(file);
  };
  const onImageUpload = () => {
    if (imageFile === null) return;

    dispatch(requestProfileUpload({ userId: user!.id, file: imageFile }));

    setImageSrc("");
  };

  return {
    state: {
      user,
      isUploadAvartar,
      showImagePreview,
      imageSrc,
      isUploadImageLoading,
    },
    handlers: {
      showUploadAvartar,
      removeUploadAvartar,
      onImageSelect,
      onImageUpload,
      closeImagePreview,
    },
  };
}
