import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import classes from "../styles/chat-input.module.css";

export default function ChatInput() {
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <div className={classes.icon_container}>
          <AttachFileIcon className={classes.icon} />
        </div>
        <div className={classes.input_container}>
          <div
            className={classes.input}
            contentEditable
            role="textbox"
            title="Write a message"
          ></div>
        </div>
        <div className={classes.icon_container}>
          <SendIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
}
