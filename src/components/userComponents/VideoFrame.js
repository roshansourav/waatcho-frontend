import React from 'react';
import "./videoframe.css";
import PlayVideo from "./PlayVideo";

export default class VideoFrame extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="p-2">
                        <button className="btn btn-primary custom" type="button">Prev</button>
                    </div>
                    <div className="ms-auto p-2">
                        <button className="btn btn-primary custom" type="button">Next</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <PlayVideo videoURL="078e9f57-5193-4f3b-bd86-44e6827a2303" />
                </div>
            </div>
        )
    }

}
