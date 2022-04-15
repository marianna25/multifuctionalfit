import React from "react";
import video from "../../assets/video/video.mp4"

export const Video = () => {

    return (
        
            <div id="video" className="section">
                <video controls className="video-content">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
       
    );

}