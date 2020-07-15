const store = {
  eventsData: [],
};

const eventsReducer = (state = { ...store }, action) => {
  switch (action.type) {
    case 'GET_ALL_EVENTS':
      return {
        ...store,
        eventsData: action.data,
      };
    default:
      break;
  }
  return state;
};

export default eventsReducer;
