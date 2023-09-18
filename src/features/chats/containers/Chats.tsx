import classes from "../styles/chats-and-chat.module.css";
import Chat from "../components/Chat";
import useChatsLogic from "../logic-hooks/chats";

export default function Chats() {
  const { chats, userId, getChatRef } = useChatsLogic();

  return (
    <div className={classes.chats}>
      {chats.map((chat, idx) => (
        <Chat
          key={chat.id}
          userIsSource={chat.source === userId}
          message={chat.message}
          createdAt={chat.createdAt}
          chatRef={getChatRef(idx)}
        />
      ))}
    </div>
  );
}
