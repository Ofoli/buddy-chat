import classes from "../styles/login-register.module.css";
import { Paper, Grid } from "@mui/material";
import { BaseButton, AppLogo } from "../index/imports";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const paperStyles = {
  width: "70%",
  height: "calc(100% - 200px)",
};

interface LoginRegisterBaseProps {
  name: string;
  children: ChildrenType;
}
export default function LoginRegisterBase() {
  const toggleComponent = () => console.log("toggle");

  return (
    <Paper elevation={0} style={paperStyles}>
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
              <BaseButton
                type="secondary"
                label="register"
                onClick={toggleComponent}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item md={7}>
          <div className={classes.form__container}>
            {/* <LoginForm /> */}
            <RegisterForm />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
