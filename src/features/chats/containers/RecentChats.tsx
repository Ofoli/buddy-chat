import RecentChat from "../components/RecentChat";
import useRecentChatsLogic from "../logic-hooks/recent-chats";

const styles = {
  height: "800px",
  overflow: "scroll",
};

export default function RecentChats() {
  const { recentChats, getContactInfo, handleRecentChatClick } =
    useRecentChatsLogic();

  return (
    <div style={styles}>
      {recentChats.map(({ id, message, channelId }) => (
        <RecentChat
          key={id}
          message={message}
          contactInfo={getContactInfo(channelId)}
          onClick={() => handleRecentChatClick(channelId)}
        />
      ))}
    </div>
  );
}
