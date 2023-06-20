type Response = {
  action: string;
  message: string;
};

export const addRequestStatus = (
  statuses: Response[] = [],
  response: Response
) => {
  const previousStatus = statuses.find(
    (status) => status.action === response.action
  );
  const updatedStatuses = previousStatus
    ? statuses.map((status) =>
        status.action === response.action ? response : status
      )
    : [...statuses, response];
  return updatedStatuses;
};

export const removeRequestStatus = (
  statuses: Response[] = [],
  action: string
) => {
  return statuses.filter((status) => status.action !== action);
};
