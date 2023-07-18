import ChatInputForm from "./AddChat";
import Chats from "./Chats";
import ChatSpaceHeader from "./ChatSpaceHeader";

const styles: React.CSSProperties = {
  height: "inherit",
};
export default function ChatSpace() {
  return (
    <div style={styles}>
      <ChatSpaceHeader />
      <Chats />
      <ChatInputForm />
    </div>
  );
}
