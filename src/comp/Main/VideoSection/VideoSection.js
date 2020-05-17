import React from "react";
import classes from "./VideoSection.module.css";
import background from "../../../assets/img/video_back.png";
import "video-react/dist/video-react.css";
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import video from "../../../assets/video/main_video.mp4"
import "./VideoStyle.css";

let VideoSection = (props) => {
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
                    src={video}
                >
                    <ControlBar autoHide={true}  disableDefaultControls className={classes.controls}>
                        <BigPlayButton position="center" />
                        <PlayToggle className={classes.playBtn}/>
                    </ControlBar>
                </Player>
            </div>
        </section>
    )
}

export default VideoSection;