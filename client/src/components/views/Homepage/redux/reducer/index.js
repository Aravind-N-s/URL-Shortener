
const urlReducer = (state = [], action) => {
  console.log({action},'url')
  switch (action.type) {
    case "SET_URL": {
      return [...action.payload];
    }
    case "RESET_URL": {
      return [];
    }
    default:
      return [ ...state ];
  }
};

export default urlReducer;
