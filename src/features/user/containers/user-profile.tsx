import { Avatar, Grid } from "@mui/material";
import classes from "../styles/user-profile.module.css";
import { CustomModal } from "../index/imports";
import UserInfoGroup from "../components/UserInfoGroup";
import UserProfileUpload from "../components/profile-upload";
import UpdateFullnameForm from "../components/update-fullname";
import svg from "../../../data/images/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg";
import useUserProfileLogic from "../logic-hooks/user-profile";

export default function UserProfile() {
  const { state, handlers } = useUserProfileLogic();
  const {
    user,
    imageSrc,
    isUploadAvartar,
    showImagePreview,
    isUploadImageLoading,
    fullname,
    isEditFullnameActive,
  } = state;
  const {
    showUploadAvartar,
    onImageSelect,
    closeImagePreview,
    removeUploadAvartar,
    onImageUpload,
    toggeleEditFullnameActive,
    onFullnameChange,
    onUpdatedFullnameSubmit,
  } = handlers;

  return (
    <div className={classes.user_profile__main}>
      <Grid container alignItems="center" justifyContent="center">
        <label>
          <Avatar
            className={classes.user_profile__avartar}
            src={isUploadAvartar ? svg : user!.photoUrl}
            alt="PK"
            onMouseEnter={showUploadAvartar}
            onMouseLeave={removeUploadAvartar}
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={onImageSelect}
          />
        </label>
      </Grid>
      {isEditFullnameActive ? (
        <UpdateFullnameForm
          value={fullname}
          onChange={onFullnameChange}
          onSubmit={onUpdatedFullnameSubmit}
        />
      ) : (
        <UserInfoGroup
          label="Fullname"
          name={user!.fullname}
          onEdit={toggeleEditFullnameActive}
        />
      )}
      <UserInfoGroup label="Email" name={user!.email} />
      <CustomModal
        title="Upload Profile"
        open={showImagePreview}
        onCancel={closeImagePreview}
      >
        <UserProfileUpload
          imageSrc={imageSrc}
          isLoading={isUploadImageLoading}
          onImageUpload={onImageUpload}
        />
      </CustomModal>
    </div>
  );
}
