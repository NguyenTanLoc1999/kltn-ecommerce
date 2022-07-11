export const userState = {
  users: [],
  addUserModal: false,
  editUserModal: {
    modal: false,
    uId: null,
    userRole:"",
    status:""
  },
  loading: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    /* Get all user */
    case "fetchUserAndChangeState":
      return {
        ...state,
        users: action.payload,
      };
    /* Create a user */
    case "addUserModal":
      return {
        ...state,
        addUserModal: action.payload,
      };
    /* Edit a user */
    case "editUserModalOpen":
      return {
        ...state,
        editUserModal: {
          modal: true,
          uId: action.uId,
          userRole: action.userRole,
          status:action.status
        },
      };
    case "editUserModalClose":
      return {
        ...state,
        editUserModal: {
          modal: false,
          uId: null,
          userRole:"",
          status:""
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
