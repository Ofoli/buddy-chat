import BaseButton from "../../../components/form/button";
import Notification from "../../../components/ui/notification";
import CustomModal from "../../../components/ui/CustomModal";
import {
  Text,
  PasswordInput,
  NumberInput,
} from "../../../components/form/basic-inputs";
import BasicFormContainer from "../../../components/form/basic-form-container";
import AppLogo from "../../../components/logo/app-logo";
import useReduxHooks from "../../../libs/redux/use-redux";
import {
  loginRequested,
  registerRequested,
  requestProfileUpload,
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
  PROFILE_UPLOAD_REQUESTED,
} from "../../../libs/redux/ducks/auth";
import { removeRequestError } from "../../../libs/redux/ducks/ui";

import type { LoginData, RegisterData } from "../../../types/user";

export type { LoginData, RegisterData };

export {
  CustomModal,
  BasicFormContainer,
  BaseButton,
  Text,
  PasswordInput,
  NumberInput,
  AppLogo,
  Notification,
  //redux
  LOGIN_REQUESTED,
  REGISTER_REQUESTED,
  PROFILE_UPLOAD_REQUESTED,
  useReduxHooks,
  loginRequested,
  registerRequested,
  removeRequestError,
  requestProfileUpload,
};
