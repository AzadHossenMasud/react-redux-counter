import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// const logger = (store) => (next) => (action) => {
//   console.log(`Action: ${JSON.stringify(action)}`);
//   console.log(`Before: ${JSON.stringify(store.getState())}`);

//   const upcomming = [action].reduce(rootReducer, store.getState())
//   console.log(`Upcomming: ${JSON.stringify(upcomming)}`);
//   return next(action)
// };

const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(logger)) );

export default store;
