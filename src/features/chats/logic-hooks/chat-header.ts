import { useReduxHooks } from "../index/imports";

export default function useChatHeaderLogic() {
  const { slices } = useReduxHooks();
  const { buddyId } = slices.chatSlice;
  const contacts = slices.contactSlice;

  const contact = contacts.find(({ userId }) => userId === buddyId);

  return contact?.fullname;
}
