import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/searchBar";
import ImageGallery from "../ImageGallery/imageGallery";
import LoadMoreBtn from "../LoadMoreBtn/loadMoreBtn";
import Loader from "../Loader/loader";
import ErrorMesange from "../ErrorMessage/eroorMessage";
import ImageModal from "../ImageModal/imageModal";
import searchPhotos from "../../Servers/api";
import { Image } from "./App.types";

import "./App.css";
import React from "react";

function App() {
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [totalPages, setTotalPages] = useState<number>(9999);
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<Image | null>(null);
  const loadMoreBtnRef = useRef<HTMLButtonElement>(null);

  Modal.setAppElement("#root");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  const newModalImg = (img: Image) => {
    setModalImg(img);
  };

  const handleSubmit = (newTopic: string) => {
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
    getImage();
  }, [page, topic]);

  useEffect(() => {
    if (images.length > 0 && page > 1) {
      loadMoreBtnRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [images, page]);

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
        <LoadMoreBtn onClick={handleLoadMore} loadMoreBtnRef={loadMoreBtnRef} />
      )}
      {modalImg && (
        <ImageModal isOpen={modalOpen} isClose={closeModal} image={modalImg} />
      )}
    </>
  );
}

export default App;
