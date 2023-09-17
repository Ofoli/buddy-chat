import { useState } from "react";
import {
  useReduxHooks,
  loginRequested,
  registerRequested,
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
  removeRequestError,
} from "../index/imports";
import type { LoginData, RegisterData } from "../index/imports";

type ComponentType = "Login" | "Register";

const COMPONENTS = {
  LOGIN: "Login",
  REGISTER: "Register",
} as const;

export default function useLoginRegisterLogic() {
  const [component, setComponent] = useState<ComponentType>(COMPONENTS.LOGIN);
  const { dispatch, slices } = useReduxHooks();
  const { errors, loadingActions } = slices.uiSlice;
  const error = errors.find(
    ({ action }) => action === LOGIN_REQUESTED || action === REGISTER_REQUESTED
  );

  const isLoginComponent = component === COMPONENTS.LOGIN;
  const isRegisterComponent = component === COMPONENTS.REGISTER;
  const toggleButtonLabel = isLoginComponent
    ? COMPONENTS.REGISTER
    : COMPONENTS.LOGIN;

  const isLoginLoading = loadingActions.includes(LOGIN_REQUESTED);
  const isRegisterLoading = loadingActions.includes(REGISTER_REQUESTED);

  const toggleComponent = () => setComponent(toggleButtonLabel);
  const handleErrorClose = () => dispatch(removeRequestError(error!.action));
  const handleLoginSubmit = (values: LoginData) =>
    dispatch(loginRequested(values));
  const handleRegisterSubmit = (values: RegisterData) =>
    dispatch(registerRequested(values));

  return {
    state: {
      isLoginComponent,
      isRegisterComponent,
      isLoginLoading,
      isRegisterLoading,
      toggleButtonLabel,
      error,
    },
    handlers: {
      toggleComponent,
      handleLoginSubmit,
      handleRegisterSubmit,
      handleErrorClose,
    },
  };
}
