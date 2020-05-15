import Modal from "react-modal";
import ModalForm from "./ModalForm/ModalForm";
import React from "react";

let SourcesModal = (props) => {
    return(
        <Modal
            {...props}
        >
            <ModalForm close={props.close} data={props.data} finish={props.finish}/>
        </Modal>
    )
}

export default SourcesModal;