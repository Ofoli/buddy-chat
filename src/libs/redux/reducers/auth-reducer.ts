const initialState = { id: null, email: "", phone: "", profilePhotoSrc: "" };

const authReducer = (state = initialState, action: { type: string }) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
