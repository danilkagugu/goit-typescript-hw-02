import { Image, selectedPhoto } from "../App/AppTypes";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGalleryTypes";



const ImageGallery = ({ items, onSelect }: ImageGalleryProps) => {
  return (
    <ul className={css.imgList}>
      {items.map((item: Image) => {
        return (
          <li className={css.imgItem} key={item.id}>
            <ImageCard data={item} onSelect={onSelect} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
