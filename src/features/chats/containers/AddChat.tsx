import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import classes from "../styles/chat-input.module.css";
import useAddChatLogic from "../logic-hooks/add-chat";

export default function ChatInputForm() {
  const { message, handleEnterKey, handleChatSubmit, handleMessageChange } =
    useAddChatLogic();
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <div className={classes.icon_container}>
          <AttachFileIcon className={classes.icon} />
        </div>
        <div className={classes.input_container}>
          <input
            className={classes.input}
            placeholder="Write a message"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleEnterKey}
          />
        </div>
        <div className={classes.icon_container}>
          <SendIcon className={classes.icon} onClick={handleChatSubmit} />
        </div>
      </div>
    </div>
  );
}
