import { BasicFormContainer, Text, NumberInput } from "../../index/imports";

function AddContact() {
  const onSubmit = (values: ObjectOfStringAndNumbers) => {
    console.log({ values });
  };
  return (
    <BasicFormContainer onSubmit={onSubmit}>
      <Text name="fullname" label="Full Name" type="text" />
      <Text name="email" label="Email" type="email" />
      <NumberInput name="phone" label="Phone Number" />
    </BasicFormContainer>
  );
}

export default AddContact;
