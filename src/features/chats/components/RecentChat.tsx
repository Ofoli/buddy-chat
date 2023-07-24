import { CardTemplate } from "../index/imports";

interface RecentChatProps {
  message: string;
  timestamp: string;
  contactInfo: { name: string; picUrl: string };
  onClick: () => void;
}

export default function RecentChat({
  message,
  timestamp,
  contactInfo,
  onClick,
}: RecentChatProps) {
  return (
    <CardTemplate
      name={contactInfo.name}
      text={message}
      picUrl={contactInfo.picUrl}
      onClick={onClick}
      chatCardProps={{ timestamp, unreadChatCount: 0 }}
    />
  );
}
