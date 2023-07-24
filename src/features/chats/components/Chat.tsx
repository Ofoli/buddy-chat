import { useMemo } from "react";
import { Timestamp } from "firebase/firestore";
import classes from "../styles/chats-and-chat.module.css";

interface ChatProps {
  userIsSource: boolean;
  message: string;
  createdAt: Date;
}

type SelectedClassType = {
  parent: string;
  child: string;
};

export default function Chat(props: ChatProps) {
  const { userIsSource, message, createdAt } = props;
  const selectedClass = getClassName(userIsSource);
  // const time = useMemo(() => formatChatTime(createdAt), []);

  // console.log({ time });

  return (
    <div className={selectedClass.parent}>
      <div className={selectedClass.child}>
        <div className={classes.chat}>{message}</div>
        <p className={classes.chat_time}>q</p>
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

const formatChatTime = (createdAt: Date) => {
  const hour = createdAt.getHours();
  const min = createdAt.getHours();
  const timestamp = `${hour}:${Number(min) > 9 ? min : "0" + min}`;
  return timestamp;
};
