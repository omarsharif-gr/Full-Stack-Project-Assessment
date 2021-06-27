import "./App.css";
import VideosComponent from "./VideosComponent";
import ListItems from "./ListItem";
import React, { Component } from 'react';

// random value generator:
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
        title:'',
        url: '',
        key: dataObject.url,
      }
    }
    this.handleUrlInput = this.handleUrlInput.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
      console.log(this);

  }
  handleUrlInput(event) {
    event.preventDefault();
    this.setState({
      currentVideo: {
        title:this.state.currentVideo.title,
        url: event.target.value,
        id: Math.floor(Math.random() * 100),
        rating:0

      }
    })
  }
  handleTitleInput(event) {
    event.preventDefault();
    this.setState({
      currentVideo: {
        title: event.target.value,
        url:this.state.currentVideo.url,
        id: Math.floor(Math.random() * 100),
        rating:0
      }
    })
  }
  addVideo(event) {
    event.preventDefault();
    const newVideo = this.state.currentVideo
    console.log(newVideo)
    if (newVideo.url !== "" && newVideo.title!=="") {
      //Destructuring assignment
      const newVideos = [...this.state.videos, newVideo]
      this.setState({
        videos: newVideos,
        currentVideo: {
          id: Math.floor(Math.random() * 100),
          rating: 0,
          title:'',
          url: '',
          
        }
      })
      const data = {
        id: this.state.currentVideo.id, title: this.state.currentVideo.title, url: this.state.currentVideo.url, rating: this.state.currentVideo.rating  };
    fetch('http://localhost:5000/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
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
  render() {
    return (
      <div>
      <header>
          <form id="to-do-form" onSubmit={this.addVideo} >
              <input id="title" type="text" placeholder="Enter Title" value={this.state.currentVideo.title} onChange={this.handleTitleInput}></input>
              <input id="url" type="text" placeholder="Enter Url" value={this.state.currentVideo.url} onChange={this.handleUrlInput}></input>
            <button id="submitButton" type="submit" onClick={this.postData} >Add</button>

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
