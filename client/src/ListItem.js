import React from "react";
import Example from "./LikeDislike";
function ListItems(props) {
    const videos = props.videos;
    const listVideos = videos.map(video => {
        return <div className="list" key={video.url}>
            {console.log(video.url)}
            <h3>{video.title}</h3>
            <h3>Has a rating of: {video.rating}</h3>
            <Example videos = {video.rating} />
            <iframe width="518" height="291" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button onClick={() => props.deleteVideo(video.url)}>Delete Video</button>
        </div>
    })
    return (
        <div>{listVideos}</div>
    )
}
export default ListItems;