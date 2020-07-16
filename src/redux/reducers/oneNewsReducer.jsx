const initial = {
  oneNews: {},
};

const newsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_ONE_NEWS':
      return { ...state, oneNews: action.data };

    default:
      return state;
  }
};

export default newsReducer;
