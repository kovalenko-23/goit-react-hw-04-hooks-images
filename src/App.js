import { Component } from "react";
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

class App extends Component {
  state = {
    images: [],
    searchInput: null,
    page: 1,
    requestStatus: Status.IDLE,
    showModal: false,
    largeImage: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchInput, page } = this.state;
    const prevSearch = prevState.searchInput;

    if (prevSearch !== searchInput) {
      try {
        this.setState({ requestStatus: Status.PENDING, images: [], page: 1 });
        const result = await fetchGallery(searchInput, page);
        const images = result.hits;
        const totalImages = result.total;
        const totalhits = images.length;
        this.setState({ images });

        if (totalhits === 0) {
          this.setState({ requestStatus: Status.REJECTED });
          toast(`Sorry, nothing have found by "${searchInput}"`, {
            icon: <FaFrown fill={"orange"} />,
          });
          return;
        }

        toast.success(`You have found ${totalImages} images`);

        if (totalhits < 12) {
          this.setState({ requestStatus: Status.REJECTED });
        } else {
          this.setState({ requestStatus: Status.RESOLVED });
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (prevSearch === searchInput && prevState.page !== page) {
      try {
        this.setState({ requestStatus: Status.PENDING });
        const result = await fetchGallery(searchInput, page);
        const images = result.hits;
        const totalhits = images.length;
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
        }));
        if (totalhits < 12) {
          this.setState({ requestStatus: Status.REJECTED });
        } else {
          this.setState({ requestStatus: Status.RESOLVED });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  handleSearchInput = (value) => {
    if (value === this.state.searchInput) {
      return;
    }

    if (value.trim("") === "") {
      toast.error("Please, enter your querry");
    } else {
      this.setState({ searchInput: value, page: 1 });
    }
  };

  handleLoadMore = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleModal = (largeImage) => {
    if (this.state.largeImage !== largeImage) {
      this.setState({
        largeImage,
      });
    }

    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, largeImage } = this.state;
    const shouldShowButton = this.state.requestStatus === Status.RESOLVED;
    const showSpinner = this.state.requestStatus === Status.PENDING;

    return (
      <Wrapper>
        <Toaster />
        <Searchbar onSubmit={this.handleSearchInput} />
        <Gallery onImageClick={this.handleModal} images={this.state.images} />
        {shouldShowButton && <LoadMoreBtn onClick={this.handleLoadMore} />}
        {showSpinner && <Spinner />}
        {showModal && (
          <ModalWindow
            image={largeImage}
            handleModal={this.handleModal}
            state={showModal}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;
