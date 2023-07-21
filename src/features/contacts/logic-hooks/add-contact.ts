import {
  useReduxHooks,
  requestAddContact,
  removeRequestSuccessMessage,
  ADD_CONTACT_REQUESTED,
} from "../index/imports";
import type { ContactData } from "../index/imports";

export type ContactFormData = Omit<ContactData, "userId">;

export default function useAddContactLogic(onClose: () => void) {
  const { dispatch, slices } = useReduxHooks();
  const { user } = slices.authSlice;
  const { loadingActions, errors, successMessages } = slices.uiSlice;

  const isLoading = loadingActions.includes(ADD_CONTACT_REQUESTED);
  const error = errors.find(({ action }) => action === ADD_CONTACT_REQUESTED);
  const success = successMessages.find(
    ({ action }) => action === ADD_CONTACT_REQUESTED
  );

  const handleSubmit = (data: ContactFormData) =>
    dispatch(requestAddContact({ ...data, ownerId: user!.id }));
  const closeModal = () => {
    onClose();
    setTimeout(
      () => dispatch(removeRequestSuccessMessage(ADD_CONTACT_REQUESTED)),
      100
    );
  };

  return {
    state: {
      isLoading,
      error,
      isSuccess: Boolean(success),
      successMessage: success?.message,
    },
    handlers: { handleSubmit, closeModal },
  };
}
