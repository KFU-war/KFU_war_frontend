import Modal from "react-modal";
import customStyles from "./ModalStyle";
import ModalForm from "./ModalForm/ModalForm";
import React from "react";

let SourcesModal = (props) => {
    return(
        <Modal
            {...props}
        >
            <ModalForm close={props.close} mode={props.mode}/>
        </Modal>
    )
}

export default SourcesModal;