import { Paper } from "@mui/material";
import classes from "./app.module.css";
import Dashboard from "./features/chat-dashboard/containers/Dashboard";

function App() {
  return (
    <div className={classes.app}>
      <Paper className={classes.app_paper} elevation={0}>
        <Dashboard />
      </Paper>
    </div>
  );
}

export default App;
