import { Avatar, Grid } from "@mui/material";
import classes from "../styles/user-profile.module.css";
import { BaseButton } from "../index/imports";

interface UserProfileUploadProp {
  imageSrc: string;
  isLoading: boolean;
  onImageUpload: () => void;
}

export default function UserProfileUpload(props: UserProfileUploadProp) {
  const { isLoading, imageSrc, onImageUpload } = props;
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Avatar
          className={classes.user_profile__avartar}
          src={imageSrc}
          alt="Profile"
        />
      </Grid>

      <BaseButton loading={isLoading} onClick={onImageUpload}>
        Submit
      </BaseButton>
    </div>
  );
}
