import { useReduxHooks, setSelectedBuddy } from "../index/imports";

export default function useRecentChatsLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { recentChats } = slices.chatSlice;
  const contacts = slices.contactSlice;

  const getBuddyInfo = (channelId: string) => {
    const buddyId = getContactIdFromChannelId(user!.id, channelId);
    const buddy = contacts.find((c) => c.userId === buddyId);

    if (!buddy) return { name: "", picUrl: "" };
    return { name: buddy.fullname, picUrl: buddy.photoUrl };
  };

  const handleRecentChatClick = (channelId: string) => {
    const contactId = getContactIdFromChannelId(user!.id, channelId);
    const buddyId = contacts.find((c) => c.id === contactId)!.userId;
    dispatch(setSelectedBuddy(buddyId));
  };

  return { recentChats, getBuddyInfo, handleRecentChatClick };
}

const getContactIdFromChannelId = (userId: string, channelId: string) => {
  const ids = channelId.split("-");
  return ids.filter((id) => id !== userId).pop() ?? "";
};
