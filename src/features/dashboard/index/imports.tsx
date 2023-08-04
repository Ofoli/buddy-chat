import CustomMenu from "../../../components/ui/CustomMenu";
import CustomModal from "../../../components/ui/CustomModal";
import SearchHistory from "../../../components/ui/SearchHistory";
import Contacts from "../../contacts/containers/Contacts";
import ChatSpace from "../../chats/containers/ChatSpace";
import UserProfile from "../../user/containers/UserProfile";
import { logoutRequested } from "../../../libs/redux/ducks/auth";
import {
  openResultPanel,
  closeResultPanel,
} from "../../../libs/redux/ducks/ui";
import useReduxHooks from "../../../libs/redux/use-redux";

import type { UIState } from "../../../types/store-slices";
export type { UIState };

export {
  CustomMenu,
  CustomModal,
  SearchHistory,
  // containers
  Contacts,
  ChatSpace,
  UserProfile,
  //redux
  useReduxHooks,
  logoutRequested,
  openResultPanel,
  closeResultPanel,
};
