import { useState } from "react";
import type { LoginData, RegisterData } from "../index/imports";

type ComponentType = "Login" | "Register";

const COMPONENTS = {
  LOGIN: "Login",
  REGISTER: "Register",
} as const;

export default function useLoginRegisterLogic() {
  const [component, setComponent] = useState<ComponentType>(COMPONENTS.LOGIN);

  const isLoginComponent = component === COMPONENTS.LOGIN;
  const isRegisterComponent = component === COMPONENTS.REGISTER;
  const toggleButtonLabel = isLoginComponent
    ? COMPONENTS.REGISTER
    : COMPONENTS.LOGIN;
  const toggleComponent = () => setComponent(toggleButtonLabel);

  const handleLoginSubmit = (values: LoginData) => console.log(values);
  const handleRegisterSubmit = (values: RegisterData) => console.log(values);

  return {
    state: { isLoginComponent, isRegisterComponent, toggleButtonLabel },
    handlers: { toggleComponent, handleLoginSubmit, handleRegisterSubmit },
  };
}
