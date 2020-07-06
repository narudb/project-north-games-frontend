const initialState = [];

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-ALL':
      return [...state, action.payload.content];
    default:
      break;
  }
  return state;
};

export default newsReducer;
