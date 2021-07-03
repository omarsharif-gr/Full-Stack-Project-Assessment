const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))
var bodyParser = require("body-parser")
app.use(bodyParser.json())
const exampleResponse = require("./exampleresponse.json")
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
const videos = exampleResponse;


const { Pool } = require("pg");
const pool = new Pool({
  user: "pmxyzyhluuybrv",
  host: "ec2-54-155-254-112.eu-west-1.compute.amazonaws.com",
  database: "db4je6chdm1u5o",
  password: "a83578cfdf7c4fcfb367b4683dd7b49d999f466db222bd3a66aadc65a5f3043a",
  port: 5432,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }

  
})

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

app.delete("/:id", (req, res) => {
  console.log(req.params.id)
  const identifiedElem = videos.some(
    video => video.id.toString() === req.params.id
  )
  if (identifiedElem) {
    res.json(videos.filter(video => video.id.toString() !== req.params.id))
  }
  else {
    res.status(400).send(`There's no video with the id ${req.params.id}`);
  }
  res.send(identifiedElem)
});




