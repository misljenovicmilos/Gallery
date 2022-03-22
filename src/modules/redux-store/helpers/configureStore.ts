import { likesReducer } from "modules/likes/redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const configureStore = () => {
  const rootReducer = {
    likes: likesReducer,
  };
  if (process.env.NODE_ENV === "development") {
    return createStore(
      combineReducers(rootReducer),
      composeWithDevTools(applyMiddleware(thunk))
    );
  } else return createStore(combineReducers(rootReducer));
};
const storeState = configureStore().getState;
export type RootState = ReturnType<typeof storeState>;
