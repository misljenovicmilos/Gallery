import React from "react";
import { Button } from "components";
import { GalleryItem } from "modules/gallery";
import { RoutesTypes } from "modules/routing";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { likesSelector } from "modules/likes";
import home from "assets/images/home.svg";

export const LikesImgList: React.FC = () => {
  const history = useNavigate();
  const { likeData } = useSelector(likesSelector.getState);
  const handleClick = () => history(RoutesTypes.HomePage);

  return (
    <>
      <div className="flex header">
        <div className="header__title">
          <h1>Liked images</h1>
        </div>
        <div></div>
        <div className="home">
          <Button className="button button--close" onClick={handleClick}>
            <img className="heart" src={home} alt="home" />
          </Button>
        </div>
      </div>
      <div className="grid">
        {likeData.map((item, index) => (
          <GalleryItem key={index} props={item} />
        ))}
      </div>
    </>
  );
};
