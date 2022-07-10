import {DECREMENT, INCREMENT, CHOOSE_MENU} from "../actions";

const initialState = {
  counter: 0,
  menuItem: 1,
};
  
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case CHOOSE_MENU: 
      return {...state, menuItem: action.data}; 
    default:
      return state;
  }
}
  
export default rootReducer;
  
