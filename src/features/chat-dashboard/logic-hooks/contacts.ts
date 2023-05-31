import { useState } from "react";

export default function useContactsLogicHook() {
  const [isAddContactFormOpen, setIsAddContactFormOpen] = useState(false);

  const openAddContactForm = () => setIsAddContactFormOpen(true);
  const closeAddContactForm = () => setIsAddContactFormOpen(false);

  return {
    modals: { isAddContactFormOpen },
    data: {},
    handlers: { openAddContactForm, closeAddContactForm },
  };
}
