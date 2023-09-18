import classes from "../styles/login-register.module.css";
import { Paper, Grid } from "@mui/material";
import { BaseButton, AppLogo } from "../index/imports";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import useLoginRegisterLogic from "../logic-hooks/login-register";

export default function LoginRegisterBase() {
  const { state, handlers } = useLoginRegisterLogic();
  const {
    toggleButtonLabel,
    isLoginComponent,
    isRegisterComponent,
    isLoginLoading,
    isRegisterLoading,
  } = state;
  const { toggleComponent, handleLoginSubmit, handleRegisterSubmit } = handlers;

  return (
    <Paper elevation={0} className={classes.main}>
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
              <BaseButton type="secondary" onClick={toggleComponent}>
                {toggleButtonLabel}
              </BaseButton>
            </div>
          </Grid>
        </Grid>
        <Grid item md={7}>
          <div className={classes.form__container}>
            {isLoginComponent && (
              <LoginForm
                onSubmit={handleLoginSubmit}
                isLoading={isLoginLoading}
              />
            )}
            {isRegisterComponent && (
              <RegisterForm
                onSubmit={handleRegisterSubmit}
                isLoading={isRegisterLoading}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
