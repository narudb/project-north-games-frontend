const store = {
  roundsData: [],
  oneRound: {},
};

const roundsReducer = (state = store, action) => {
  switch (action.type) {
    case 'GET_ALL_ROUNDS':
      return {
        ...state,
        roundsData: action.data,
      };
    case 'GET_ONE_ROUND':
      return {
        ...state,
        oneRound: action.data,
      };

    default:
      break;
  }
  return state;
};

export default roundsReducer;
