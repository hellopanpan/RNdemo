import {combineReducers} from "redux"
const reducer1 = (state = 'false', action) => {
  switch (action.type) {
    case 'CIRCLE':
      return 'true';
    case 'NOCIRCLE':
      return 'false';
    default:
      return state;
  }
};
const reducer2 = (state = false, action) => {
  switch (action.type) {
    case 'CIRCLE':
      return true;
    case 'NOCIRCLE':
      return false;
    default:
      return state;
  }
};
let reducer	 = combineReducers({
  reducer1, 
  reducer2
})
export default reducer;