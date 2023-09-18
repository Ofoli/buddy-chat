import { useState } from "react";
import { notification } from "antd";
import {
  PROFILE_UPLOAD_REQUESTED,
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
  const [showImagePreview, setShowImagePreview] = useState(false);

  const isUploadImageLoading = loadingActions.includes(
    PROFILE_UPLOAD_REQUESTED
  );

  const showUploadAvartar = () => setIsUploadAvartar(true);
  const removeUploadAvartar = () => setIsUploadAvartar(false);
  const closeImagePreview = () => setShowImagePreview(false);
  const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!ACCEPTED_FILES_TYPES.includes(file.type)) {
      return notification.error({
        message: "File Type Not Accepted",
        onClose: () => console.log("ERROR_CLOSED"),
      });
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target!.result as string;
      setImageSrc(result);
      setShowImagePreview(true);
    };
    reader.readAsDataURL(file);
    setImageFile(file);
  };
  const onImageUpload = () => {
    if (imageFile === null) return;

    dispatch(requestProfileUpload(imageFile));

    setImageSrc("");
    setShowImagePreview(false);
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
