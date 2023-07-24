import { Timestamp } from "firebase/firestore";
import { useMemo } from "react";
import classes from "../styles/chats-and-chat.module.css";
import { formatChatTime } from "../logic-hooks/chats";

interface ChatProps {
  userIsSource: boolean;
  message: string;
  createdAt: Timestamp;
  chatRef: React.RefObject<HTMLDivElement> | null;
}

type SelectedClassType = {
  parent: string;
  child: string;
};

export default function Chat(props: ChatProps) {
  const { userIsSource, message, createdAt, chatRef } = props;
  const selectedClass = getClassName(userIsSource);
  const time = useMemo(() => formatChatTime(createdAt), []);

  return (
    <div className={selectedClass.parent} ref={chatRef}>
      <div className={selectedClass.child}>
        <div className={classes.chat}>{message}</div>
        <p className={classes.chat_time}>{time}</p>
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
