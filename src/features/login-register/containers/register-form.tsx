import { BasicFormContainer, Text, PasswordInput } from "../index/imports";

export default function RegisterForm() {
  const handleSubmit = (values: ObjectOfStringAndNumbers) => {
    console.log({ values });
  };

  return (
    <div>
      <h1>Create Account</h1>
      <BasicFormContainer btnLabel="Submit" onSubmit={handleSubmit}>
        <Text name="fullname" label="Full Name" type="text" />
        <Text name="email" label="Email" type="email" />
        <PasswordInput name="password" label="Password" />
      </BasicFormContainer>
    </div>
  );
}
