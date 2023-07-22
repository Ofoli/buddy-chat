import { useReduxHooks, setSelectedBuddy } from "../index/imports";

export default function useRecentChatsLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { recentChats } = slices.chatSlice;
  const contacts = slices.contactSlice;

  const getContactInfo = (channelId: string) => {
    const contactId = getContactIdFromChannelId(user!.id, channelId);
    const contact = contacts.find((c) => c.id === contactId);

    if (!contact) return { name: "", picUrl: "" };
    return { name: contact.fullname, picUrl: contact.photoUrl };
  };

  const handleRecentChatClick = (channelId: string) => {
    const contactId = getContactIdFromChannelId(user!.id, channelId);
    const buddyId = contacts.find((c) => c.id === contactId)!.userId;
    dispatch(setSelectedBuddy(buddyId));
  };

  return { recentChats, getContactInfo, handleRecentChatClick };
}

const getContactIdFromChannelId = (userId: string, channelId: string) => {
  const ids = channelId.split("-");
  return ids.filter((id) => id !== userId).pop() ?? "";
};
