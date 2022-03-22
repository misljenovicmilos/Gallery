import { Input } from "components";
import React from "react";
import { likesSelector, useLike } from "modules/likes";
import { useSelector } from "react-redux";
import heartRed from "assets/images/heart-red.svg";
import heartBlack from "assets/images/heart-black.svg";
import { ImgType } from "modules/gallery";
interface Props {
  props: ImgType;
}
export const Like: React.FC<Props> = ({ props }) => {
  const { handleData, handleUnlike } = useLike();
  const { likeData, id } = useSelector(likesSelector.getState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) handleData(props);

    if (likeData.find((item) => item.id === id)) handleUnlike(id);
  };
  return (
    <>
      <Input
        type="checkbox"
        onChange={handleChange}
        id="like"
        inputStyle="input"
        labelStyle="heart__label"
      >
        {likeData.find((item) => item.id === id) ? (
          <img className="heart__color" src={heartRed} alt="heart" />
        ) : (
          <img className="heart__color" src={heartBlack} alt="heart" />
        )}
      </Input>
    </>
  );
};
