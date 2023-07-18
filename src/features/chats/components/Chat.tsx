import classes from "../styles/chats-and-chat.module.css";

interface ChatProps {
  userIsSource: boolean;
  message: string;
}

type SelectedClassType = {
  parent: string;
  child: string;
};

export default function Chat(props: ChatProps) {
  const { userIsSource, message } = props;
  const selectedClass = getClassName(userIsSource);

  return (
    <div className={selectedClass.parent}>
      <div className={selectedClass.child}>
        <div className={classes.chat}>{message}</div>
        <p className={classes.chat_time}>11:22</p>
      </div>
    </div>
  );
}

const getClassName = (userIsSource: boolean): SelectedClassType => {
  const senderClasses = {
    parent: classes.sender_container_parent,
    child: classes.sender_chat_container,
  };
  const receiverClasses = {
    parent: classes.receiver_container_parent,
    child: classes.receiver_chat_container,
  };
  return userIsSource ? senderClasses : receiverClasses;
};
