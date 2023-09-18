import { Paper } from "@mui/material";
import Header from "./Header";
import classes from "../styles/dashboard.module.css";
import SideSpace from "./SideSpace";
import ResultPanel from "./ResultPanel";
import { ChatSpace } from "../index/imports";
import useDashboardLogic from "../logic-hooks/dashboard";

const classStrs = {
  default: {
    chatPanel: classes.chat_panel_default,
    resultPanel: classes.result_panel_default,
  },
  shared: {
    chatPanel: classes.chat_panel,
    resultPanel: classes.result_panel,
  },
};

export default function Dashboard() {
  const { isResultPanelOpen } = useDashboardLogic();
  const currentClasses = isResultPanelOpen
    ? classStrs.shared
    : classStrs.default;

  return (
    <Paper className={classes.app_paper} elevation={0}>
      <div style={{ height: "100%" }}>
        <Header />
        <div className={classes.spaces}>
          <div className={classes.side_space}>
            <SideSpace />
          </div>
          <div className={classes.chat_space}>
            <div className={currentClasses.chatPanel}>
              <ChatSpace />
            </div>
            <div className={currentClasses.resultPanel}>
              <ResultPanel />
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
