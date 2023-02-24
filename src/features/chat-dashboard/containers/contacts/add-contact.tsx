import { BasicFormContainer, Text, NumberInput } from "../../index/imports";

function AddContact() {
  return (
    <BasicFormContainer onSubmit={() => console.log("submitting")}>
      <Text name="fullname" label="Full Name" rules={[]} />
      <Text name="email" label="Email" rules={[]} />
      <NumberInput name="phone" label="Phone Number" rules={[]} />
    </BasicFormContainer>
  );
}

export default AddContact;
