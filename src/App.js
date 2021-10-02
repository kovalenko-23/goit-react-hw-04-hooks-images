import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Wrapper } from "./App.styled";
import ModalWindow from "./Components/Modal/Modal";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { fetchGallery } from "./Services/api";
import { Gallery } from "./Components/ImageGallary/ImageGallary";
import { LoadMoreBtn } from "./Components/Button/Button";
import { Spinner } from "./Components/Loader/Loader";
import { FaFrown } from "react-icons/fa";

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function App() {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [page, setPage] = useState(1);
  const [requestStatus, setRequestStatus] = useState(Status.IDLE);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const prevSearch = useRef(null);
  const prevPage = useRef(1);

  useEffect(() => {
    if (!searchInput) {
      return;
    }

    if (prevSearch.current !== searchInput) {
      setRequestStatus(Status.PENDING);
      setImages([]);
      setPage(1);
      fetchGallery(searchInput, prevPage.current)
        .then((images) => {
          setImages(images.hits);
          const totalImages = images.total;
          const totalhits = images.hits.length;

          if (totalhits === 0) {
            setRequestStatus(Status.REJECTED);
            toast(`Sorry, nothing have found by "${searchInput}"`, {
              icon: <FaFrown fill={"orange"} />,
            });
            return;
          }

          toast.success(`You have found ${totalImages} images`);

          if (totalhits < 12) {
            setRequestStatus(Status.REJECTED);
          } else {
            setRequestStatus(Status.RESOLVED);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [searchInput]);

  useEffect(() => {
    if (prevPage.current !== page) {
      setRequestStatus(Status.PENDING);
      fetchGallery(searchInput, page)
        .then((images) => {
          setImages((prev) => [...prev, ...images.hits]);
          const totalhits = images.hits.length;

          if (totalhits < 12) {
            setRequestStatus(Status.REJECTED);
          } else {
            setRequestStatus(Status.RESOLVED);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [searchInput, page]);

  const handleSearchInput = (value) => {
    if (value === searchInput) {
      return;
    }
    if (value.trim("") === "") {
      toast.error("Please, enter your querry");
    } else {
      setSearchInput(value);
      setPage(1);
    }
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  const handleModal = (largePicture) => {
    if (largeImage !== largePicture) {
      setLargeImage(largePicture);
    }
    setShowModal(!showModal);
  };

  const shouldShowButton = requestStatus === Status.RESOLVED;
  const showSpinner = requestStatus === Status.PENDING;

  return (
    <Wrapper>
      <Toaster />
      <Searchbar onSubmit={handleSearchInput} />
      <Gallery onImageClick={handleModal} images={images} />
      {shouldShowButton && <LoadMoreBtn onClick={handleLoadMore} />}
      {showSpinner && <Spinner />}
      {showModal && (
        <ModalWindow
          image={largeImage}
          handleModal={handleModal}
          state={showModal}
        />
      )}
    </Wrapper>
  );
}

export default App;
