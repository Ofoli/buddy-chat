import classes from "../../styles/chats-and-chat.module.css";

const CHAT_TYPES = {
  sender: "sender",
  receiver: "receiver",
};

type ChatType = "sender" | "receiver";

interface ChatProps {
  type: ChatType;
}

type SelectedClassType = {
  parent: string;
  child: string;
};

export default function Chat(props: ChatProps) {
  const { type } = props;
  const selectedClass = getClassName(type);

  console.log({ selectedClass });
  return (
    <div className={selectedClass.parent}>
      <div className={selectedClass.child}>
        <div className={classes.chat}>
          lkn;sveJWbev;kjbwkvEKJVwlkn;sveJWbev
          kjbwkvEKJVwlkn;sveJWbev;kjbwkvEKJVwlkn sveJWbev;kjbwkvEKJVwlkn
          sveJWbev;kjbwkvEKJVwlkn sveJWbev;kjbwkvEKJVwlkn sveJWbev
          kjbwkvEKJVwlkn;sveJWbev kjbwkvEKJVwlkn;sveJWbev
          kjbwkvEKJVwlkn;sveJWbev;kjbwkvEKJVwlkn
          sveJWbev;kjbwkvEKJVwlkn;sveJWbev;kjbwkvEKJVw
        </div>
      </div>
    </div>
  );
}

const getClassName = (type: ChatType): SelectedClassType => {
  const senderClasses = {
    parent: classes.sender_container_parent,
    child: classes.sender_chat_container,
  };
  const receiverClasses = {
    parent: classes.receiver_container_parent,
    child: classes.receiver_chat_container,
  };
  return type === CHAT_TYPES.sender ? senderClasses : receiverClasses;
};
