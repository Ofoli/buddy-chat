import Chat from "../../components/ui/Chat";
import classes from "../../styles/chats-and-chat.module.css";
export default function Chats() {
  return (
    <div className={classes.chats}>
      <Chat type="sender" />
      <Chat type="receiver" />
    </div>
  );
}
