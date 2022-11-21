import ChatInput from "../../components/form/ChatInput";
import Chats from "../chats/Chats";
import ChatSpaceHeader from "../chats/ChatSpaceHeader";

const styles: React.CSSProperties = {
  height: "inherit",
};
export default function ChatSpace() {
  return (
    <div style={styles}>
      <ChatSpaceHeader />
      <Chats />
      <ChatInput />
    </div>
  );
}
