const store = {
  roundsData: [],
};

const roundsReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_ALL_ROUNDS':
      return {
        ...store,
        roundsData: action.data,
      };

    default:
      break;
  }
  return state;
};

export default roundsReducer;
