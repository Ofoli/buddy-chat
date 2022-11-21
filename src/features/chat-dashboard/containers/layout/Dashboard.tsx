import Header from "./Header";
import classes from "../../styles/dashboard.module.css";
import SideSpace from "./SideSpace";
import ChatSpace from "./ChatSpace";
export default function Dashboard() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <div className={classes.spaces}>
        <div className={classes.side_space}>
          <SideSpace />
        </div>
        <div className={classes.chat_space}>
          <ChatSpace />
        </div>
      </div>
    </div>
  );
}
