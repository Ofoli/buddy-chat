const initialState = {};

const uiReducer = (state = initialState, action: { type: string }) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default uiReducer;
