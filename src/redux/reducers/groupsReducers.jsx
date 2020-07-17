const store = {
  groupsData: [],
};

const groupsReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_ALL_GROUPS':
      return {
        ...store,
        groupsData: action.data,
      };

    default:
      break;
  }
  return state;
};

export default groupsReducer;
