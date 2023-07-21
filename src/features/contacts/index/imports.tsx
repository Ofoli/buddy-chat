import CustomMenu from "../../../components/ui/CustomMenu";
import CustomModal from "../../../components/ui/CustomModal";
import BasicFormContainer from "../../../components/form/basic-form-container";
import { Text } from "../../../components/form/basic-inputs";
import BaseButton from "../../../components/form/button";
import { useSideSpaceContext } from "../../dashboard/containers/SideSpace";
import useReduxHooks from "../../../libs/redux/use-redux";
import { removeRequestSuccessMessage } from "../../../libs/redux/ducks/ui";
import {
  ADD_CONTACT_REQUESTED,
  requestAddContact,
  requestFetchContacts,
  setSelectedContact,
} from "../../../libs/redux/ducks/contact";
import type {
  Contact,
  DeleteContactData,
  ContactData,
} from "../../../types/user";

export type { Contact, DeleteContactData, ContactData };

export {
  CustomMenu,
  BasicFormContainer,
  CustomModal,
  Text,
  BaseButton,
  useSideSpaceContext,
  //redux
  ADD_CONTACT_REQUESTED,
  useReduxHooks,
  setSelectedContact,
  requestAddContact,
  requestFetchContacts,
  removeRequestSuccessMessage,
};
