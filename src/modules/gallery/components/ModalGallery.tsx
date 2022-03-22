import React from "react";
import { Button } from "components";
import { Like } from "modules/likes";
import { ImgType } from "modules/gallery";
import close from "assets/images/close.svg";
interface Props {
  handleClickModal: VoidFunction;
  isModal: boolean;
  props: ImgType;
}
export const ModalGallery: React.FC<Props> = ({
  handleClickModal,
  isModal,
  props,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.target as any;
    if (id === "modal") handleClickModal();
  };
  return (
    <>
      {isModal && (
        <div
          className="flex justify-content-center"
          id="modal"
          onClick={handleClick}
        >
          <div className="modal__content">
            <div className="heart__img">
              <img src={props.webformatURL} alt={props.tags} />
              <Like props={props} />
            </div>
            <Button onClick={handleClickModal} className="button button--close">
              <img className="close close__img" src={close} alt="heart" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
