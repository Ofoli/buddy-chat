import type { LoginData } from "../index/imports";
import { BasicFormContainer, Text, PasswordInput } from "../index/imports";

interface LoginFormProps {
  onSubmit: (values: LoginData) => void;
}
export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <div>
      <h1>Log In</h1>
      <BasicFormContainer<LoginData> btnLabel="Login" onSubmit={onSubmit}>
        <Text name="email" label="Email" type="email" />
        <PasswordInput name="password" label="Password" />
      </BasicFormContainer>
    </div>
  );
}
