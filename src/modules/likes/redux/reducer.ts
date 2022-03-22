import { LikeState, LikesActions } from "modules/likes";
import { LikeActionTypes } from "./types";
const INITIAL_STATE: LikeState = {
  likeData: [],
  id: 0,
};
export const likesReducer = (
  state = INITIAL_STATE,
  action: LikesActions
): LikeState => {
  switch (action.type) {
    case LikeActionTypes.LikeData:
      return {
        ...state,
        likeData: state.likeData.concat(action.payload),
      };

    case LikeActionTypes.Unlike:
      return {
        ...state,
        likeData: state.likeData.filter((item) => item.id !== action.payload),
      };
    case LikeActionTypes.Id:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
