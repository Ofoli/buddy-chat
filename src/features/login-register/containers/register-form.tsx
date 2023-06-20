import type { RegisterData } from "../index/imports";
import { BasicFormContainer, Text, PasswordInput } from "../index/imports";

interface RegisterFormProps {
  onSubmit: (values: RegisterData) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  return (
    <div>
      <h1>Create Account</h1>
      <BasicFormContainer<RegisterData> btnLabel="Submit" onSubmit={onSubmit}>
        <Text name="fullname" label="Full Name" type="text" />
        <Text name="email" label="Email" type="email" />
        <PasswordInput name="password" label="Password" />
      </BasicFormContainer>
    </div>
  );
}
