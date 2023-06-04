import { BasicFormContainer, Text, PasswordInput } from "../index/imports";

export default function LoginForm() {
  const handleSubmit = (values: ObjectOfStringAndNumbers) => {
    console.log({ values });
  };

  return (
    <div>
      <h1>Log In</h1>
      <BasicFormContainer btnLabel="Login" onSubmit={handleSubmit}>
        <Text name="email" label="Email" type="email" />
        <PasswordInput name="password" label="Password" />
      </BasicFormContainer>
    </div>
  );
}
