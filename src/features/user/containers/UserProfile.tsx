import { Avatar, Grid } from "@mui/material";
import classes from "../styles/user-profile.module.css";
import UserInfoGroup from "../components/UserInfoGroup";

export default function UserProfile() {
  return (
    <div className={classes.user_profile__main}>
      <Grid container alignItems="center" justifyContent="center">
        <Avatar className={classes.user_profile__avartar} src="" alt="PK" />
      </Grid>
      <UserInfoGroup
        label="Fullname"
        name="Amo Kojo"
        onEdit={() => console.log("Editing")}
      />
      <UserInfoGroup label="Email" name="amokojo@gmail.come" />
    </div>
  );
}
