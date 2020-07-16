const initial = {
  eventsData: [],
  oneEvent: {},
};

const eventsReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_ALL_EVENTS':
      return {
        ...state,
        eventsData: action.data,
      };
    case 'GET_ONE_EVENTS':
      return {
        ...state,
        oneEvent: action.data,
      };
    default:
      break;
  }
  return state;
};

export default eventsReducer;
