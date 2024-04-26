import { Image, selectedPhoto } from "../App/AppTypes";

export interface ImageGalleryProps {
  items: Image[];
  onSelect: (state: boolean, photo: selectedPhoto) => void;
}
