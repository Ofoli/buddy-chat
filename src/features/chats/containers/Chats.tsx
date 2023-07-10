import classes from "../styles/chats-and-chat.module.css";
import Chat from "../components/Chat";
export default function Chats() {
  return (
    <div className={classes.chats}>
      <Chat key="klnsalk" type="sender" />
      <Chat key="jnsavjs" type="receiver" />
    </div>
  );
}
