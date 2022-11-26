import classes from "../../styles/chats-and-chat.module.css";
import Chat from "../../components/ui/Chat";
export default function Chats() {
  return (
    <div className={classes.chats}>
      <Chat type="sender" />
      <Chat type="receiver" />
    </div>
  );
}
