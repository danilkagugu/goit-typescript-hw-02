import { Image, selectedPhoto } from "../App/AppTypes";

export type ImageProps = {
  data: Image;
  onSelect: (state: boolean, photo: selectedPhoto) => void;
};
