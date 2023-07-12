import { useReduxHooks } from "../index/imports";

export default function useChatHeaderLogic() {
  const { slices } = useReduxHooks();
  const { selectedContactId, contacts } = slices.contactSlice;
  const contact = contacts.find(({ id }) => id === selectedContactId);
  return contact?.fullname;
}
