import { Grid, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "../../styles/header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <h2>Buddy-Chat</h2>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Avatar src="" alt="PK" />
            <p className={classes.name}>Phusuk Kamal</p>
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
