const newsReducer = (state = [], action) => {
  // get all news
  switch (action.type) {
    case 'GET-ALL':
      return state;
    default:
      return state;
  }
};

export default newsReducer;
