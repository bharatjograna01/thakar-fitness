import React, { Component } from 'react';
// import ReactPlayer from 'react-player';

class VideoPlay extends Component {
    playVideo() {
        this.refs.vidRef.play();
    }

    render() {
        return (
            <div>
                <video ref="vidRef" src={require("Assets/image/gallery/VID-20191029-WA0042.mp4")} type="video/mp4"></video>
                <button onClick={this.playVideo.bind(this)}>PLAY</button>

                {/* <ReactPlayer
                    url={`require("Assets/image/gallery/VID-20191029-WA0042.mp4")`}
                    playing={true}
                    loop={true}
                    volume={0}
                    muted={true}
                    width='640px'
                    height='360px'
                    style={{ opacity: 1 }}
                    progressInterval={1500}
                    soundcloudConfig={false}
                    controls={false}
                /> */}

            </div>
        );
    }
}

export default VideoPlay;