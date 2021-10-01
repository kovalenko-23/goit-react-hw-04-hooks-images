import { Overlay, Modal } from "./Modal.styled";
import { createPortal } from "react-dom";
import { Component } from "react";
import PropTypes from 'prop-types'


const modalRoot = document.querySelector('#modal-root');

class ModalWindow extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

  handleKeyDown = e => {
      if (e.code === 'Escape' && this.props.state === true) {
        this.props.handleModal();
      }
    }
    
    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.handleModal();
        }
    }
    
    render() {
        return createPortal(
            <Overlay onClick={this.handleBackDropClick}>
                <Modal>
                    <img src={this.props.image} alt="" />
                </Modal>
            </Overlay>, modalRoot
        )
    }
}

ModalWindow.propTypes = {
    state: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
}

export default ModalWindow

