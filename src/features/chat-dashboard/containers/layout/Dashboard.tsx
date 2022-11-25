import Header from "./Header";
import classes from "../../styles/dashboard.module.css";
import SideSpace from "./SideSpace";
import ChatSpace from "./ChatSpace";

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
const resultSpaceActive = false;
const currentClasses = resultSpaceActive ? classStrs.shared : classStrs.default;

export default function Dashboard() {
  return (
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
          <div className={currentClasses.resultPanel}>a</div>
        </div>
      </div>
    </div>
  );
}
