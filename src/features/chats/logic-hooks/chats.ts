import { useReduxHooks } from "../index/imports";

export default function useChatsLogic() {
  const { slices } = useReduxHooks();
  const { id } = slices.authSlice.user!;
  const { chats } = slices.chatSlice;

  return { chats, userId: id };
}
