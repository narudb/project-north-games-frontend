const store = {
  latClient: 50.636879,
  longClient: 3.06349,
};

const positionReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_LATITUDE':
      return {
        ...store,
        latClient: action.latClient,
      };
    case 'GET_LONGITUDE':
      return {
        ...store,
        longClient: action.longClient,
      };
    default:
      break;
  }
  return state;
};

export default positionReducer;
