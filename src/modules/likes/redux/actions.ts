import { ImgType } from "modules/gallery";
import { LikeActionTypes } from "modules/likes";

export type LikesActions =
  | { type: typeof LikeActionTypes.LikeData; payload: ImgType[] }
  | { type: typeof LikeActionTypes.Unlike; payload: number }
  | { type: typeof LikeActionTypes.Id; payload: number };
