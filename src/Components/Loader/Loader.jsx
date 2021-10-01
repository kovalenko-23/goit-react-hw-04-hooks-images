import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

export const Spinner = () => {
    return(
        <Wrapper>
            <Loader type="ThreeDots" color="#6e89ec" height={80} width={80} />
        </Wrapper>
    )
}