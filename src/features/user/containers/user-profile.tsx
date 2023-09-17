import { Avatar, Grid } from "@mui/material";
import classes from "../styles/user-profile.module.css";
import { CustomModal, Notification } from "../index/imports";
import UserInfoGroup from "../components/UserInfoGroup";
import svg from "../../../data/images/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg";
import useUserProfileLogic from "../logic-hooks/user-profile";

export default function UserProfile() {
  const { state, handlers } = useUserProfileLogic();
  const { imageSrc, isUploadAvartar, showImagePreview } = state;
  const {
    showUploadAvartar,
    onImageSelect,
    closeImagePreview,
    removeUploadAvartar,
  } = handlers;

  return (
    <div className={classes.user_profile__main}>
      <Grid container alignItems="center" justifyContent="center">
        <label>
          <Avatar
            className={classes.user_profile__avartar}
            src={isUploadAvartar ? svg : ""}
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
      <UserInfoGroup
        label="Fullname"
        name="Amo Kojo"
        onEdit={() => console.log("Editing")}
      />
      <UserInfoGroup label="Email" name="amokojo@gmail.come" />
      <CustomModal
        title="Upload Profile"
        open={showImagePreview}
        onCancel={closeImagePreview}
      >
        <Avatar
          className={classes.user_profile__avartar}
          src={imageSrc}
          alt="PK"
        />
      </CustomModal>
    </div>
  );
}
