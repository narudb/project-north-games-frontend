const initialStore = {
  groupsData: [],
  oneGroup: {},
  authorOfGroup: {},
};

const groupsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'GET_ALL_GROUPS':
      return {
        ...state,
        groupsData: action.data,
      };
    case 'GET_ONE_GROUP':
      return {
        ...state,
        oneGroup: action.data,
      };
    case 'GET_AUTHOR_OF_GROUP':
      return {
        ...state,
        authorOfGroup: action.data,
      };

    default:
      break;
  }
  return state;
};

export default groupsReducer;
