import { selectedPhoto } from "../App/AppTypes";

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: (state: boolean) => void;
  photo: selectedPhoto;
}
