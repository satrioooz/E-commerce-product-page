import { legacy_createStore } from "redux";
import { DELETE } from "../components/Cart";
import { DECREMENT, INCREMENT, ADD_CART } from "../components/Home";

const initState = {
  Product: [],
  count: 1,
  price: 125,
  items: 0,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        price: state.price - 125,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        price: state.price + 125,
      };
    case ADD_CART:
      return {
        ...state,
        // Product: action.payload,
        Product: [...state.Product, action.payload],
        items: action.count,
      };
    case DELETE:
      return {
        ...state,
        Product: state.Product.filter((item) => item.id !== action.payload),
      }
    default:
      return state;
  }
};

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
