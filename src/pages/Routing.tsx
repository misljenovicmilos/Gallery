import { Route, Routes } from "react-router";
import { LikedImagesPage } from "views/LikedImagesPage";
import { HomePage } from "views/HomePage";
import { PublicRoute, RoutesTypes } from "modules/routing";

export const Routing: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path={RoutesTypes.HomePage}
          element={<PublicRoute component={HomePage} />}
        />
        <Route
          path={RoutesTypes.LikedImagesPage}
          element={<PublicRoute component={LikedImagesPage} />}
        />
      </Routes>
    </>
  );
};
