import { BasicFormContainer, Text, NumberInput } from "../../index/imports";
import type { ContactData } from "../../../../types/user";

function AddContact() {
  const onSubmit = (values: ContactData) => {
    console.log({ values });
  };
  return (
    <BasicFormContainer<ContactData>
      onSubmit={onSubmit}
      btnLabel="Create Contact"
    >
      <Text name="fullname" label="Full Name" type="text" />
      <Text name="email" label="Email" type="email" />
      <NumberInput name="phone" label="Phone Number" />
    </BasicFormContainer>
  );
}

export default AddContact;
