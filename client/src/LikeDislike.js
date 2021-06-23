import React, { useState } from "react";
import exampleresponse from "./exampleresponse.json"
import ListItems from "./ListItem";
const Example = (props) => {
    const [like,setLike]=useState(props.videos);
    const [dislike,setDislike]=useState(0);
    return (
        <div>
            <button onClick={() => setLike(like + 1) && setDislike(dislike-1)}>
                <img src="https://th.bing.com/th/id/OIP.KHv3wy-76pmU141j6c4mmwHaDp?pid=ImgDet&rs=6" alt="" />
            </button>
            <div>{like}</div>
            <button onClick={() => setLike(like - 1)}></button>
                <img source={require("./dislike.jpg")} alt="" />
        </div>
    )
}
export default Example;