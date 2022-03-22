import { RootState } from "modules/redux-store";
const getState = (state: RootState) => state.likes;
export const likesSelector = {
  getState,
};
