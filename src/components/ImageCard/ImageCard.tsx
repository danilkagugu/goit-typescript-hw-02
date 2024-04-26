import { FC } from "react";
import css from "./ImageCard.module.css";
import { Image, selectedPhoto } from "../App/AppTypes";
import { ImageProps } from "./ImageCardType";

const ImageCard: FC<ImageProps> = ({ data, onSelect }) => {
  return (
    <div
      className={css.imgBox}
      onClick={() =>
        onSelect(true, {
          src: data.urls.regular,
          description: data.description,
        })
      }
    >
      <img
        className={css.imgItem}
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default ImageCard;
