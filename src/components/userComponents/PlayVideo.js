import React from 'react';
import axios from 'axios';
import { Player, BigPlayButton, LoadingSpinner, ControlBar, ReplayControl, ForwardControl, PlaybackRateMenuButton } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import "./playvideo.css";

export default class PlayVideo extends React.Component {
  state = {
    videos: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/downloadFile/f619f67c-7e01-4eba-9b9b-05338857e826`)
      .then(res => {
        const videos = res.data;
        this.setState({ videos });
      })
  }



  render() {
    return (
      <div className="d-flex justify-content-center custom">
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <Player

            fluid={false}
            width={750}
            height={500}
            src={`http://localhost:8080/downloadFile/${this.props.videoURL}`}
          >
            <BigPlayButton position="center" />
            <LoadingSpinner />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
              <ReplayControl seconds={5} order={2.1} />
              <ForwardControl seconds={5} order={3.1} />
            </ControlBar>
          </Player>
        </div>
      </div>
    )
  }
}