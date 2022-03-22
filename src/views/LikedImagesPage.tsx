import { LikesImgList } from "modules/likes";
import React from "react";

export const LikedImagesPage: React.FC = () => {
  return (
    <div className="flex justify-content-center">
      <div className="wrapper">
        <LikesImgList />
      </div>
    </div>
  );
};
