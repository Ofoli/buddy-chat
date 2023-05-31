// import { Paper } from "@mui/material";
import classes from "./app.module.css";
// import Dashboard from "./features/chat-dashboard/containers/layout/Dashboard";
import LoginRegisterBase from "./features/login-register/login-register-base";

function App() {
  return (
    <div className={classes.app}>
      {/* <Paper className={classes.app_paper} elevation={0}>
        <Dashboard />
      </Paper> */}
      <LoginRegisterBase />
    </div>
  );
}

export default App;
