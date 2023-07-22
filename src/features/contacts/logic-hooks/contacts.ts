import { useState, useEffect } from "react";
import {
  useReduxHooks,
  requestFetchContacts,
  requestIsActiveUser,
  setSelectedBuddy,
  clearSelectedBuddy,
  useSideSpaceContext,
} from "../index/imports";

export default function useContactsLogicHook() {
  const [isAddContactFormOpen, setIsAddContactFormOpen] = useState(false);
  const { setShowContacts } = useSideSpaceContext();
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const contacts = slices.contactSlice;

  const openAddContactForm = () => setIsAddContactFormOpen(true);
  const closeAddContactForm = () => setIsAddContactFormOpen(false);
  const handleContactClick = (id: string) => {
    setShowContacts(false);
    const contact = contacts.find((c) => c.id === id)!;
    const buddyId = contact.userId;

    if (buddyId !== "") return dispatch(setSelectedBuddy(buddyId));

    //check whether the contact is currently active and update it
    dispatch(clearSelectedBuddy());
    return dispatch(requestIsActiveUser(contact));
  };

  useEffect(() => {
    dispatch(requestFetchContacts(user!.id));
  }, []);

  return {
    state: { isAddContactFormOpen, contacts },
    handlers: {
      openAddContactForm,
      closeAddContactForm,
      handleContactClick,
    },
  };
}
