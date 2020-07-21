const initial = {
  loggedIn: false,
  authData: {},
  userData: {},
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
    case 'GET_USER':
      return {
        ...state,
        userData: { ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
