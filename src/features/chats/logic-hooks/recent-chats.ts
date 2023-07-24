import { useReduxHooks, setSelectedBuddy } from "../index/imports";

export default function useRecentChatsLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { recentChats } = slices.chatSlice;
  const contacts = slices.contactSlice;

  const getBuddyInfo = (channelId: string) => {
    const buddyId = getBuddyIdFromChannelId(user!.id, channelId);
    const buddy = contacts.find((c) => c.userId === buddyId);

    if (!buddy) return { name: "", picUrl: "" };
    return { name: buddy.fullname, picUrl: buddy.photoUrl };
  };

  const handleRecentChatClick = (channelId: string) => {
    const buddyId = getBuddyIdFromChannelId(user!.id, channelId);
    dispatch(setSelectedBuddy(buddyId));
  };

  return { recentChats, getBuddyInfo, handleRecentChatClick };
}

const getBuddyIdFromChannelId = (userId: string, channelId: string) => {
  const ids = channelId.split("-");
  return ids.filter((id) => id !== userId).pop() ?? "";
};
