import CardTemplate from "./CardTemplate";

interface RecentChatType {
  id: string;
  name: string;
  message: string;
  picUrl: string;
}

type RecentChatProps = {
  chat: RecentChatType;
};
export default function RecentChat({ chat }: RecentChatProps) {
  const { name, message, picUrl } = chat;

  return <CardTemplate name={name} text={message} picUrl={picUrl} isChatCard />;
}
