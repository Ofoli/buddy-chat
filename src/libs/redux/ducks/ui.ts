import type { UIState } from "../../../types/store-slices";
import type { RequestStatus } from "../../../types/ui";
import {
  addRequestStatus,
  removeRequestStatus,
} from "../../../utils/request-status";

export const LOADING = {
  START: "START_LOADING",
  STOP: "STOP_LOADING",
} as const;

export const REQUEST_ERROR = {
  ADD: "ADD_ERROR",
  REMOVE: "REMOVE_ERROR",
  RESET: "RESET_ALL_ERRORS",
} as const;

export const REQUEST_SUCCESS = {
  ADD: "ADD_SUCCESS_MESSAGE",
  REMOVE: "REMOVE_SUCCESS_MESSAGE",
  RESET: "RESET_ALL_SUCCESS_MESSAGES",
} as const;

const OPEN_RESULT_PANEL = "OPEN_RESULT_PANEL";
const CLOSE_RESULT_PANEL = "CLOSE_RESULT_PANEL";

//loading
export const startAction = (action: string) => ({
  type: LOADING.START,
  payload: action,
});
export const stopAction = (action: string) => ({
  type: LOADING.STOP,
  payload: action,
});

//errors
export const clearAllRequestErrors = () => ({ type: REQUEST_ERROR.RESET });
export const addRequestError = (payload: RequestStatus) => ({
  type: REQUEST_ERROR.ADD,
  payload,
});
export const removeRequestError = (action: string) => ({
  type: REQUEST_ERROR.REMOVE,
  payload: action,
});

//success_messages
export const addRequestSuccessMessage = (payload: RequestStatus) => ({
  type: REQUEST_SUCCESS.ADD,
  payload,
});
export const removeRequestSuccessMessage = (action: string) => ({
  type: REQUEST_SUCCESS.REMOVE,
  payload: action,
});
export const resetAllRequestSuccessMessages = () => ({
  type: REQUEST_SUCCESS.RESET,
});

//result panel
export const openResultPanel = () => ({ type: OPEN_RESULT_PANEL });
export const closeResultPanel = () => ({ type: CLOSE_RESULT_PANEL });

const initialState: UIState = {
  loadingActions: [],
  errors: [],
  successMessages: [],
  isResultPanelOpen: false,
};

export default function uiReducer(
  state = initialState,
  action: { type: string; payload: RequestStatus | string | undefined }
) {
  const { type, payload } = action;

  switch (type) {
    case LOADING.START:
      return {
        ...state,
        loadingActions: [...state.loadingActions, payload],
      };

    case LOADING.STOP:
      return {
        ...state,
        loadingActions: state.loadingActions.filter(
          (action) => action !== payload
        ),
      };
    case REQUEST_ERROR.ADD: {
      const error = payload as RequestStatus;
      const updatedErrors = addRequestStatus(state.errors, error);
      return {
        ...state,
        errors: updatedErrors,
      };
    }
    case REQUEST_ERROR.REMOVE: {
      const action = payload as string;
      const updatedErrors = removeRequestStatus(state.errors, action);
      return {
        ...state,
        errors: updatedErrors,
      };
    }
    case REQUEST_SUCCESS.ADD: {
      const info = payload as RequestStatus;
      const updatedErrors = addRequestStatus(state.successMessages, info);
      return {
        ...state,
        successMessages: updatedErrors,
      };
    }
    case REQUEST_SUCCESS.REMOVE: {
      const action = payload as string;
      const updatedSuccessMessages = removeRequestStatus(
        state.successMessages,
        action
      );
      console.log(updatedSuccessMessages);
      return {
        ...state,
        successMessages: updatedSuccessMessages,
      };
    }
    case OPEN_RESULT_PANEL:
      return { ...state, isResultPanelOpen: true };
    case CLOSE_RESULT_PANEL:
      return { ...state, isResultPanelOpen: false };
    default:
      return state;
  }
}
