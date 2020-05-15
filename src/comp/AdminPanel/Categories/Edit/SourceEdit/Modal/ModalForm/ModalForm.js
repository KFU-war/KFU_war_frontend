import React from "react";
import classes from "./ModalForm.module.css"

let ModalForm = (props) => {
    let data = props.data;
    debugger;
    if (!data){
        data = {}
        data.heading= "";
        data.desc = "";
        data.src = "https://lh3.googleusercontent.com/proxy/4xpHU2KTJ4wDflD2qFDTL5elk8jE6YSIp1eTyS0D6N0G2uHshZgvj_Zo2x10djw8NFC7TlK5BCvyfdQDJ-KPTnpFaObhK3nwcTP7GGDh2nqhgi3nG5aHVxbyW0Y";
        data.alt = "alt";
    }
    return(
        <>
            <form className={classes.form}>
                <div className={classes.photoBlock}>
                    <img className={classes.photo} src={data.src} alt={data.alt}/>
                    <input type={"file"} required/>
                </div>
                <div className={classes.textBlock}>
                    <input type={"text"} placeholder={"Название"} value={data.heading} required/>
                    <textarea placeholder={"Описание"} value={data.desc} required/>
                    <button onClick={props.finish}>Сохранить</button>
                </div>
            </form>
        </>
    )
}

export default ModalForm;