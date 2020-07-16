const initial = {
  eventsData: [],
};

const eventsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_ALL_EVENTS':
      return {
        ...state,
        eventsData: action.data,
      };
    default:
      break;
  }
  return state;
};

export default eventsReducer;
