import { ImgType } from "modules/gallery";
import { useDispatch } from "react-redux";
import { LikeActionTypes } from "modules/likes";

export const useLike = () => {
  const dispatch = useDispatch();
  const handleData = (data: ImgType) => {
    dispatch({ type: LikeActionTypes.LikeData, payload: data });
  };
  const handleId = (id: number) => {
    dispatch({ type: LikeActionTypes.Id, payload: id });
  };
  const handleUnlike = (id: number) => {
    dispatch({ type: LikeActionTypes.Unlike, payload: id });
  };
  return { handleData, handleId, handleUnlike };
};
