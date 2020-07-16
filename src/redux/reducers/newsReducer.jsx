const initial = {
  newsData: [],
};

const newsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_ALL_NEWS':
      return {
        ...state,
        newsData: action.data,
      };

    default:
      break;
  }
  return state;
};

export default newsReducer;
