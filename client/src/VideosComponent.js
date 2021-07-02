import React from "react";
function VideosComponent (props) {
    const videos =(props.videos);
    const listVideos = videos.map(video => {
        return <div className="list" key={video.id}>
                <div>
                    <h3>{video.title}</h3>
                    <h3>Has a rating of: {video.rating}</h3>
                    <iframe width="527" height="296" src={videos.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button onClick={() => props.deleteVideo(video.id)}>Delete Video</button>
                </div>
            </div>
    })
    return (
        <div>{listVideos}</div>
    )
}



export default VideosComponent;
