import { useState } from "react";
import type { LoginData, RegisterData } from "../index/imports";
import useReduxHooks from "../../../libs/redux/use-redux";
import {
  loginRequested,
  registerRequested,
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
} from "../../../libs/redux/ducks/auth";
import { UIState } from "../../../types/store-slices";
import { removeRequestError } from "../../../libs/redux/ducks/ui";

type ComponentType = "Login" | "Register";

const COMPONENTS = {
  LOGIN: "Login",
  REGISTER: "Register",
} as const;

export default function useLoginRegisterLogic() {
  const [component, setComponent] = useState<ComponentType>(COMPONENTS.LOGIN);
  const { dispatch, SLICES, sliceSelector } = useReduxHooks();
  const uiSlice = sliceSelector(SLICES.uiSlice) as UIState;
  const error = uiSlice.errors.find(
    ({ action }) => action === LOGIN_REQUESTED || action === REGISTER_REQUESTED
  );

  const isLoginComponent = component === COMPONENTS.LOGIN;
  const isRegisterComponent = component === COMPONENTS.REGISTER;
  const toggleButtonLabel = isLoginComponent
    ? COMPONENTS.REGISTER
    : COMPONENTS.LOGIN;

  const isLoginLoading = uiSlice.loadingActions.includes(LOGIN_REQUESTED);
  const isRegisterLoading = uiSlice.loadingActions.includes(REGISTER_REQUESTED);

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
