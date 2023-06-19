type RequestStatus = {
  action: string;
  message: string;
};

interface UIState {
  loadingActions: string[];
  errors: RequestStatus[];
  successMessages: RequestStatus[];
}

export type { RequestStatus, UIState };
