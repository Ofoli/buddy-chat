import { useState, useEffect } from "react";
import { useReduxHooks, requestFetchContacts } from "../index/imports";

export default function useContactsLogicHook() {
  const [isAddContactFormOpen, setIsAddContactFormOpen] = useState(false);
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { contacts } = slices.contactSlice;

  const openAddContactForm = () => setIsAddContactFormOpen(true);
  const closeAddContactForm = () => setIsAddContactFormOpen(false);

  useEffect(() => {
    dispatch(requestFetchContacts(user!.id));
  }, []);

  return {
    state: { isAddContactFormOpen, contacts },
    handlers: {
      openAddContactForm,
      closeAddContactForm,
    },
  };
}
