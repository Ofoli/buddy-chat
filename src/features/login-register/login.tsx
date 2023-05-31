import { Grid } from "@mui/material";
import classes from "./styles/login-register.module.css";
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
        <Grid
          className={classes.side_info__body}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <h1>Hello, Friend</h1>
          <p className={classes.side_info__message}>
            Enter your personal details and let us shoot with other Friends.
            Stay connect at all times
          </p>
          <div className={classes.side_info__btn_container}>
            <BaseButton label="Register" onClick={() => console.log("click")} />
          </div>
        </Grid>
      </Grid>
      <Grid item md={7} className={classes.login__form_container}>
        form
      </Grid>
    </Grid>
  );
}
