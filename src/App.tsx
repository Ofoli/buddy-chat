import { Paper } from "@mui/material";
import classes from "./app.module.css";
import Dashboard from "./features/chat-dashboard/containers/layout/Dashboard";
import LoginRegisterBase from "./features/login-register/containers/login-register-base";

import useReduxHooks from "./libs/redux/use-redux";

function App() {
  const { SLICES, sliceSelector } = useReduxHooks();
  const { loggedIn } = sliceSelector(SLICES.authSlice);

  const loginRegister = <LoginRegisterBase />;
  const dashboard = (
    <Paper className={classes.app_paper} elevation={0}>
      <Dashboard />
    </Paper>
  );

  const component = loggedIn ? dashboard : loginRegister;
  return <div className={classes.app}>{component}</div>;
}

export default App;
