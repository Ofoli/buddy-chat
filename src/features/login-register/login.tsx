import { Grid } from "@mui/material";
import classes from "./login-register.module.css";
import { BaseButton, AppLogo } from "./index/imports";

export default function Login() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.login__container}
    >
      <Grid item md={5} className={classes.side_info__container}>
        <AppLogo />
        <h2>Hello, Friend</h2>
        <p>Enter your personal details and let us shoot with other Friends</p>
        <div>
          <BaseButton label="Register" onClick={() => console.log()} />
        </div>
      </Grid>
      <Grid item md={7} className={classes.login__form_container}>
        form
      </Grid>
    </Grid>
  );
}
