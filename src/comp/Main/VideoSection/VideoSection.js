import React from "react";
import classes from "./VideoSection.module.css";
import background from "../../../assets/img/video_back.png";
import "video-react/dist/video-react.css";
import { Player, ControlBar, PlayToggle, ReplayControl } from 'video-react';
import "./VideoStyle.css";

let VideoSection = (props) => {
    let videoSrc = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    return(
        <section className={classes.VideoSection}>
            <img src={background} alt={"background"} className={classes.background}/>
            <div className={classes.video_wrapper}>
                <Player
                    fluid={false}
                    height={"50%"}
                    width={"100%"}
                    playsInline
                    className={classes.video}
                    src={videoSrc}
                >
                    <ControlBar autoHide={true}  disableDefaultControls className={classes.controls}>
                        <PlayToggle className={classes.playBtn}/>
                    </ControlBar>
                </Player>
            </div>
        </section>
    )
}

export default VideoSection;