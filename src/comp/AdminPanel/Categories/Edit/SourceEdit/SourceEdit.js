import React, {useState} from "react";
import classes from "../ArticleEdit/ArticleEdit.module.css"
import classes2 from "./SourceEdit.module.css"
import Modal from 'react-modal';
import customStyles from "./Modal/ModalStyle";
import ModalForm from "./Modal/ModalForm/ModalForm";
import SourcesModal from "./Modal/SourcesModal";

let SourceEdit = (props) => {
    let source = props.article;
    const [modalIsOpen,setIsOpen] = useState(false);

    let openModal = () => {
        setIsOpen(true);
    }

    let closeModal = () => {
        setIsOpen(false);
    }

    return(
        <>
            <div className={classes2.sourceWrapper}>
                {source}
            </div>
            <div className={classes.articleToolbar}>
                <button className={classes.editBtn} onClick={openModal}>
                    Редактировать
                </button>
                <button className={classes.articleToolbar} onClick={props.archive}>
                    Архивировать
                </button>
                <SourcesModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    close={closeModal} mode={"Редактирование"}
                />
            </div>
        </>
    )
}

export default SourceEdit;