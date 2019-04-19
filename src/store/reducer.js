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
const shoplist = (state = [], action) => {
  switch (action.type) {
    case 'INITSHOP':
      return action.list;
    case 'ADDSHOP':
      let statecopy = [].concat(state)
      statecopy.map(items => {
        items.childs.map(item => {
          if(item._id == action.id) {
            ++item.count;
          }
        })
      })
      return statecopy;
    case 'REDUCESHOP':
      let statecopy2 = [].concat(state)
      statecopy2.map(items => {
        items.childs.map(item => {
          if(item._id == action.id) {
            if(item.count > 0) --item.count;
          }
        })
      })
      console.log(statecopy2);
      return statecopy2;
    case 'CHANGEACTIVESHOP':
      let statecopy3 = [].concat(state)
      statecopy3.map(item => {
        item.active = false;
        if (item._id === action.id) {
          item.active = true
        }
      })
      return statecopy3;
    case 'REMOVESHOPCOUNT': 
      let statecopy4 = [].concat(state)
      statecopy4.map(items => {
        items.childs.map(item => {
          item.count = 0
        })
      })
      return statecopy4;
    default:
      return state;
  }
};
let reducer	 = combineReducers({
  reducer1, 
  reducer2,
  shoplist
})
export default reducer;