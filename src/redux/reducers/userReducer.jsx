const initial = {
  loggedIn: false,
  authData: {},
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        authData: { ...action.payload },
      };
    case 'LOGOUT':
      return {
        ...initial,
      };
    default:
      return state;
  }
};

export default userReducer;
