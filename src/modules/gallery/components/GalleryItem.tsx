import React, { useState } from "react";
import { Button } from "components";
import { Like } from "modules/likes/components/Like";
import { useLike } from "modules/likes/hooks";
import arrows from "assets/images/arrows-expand.svg";
import { ImgType, ModalGallery } from "modules/gallery";
interface Props {
  props: ImgType;
}

export const GalleryItem: React.FC<Props> = ({ props }) => {
  const { handleId } = useLike();
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  const handleClickModal = () => {
    setModal(false);
  };
  const handleHover = () => {
    setHover(true);
    handleId(props.id);
  };
  return (
    <>
      {props.webformatWidth > props.webformatHeight ? (
        props.webformatHeight > 450 ? (
          <div
            className="item__large"
            onMouseEnter={handleHover}
            onMouseLeave={() => setHover(false)}
          >
            <img src={props.webformatURL} alt={props.tags} />
            {hover && (
              <>
                <Like props={props} />
                <Button className="button button--close" onClick={handleClick}>
                  <img className="modal__arrows" src={arrows} alt="arrows" />
                </Button>
              </>
            )}
          </div>
        ) : (
          <div
            className="item__horizontal"
            onMouseEnter={handleHover}
            onMouseLeave={() => setHover(false)}
          >
            <img src={props.webformatURL} alt={props.tags} />
            {hover && (
              <>
                <Like props={props} />
                <Button className="button button--close" onClick={handleClick}>
                  <img className="modal__arrows" src={arrows} alt="arrows" />
                </Button>
              </>
            )}
          </div>
        )
      ) : (
        <div
          className="item__vertical"
          onMouseEnter={handleHover}
          onMouseLeave={() => setHover(false)}
        >
          <img src={props.webformatURL} alt={props.tags} />
          {hover && (
            <>
              <Like props={props} />
              <Button className="button button--close" onClick={handleClick}>
                <img className="modal__arrows" src={arrows} alt="arrows" />
              </Button>
            </>
          )}
        </div>
      )}
      <ModalGallery
        handleClickModal={handleClickModal}
        isModal={modal}
        props={props}
      />
    </>
  );
};
