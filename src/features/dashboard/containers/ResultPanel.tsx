import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import classes from "../styles/result-panel.module.css";
import { UserProfile } from "../index/imports";
import useResultPanelLogic from "../logic-hooks/result-panel";

export default function ResultPanel() {
  const { title, handleBackClick } = useResultPanelLogic();
  return (
    <div className={classes.main}>
      <Grid
        container
        alignItems="center"
        gap={3}
        className={classes.title_container}
      >
        <ArrowBackIcon onClick={handleBackClick} />
        <p className={classes.title_text}>{title}</p>
      </Grid>
      <UserProfile />
    </div>
  );
}
