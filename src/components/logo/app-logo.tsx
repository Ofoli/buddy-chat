import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import classes from "./app-logo.module.css";

export default function AppLogo() {
  return (
    <div className={classes.app_logo}>
      <div className={classes.app_logo__icon_container}>
        <QuestionAnswerIcon className={classes.app_logo__icon} />
      </div>
      <p className={classes.app_logo__name}>Buddy Chat</p>
    </div>
  );
}
