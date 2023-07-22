import CustomMenu from "../../../components/ui/CustomMenu";
import { Text, NumberInput } from "../../../components/form/basic-inputs";
import BasicFormContainer from "../../../components/form/basic-form-container";
import BaseButton from "../../../components/form/button";
import CardTemplate from "../../../components/ui/CardTemplate";
import useReduxHooks from "../../../libs/redux/use-redux";
import { logoutRequested } from "../../../libs/redux/ducks/auth";
import {
  requestCreateChat,
  setSelectedBuddy,
} from "../../../libs/redux/ducks/chat";
import { monitorOngoingChats } from "../../../libs/firebase/services/chat";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export type ChatDoc = QueryDocumentSnapshot<DocumentData>;

export {
  CustomMenu,
  BasicFormContainer,
  CardTemplate,
  Text,
  NumberInput,
  BaseButton,
  //redux
  logoutRequested,
  useReduxHooks,
  requestCreateChat,
  setSelectedBuddy,
  // firebase
  monitorOngoingChats,
};
