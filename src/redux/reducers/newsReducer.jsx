const store = {
  oneNews: {},
};

const newsReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return {
        ...store,
        oneNews: action.data,
      };
    default:
      break;
  }
  return state;
};

export default newsReducer;
