import RecentChat from "../../components/ui/RecentChat";

const styles = {
  height: "800px",
  overflow: "scroll",
};

export default function RecentChats() {
  const recentChats = [
    {
      id: "chat_00",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_01",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_02",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_02",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_04",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_05",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_06",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_07",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_08",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_09",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
    {
      id: "chat_10",
      name: "Albert Kubus",
      message: "hi, how are you",
      picUrl: "",
    },
  ];

  return (
    <div style={styles}>
      {recentChats.map((recentChat) => (
        <RecentChat key={recentChat.id} chat={recentChat} />
      ))}
    </div>
  );
}
