import Login from "./login";
import { Paper } from "@mui/material";

const paperStyles = {
  width: "70%",
  height: "calc(100% - 200px)",
};

export default function LoginRegisterBase() {
  return (
    <Paper elevation={0} style={paperStyles}>
      <Login />
    </Paper>
  );
}
