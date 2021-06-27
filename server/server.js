const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))
var bodyParser = require("body-parser")
app.use(bodyParser.json())
const exampleResponse = require("../exampleresponse.json")
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = exampleResponse;


// GET "/"
app.get("/", (req, res) => {
  // Delete this line after you've confirmed your server is running
  res.send(videos);
});

app.post("/", (req, res) => {
  const reqData = req.body
  videos.push(reqData)
  console.log(videos)
  res.sendStatus(200)
  res.send(videos.push(reqData));
});

app.get("/:id", (req, res) => {
  // Delete this line after you've confirmed your server is running
  const requestID = req.params.id
  // console.log(requestID)
  const vidarr = videos.map((video) => {
     if (video.id === Number(requestID)) {
        return (video);
     } else { return {}}
  })
  let finalVideo = vidarr;
res.send(finalVideo)
});

app.delete("/change/:id", (req, res) => {
  console.log(req.params.id)
  const iDToDelete = req.params.id;
  const videoToDelete = videos.map((video)=>{
    if (video.id === Number(iDToDelete)) {
      return (video);
    }
  })
  const deletedVideo = videoToDelete;
  res.send(videos.splice(deletedVideo));
});

