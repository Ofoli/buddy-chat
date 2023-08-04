import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Grid from "@mui/material/Grid";
import classes from "../styles/result-panel.module.css";
import { UserProfile } from "../index/imports";
import useResultPanelLogic, {
  RESULT_PANEL_ITEMS,
} from "../logic-hooks/result-panel";

const components = {
  [RESULT_PANEL_ITEMS.PROFILE]: UserProfile,
};

const Default = () => null;
export default function ResultPanel() {
  const { title, handleBackClick } = useResultPanelLogic();

  const ResultPanelContent = components[title] ?? Default;

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
      <ResultPanelContent />
    </div>
  );
}
