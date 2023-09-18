import { useState } from "react";
import { notification } from "antd";

const ACCEPTED_FILES_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export default function useUserProfileLogic() {
  const [isUploadAvartar, setIsUploadAvartar] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [isUploadImageLoading, setIsUploadImageLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const showUploadAvartar = () => setIsUploadAvartar(true);
  const removeUploadAvartar = () => setIsUploadAvartar(false);
  const closeImagePreview = () => setShowImagePreview(false);
  const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!ACCEPTED_FILES_TYPES.includes(file.type)) {
      return notification.error({ message: "File Type Not Accepted" });
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target!.result as string;
      setImageSrc(result);
      setShowImagePreview(true);
    };
    reader.readAsDataURL(file);
  };
  const onImageUpload = async () => {
    setIsUploadImageLoading(true);

    //upload image to firestore and update localstorage
    await uploadImageToFirestoreApiRequest(imageSrc);

    setImageSrc("");
    setIsUploadImageLoading(false);
    setShowImagePreview(false);
    notification.success({ message: "Profile Updated Successfully" });
  };

  return {
    state: {
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

const uploadImageToFirestoreApiRequest = (img: string) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(console.log({ UPLOAD_IMAGE: img })), 5000)
  );
