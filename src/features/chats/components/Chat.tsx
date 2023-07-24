import { Timestamp } from "firebase/firestore";
import { useMemo } from "react";
import classes from "../styles/chats-and-chat.module.css";

interface ChatProps {
  userIsSource: boolean;
  message: string;
  createdAt: Timestamp;
}

type SelectedClassType = {
  parent: string;
  child: string;
};

export default function Chat(props: ChatProps) {
  const { userIsSource, message, createdAt } = props;
  const selectedClass = getClassName(userIsSource);
  const time = useMemo(() => formatChatTime(createdAt), []);

  return (
    <div className={selectedClass.parent}>
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

const formatChatTime = (createdAt: Timestamp) => {
  if (!createdAt) return "..";
  const { seconds, nanoseconds } = createdAt;
  const milliseconds = nanoseconds / 1000000 + seconds * 1000;
  const date = new Date(milliseconds);
  const hour = date.getHours();
  const min = date.getMinutes();
  const timestamp = `${hour}:${Number(min) > 9 ? min : "0" + min}`;

  return timestamp;
};
