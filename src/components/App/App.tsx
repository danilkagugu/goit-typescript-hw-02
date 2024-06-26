import { FC, useEffect, useState } from "react";
import ApiService from "../ApiService/ApiService";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Image, selectedPhoto } from "./AppTypes";

function App() {
  const [photo, setPhoto] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [btnLoadMore, setBtnLoadMore] = useState<boolean>(false);
  const [loaderVissible, setLoaderVissible] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<selectedPhoto>({
    src: "",
    description: "",
  });
  useEffect(() => {
    if (query === "") {
      return;
    }
    const fetchData = async () => {
      try {
        setLoaderVissible(true);
        const data = await ApiService(query, page);
        console.log("data: ", data);

        const { results, total_pages } = data.data;
        if (results.length === 0) {
          toast.error("This didn't work.");
          return;
        }

        setBtnLoadMore(total_pages > page);
        setPhoto((prevState) => [...prevState, ...results]);
      } catch (error) {
        setError(true);
        toast.error("This didn't work.");
      } finally {
        setLoaderVissible(false);
      }
    };
    fetchData();
  }, [query, page]);

  const searchPhoto = (value: string) => {
    setQuery(value);
    setBtnLoadMore(false);
    setPage(1);
    setPhoto([]);
    setError(false);
  };
  const loadMore = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  function openModal(state: boolean, photo: selectedPhoto) {
    setModalIsOpen(true);
    if (state) setSelectedPhoto(photo);
    console.log("photo: ", photo);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Toaster position="top-center" />

      <SearchBar onSearch={searchPhoto} />
      {error && <ErrorMessage />}
      {loaderVissible && <Loader />}
      {photo.length > 0 && <ImageGallery items={photo} onSelect={openModal} />}
      {btnLoadMore && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        photo={selectedPhoto}
      />
    </>
  );
}

export default App;
