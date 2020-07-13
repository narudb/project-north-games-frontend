const store = {
  newsData: [],
};

const newsReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_ALL_NEWS':
      return {
        ...store,
        newsData: action.data,
      };

    default:
      break;
  }
  return state;
};

export default newsReducer;
