import "./App.css";
import VideosComponent from "./VideosComponent";
import ListItems from "./ListItem";
// import deleteVideoInput from "./RemoveButtonComponent"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Video Recommendation</h1>
//         <VideosComponent />
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import exampleresponse from "./exampleresponse.json";

class App extends React.Component {
  constructor(props) {
    //base class:
    super(props);
    const data = JSON.stringify(exampleresponse);
    const dataObject = JSON.parse(data)
    console.log(dataObject)
    this.state = {
      videos: dataObject,
      currentVideo: {
        url: "",
        key: dataObject.id
      }
    }
    this.loopingVideos = this.loopingVideos.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
      console.log(this);

  }
  handleInput(event) {
    this.setState({
      currentVideo: {
        url: event.target.value,
        key:Date.now()
      }
    })
  }
  addVideo(event) {
    event.preventDefault();
    const newVideo = this.state.currentVideo;
    console.log(newVideo)
    if (newVideo.url !== "") {
      //Destructuring assignment
      const newVideos = [...this.state.videos, newVideo];
      this.setState({
        videos: newVideos,
        currentVideo: {
          url: '',
          key: exampleresponse.id

        }
      })
    }
  }
  deleteVideo(key) {
    const filteredVideos = this.state.videos.filter(video => video.url !== key);
    this.setState({
      videos: filteredVideos
    })
  }
   deleteVideoInput(key) {
    const filteredVideos = this.state.videos.filter(video => video.key !== key);
    this.setState({
      videos: filteredVideos
    })
  }
  loopingVideos(event) {
    event.preventDefault();
    const newVideo = this.state.currentVideo;
    const originalVideos = [...this.state.videos, newVideo];
      this.setState({
        videos: originalVideos,
        currentVideo: {
          url: '',
          key: ''
        }
      })
  }
  render() {
    return (
      <div>
      <header>
          <form id="to-do-form" on onSubmit={this.addVideo}>
            {console.log(this.addVideo)}
          <input type="text" placeholder="Enter Url" value={this.state.currentVideo.url} onChange={this.handleInput} />
          <button type="submit">Add</button>
        </form>
      </header>
        {/* <body>{this.loopingVideos.videos}</body> */}
        {/* <>
          <VideosComponent videos={this.state.videos} deleteVideo={this.deleteVideo}></VideosComponent>
        </> */}
        <>
          <ListItems videos={this.state.videos} deleteVideo={this.deleteVideo}></ListItems>
          {/* <deleteVideoInput videos={this.state.currentVideo.url} deleteVideo={this.deleteVideoInput}></deleteVideoInput> */}
        </>
      </div>
    );
  }
}

export default App;
