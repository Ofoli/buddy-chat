import { useState } from "react";
import type { LoginData, RegisterData } from "../index/imports";
import useReduxHooks from "../../../libs/redux/use-redux";
import {
  loginRequested,
  registerRequested,
} from "../../../libs/redux/ducks/auth";

type ComponentType = "Login" | "Register";

const COMPONENTS = {
  LOGIN: "Login",
  REGISTER: "Register",
} as const;

export default function useLoginRegisterLogic() {
  const { dispatch } = useReduxHooks();
  const [component, setComponent] = useState<ComponentType>(COMPONENTS.LOGIN);

  const isLoginComponent = component === COMPONENTS.LOGIN;
  const isRegisterComponent = component === COMPONENTS.REGISTER;
  const toggleButtonLabel = isLoginComponent
    ? COMPONENTS.REGISTER
    : COMPONENTS.LOGIN;
  const toggleComponent = () => setComponent(toggleButtonLabel);

  const handleLoginSubmit = (values: LoginData) =>
    dispatch(loginRequested(values));
  const handleRegisterSubmit = (values: RegisterData) =>
    dispatch(registerRequested(values));

  return {
    state: { isLoginComponent, isRegisterComponent, toggleButtonLabel },
    handlers: { toggleComponent, handleLoginSubmit, handleRegisterSubmit },
  };
}
