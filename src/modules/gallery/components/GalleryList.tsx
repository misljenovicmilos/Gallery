import React, { useEffect, useState } from "react";
import { Button } from "components";
import { likesSelector } from "modules/likes/redux";
import { RoutesTypes } from "modules/routing";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import spin from "assets/images/spin.svg";
import searchIcon from "assets/images/search.svg";
import heartBlack from "assets/images/heart.svg";
import { GalleryItem, useImg } from "modules/gallery";
export const GalleryList: React.FC = () => {
  const [search, setSearch] = useState("");
  const { likeData } = useSelector(likesSelector.getState);
  const history = useNavigate();
  const { handleData, response, totalResults, isLoading } = useImg();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  useEffect(() => {
    let searchImg = search.replace(/\s/g, "+").toLowerCase();
    handleData(searchImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const handleClick = () => history(RoutesTypes.LikedImagesPage);
  return (
    <>
      <div className="flex header">
        <div></div>
        <div className="search">
          <input
            id="search"
            className="search__input"
            placeholder="Search..."
            type="text"
            onChange={handleChange}
            value={search}
          />
          <img
            className="search__input--label"
            src={searchIcon}
            alt="search-icon"
          />
        </div>
        <div className="likes">
          <Button className="button button--close" onClick={handleClick}>
            <img className="heart" src={heartBlack} alt="heart" />
            <p className="likes__number">{likeData.length}</p>
          </Button>
        </div>
      </div>
      {isLoading ? (
        <img className="flex spin" src={spin} alt="loading" />
      ) : totalResults > 0 ? (
        <div className="grid">
          {response?.map((item, index) => (
            <GalleryItem key={index} props={item} />
          ))}
        </div>
      ) : (
        <h2 className="flex justify-content-center">Item not found</h2>
      )}
    </>
  );
};
