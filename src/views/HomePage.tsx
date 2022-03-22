import React from "react";
import { GalleryList } from "modules/gallery";

export const HomePage: React.FC = () => {
  return (
    <div className="flex justify-content-center">
      <div className="wrapper">
        <GalleryList />
      </div>
    </div>
  );
};
