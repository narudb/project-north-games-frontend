const initial = {
  oneGame: {},
};

const gameReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_ONE_GAME':
      return {
        ...state,
        oneGame: action.data,
      };
    default:
      break;
  }
  return state;
};

export default gameReducer;
