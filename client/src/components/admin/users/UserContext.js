export const userState = {
  users: [],
  addUserModal: false,
  editUserModal: {
    modal: false,
    uId: null,
    name: "",
    password: "",
    userRole:"",
    phoneNumber:""
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
          name: action.name,
          password: action.password,
          userRole: action.userRole,
          phoneNumber:action.phoneNumber
        },
      };
    case "editUserModalClose":
      return {
        ...state,
        editUserModal: {
          modal: false,
          uId: null,
          name: "",
          password: "",
          userRole:"",
          phoneNumber:""
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
