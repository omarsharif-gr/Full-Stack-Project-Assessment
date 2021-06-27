import React from "react";
function RemoveVideoInput(props) {
    const videos = props.videos;
    const listVideos = videos.map(video => {
        return <div className="list" key={video.key}>
            {console.log(video.key)}
            <h3>{video.title}</h3>
            <h3>Has a rating of: {video.rating}</h3>
            <iframe width="518" height="291" src={video.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onClick={() => props.deleteVideoInput(video.key)}>Delete Video</button>
        </div>
    })
    return (
        <div>{listVideos}</div>
    )
}
export default RemoveVideoInput;