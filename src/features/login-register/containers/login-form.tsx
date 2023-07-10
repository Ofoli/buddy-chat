import type { LoginData } from "../index/imports";
import { BasicFormContainer, Text, PasswordInput } from "../index/imports";

interface LoginFormProps {
  onSubmit: (values: LoginData) => void;
  isLoading: boolean;
}
export default function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  return (
    <div>
      <h1>Log In</h1>
      <BasicFormContainer<LoginData>
        btnLabel="Login"
        onSubmit={onSubmit}
        isLoading={isLoading}
      >
        <Text name="email" label="Email" type="email" />
        <PasswordInput name="password" label="Password" />
      </BasicFormContainer>
    </div>
  );
}
