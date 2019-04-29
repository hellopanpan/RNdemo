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
const buylist = (state = [], action) => {
  switch (action.type) {
    case 'ADDBUYLIST':
      console.log(action.list)
      state.push(action.list)
      return state;
    case 'REMOVEBUYLIST':
      let stateArr = [].concat(state)
      stateArr.splice(action.index, 1)
      return stateArr
    default:
      return state;
  }
}
const location = (state = '定位中...', action) => {
  switch (action.type) {
    case 'UPDATELOCATION':
      return action.location;
    default:
      return state;
  }
};
const address = (state = [], action) => {
  switch (action.type) {
    case 'ADDADDRESS':
      let stateAdressCopy1 = [].concat(state)
      let objccp = Object.assign({id: state.length}, action.address)
      stateAdressCopy1.push(objccp)
      return stateAdressCopy1;
    case 'UPDATEADDRESS':
      let addressArr = [].concat(state)
      state.map((item, index) => {
        if(item.id == action.address.id) {
          addressArr.splice(index, 1, action.address)
        }
      }) 
      return addressArr;
    case 'DELETEADDRESS':
      let addressArr2 = [].concat(state)
      let indexa = -1;
      addressArr2.map((item, index) => {
        if(item.id == action.address.id) {
          indexa = index
        }
      })
      addressArr2.splice(indexa, 1);
      return addressArr2;
    default:
      return state;
  };
};
const selectAddress = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTADDRESS':
      let selectobj = action.address; 
      return selectobj;
    default:
      return state;
  }
};
let reducer	 = combineReducers({
  reducer1, 
  reducer2,
  shoplist,
  buylist,
  location,
  address,
  selectAddress
})
export default reducer;