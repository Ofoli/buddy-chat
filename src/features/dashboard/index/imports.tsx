import CustomMenu from "../../../components/ui/CustomMenu";
import CustomModal from "../../../components/ui/CustomModal";
import SearchHistory from "../../../components/ui/SearchHistory";
import Contacts from "../../contacts/containers/Contacts";
import ChatSpace from "../../chats/containers/ChatSpace";
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
  Contacts,
  ChatSpace,
  //redux
  useReduxHooks,
  logoutRequested,
  openResultPanel,
  closeResultPanel,
};
