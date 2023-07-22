import { BasicFormContainer, Text } from "../index/imports";
import useAddContactLogic from "../logic-hooks/add-contact";
import type { ContactFormData } from "../logic-hooks/add-contact";

interface AddContactProps {
  onClose: () => void;
}
function AddContact({ onClose }: AddContactProps) {
  const { state, handlers } = useAddContactLogic(onClose);
  const { isLoading, error, successMessage, isSuccess } = state;
  const { handleSubmit, closeModal } = handlers;

  const AddContactForm = (
    <BasicFormContainer<ContactFormData>
      btnLabel="Create Contact"
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
        {error !== undefined && error.message}
      </p>
      <Text name="fullname" label="Full Name" type="text" />
      <Text name="email" label="Email" type="email" />
    </BasicFormContainer>
  );

  const ContactCreatedForm = (
    <BasicFormContainer btnLabel="Close" onSubmit={closeModal}>
      <h3 style={{ textAlign: "center" }}>{successMessage}</h3>
    </BasicFormContainer>
  );

  if (isSuccess) return ContactCreatedForm;

  return AddContactForm;
}

export default AddContact;
