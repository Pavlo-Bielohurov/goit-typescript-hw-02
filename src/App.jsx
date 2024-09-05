import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/searchBar";
import ImageGallery from "./components/ImageGallery/imageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/loadMoreBtn";
import Loader from "./components/Loader/loader";
import ErrorMesange from "./components/ErrorMessage/eroorMessage";
import ImageModal from "./components/ImageModal/imageModal";
import { Toaster } from "react-hot-toast";

import searchPhotos from "./Servers/api";
import Modal from "react-modal";

import "./App.css";

function App() {
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(9999);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  Modal.setAppElement("#root");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const newModalImg = (img) => {
    setModalImg(img);
  };

  const handleSubmit = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!topic) return;

    async function getImage() {
      try {
        setLoader(true);
        setError(false);
        const res = await searchPhotos(topic, page);
        setImages((prevImage) => [...prevImage, ...res.images]);
        setTotalPages(res.totalPages);
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoader(false);
      }
    }

    console.log(page, topic);

    getImage();
  }, [page, topic]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      <ImageGallery
        images={images}
        openModal={openModal}
        newModalImg={newModalImg}
      />
      {loader && <Loader />}
      {error && <ErrorMesange />}
      {page >= totalPages && <b>END OF COLLECTION!!!!</b>}
      {images.length > 0 && !loader && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal isOpen={modalOpen} isClose={closeModal} image={modalImg} />
    </>
  );
}

export default App;
