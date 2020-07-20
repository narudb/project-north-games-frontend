const initialStore = {
  groupsData: [],
  oneGroup: {},
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

    default:
      break;
  }
  return state;
};

export default groupsReducer;
