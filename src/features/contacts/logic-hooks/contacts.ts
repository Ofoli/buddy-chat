import { useState, useEffect } from "react";
import {
  useReduxHooks,
  requestFetchContacts,
  setSelectedContact,
  useSideSpaceContext,
} from "../index/imports";

export default function useContactsLogicHook() {
  const [isAddContactFormOpen, setIsAddContactFormOpen] = useState(false);
  const { setShowContacts } = useSideSpaceContext();
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { contacts } = slices.contactSlice;

  const openAddContactForm = () => setIsAddContactFormOpen(true);
  const closeAddContactForm = () => setIsAddContactFormOpen(false);
  const handleContactClick = (id: string) => {
    setShowContacts(false);
    dispatch(setSelectedContact(id));
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
