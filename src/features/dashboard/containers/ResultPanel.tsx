import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import classes from "../styles/result-panel.module.css";
import { UserProfile } from "../index/imports";

export default function ResultPanel() {
  return (
    <div className={classes.main}>
      <Grid
        container
        alignItems="center"
        gap={3}
        className={classes.title_container}
      >
        <ArrowBackIcon />
        <p className={classes.title_text}>Profile</p>
      </Grid>
      <UserProfile />
    </div>
  );
}
