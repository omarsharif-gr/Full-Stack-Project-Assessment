const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))
var bodyParser = require("body-parser")
app.use(bodyParser.json())

const { Pool } = require("pg");

const pool = new Pool({
    user: "bspovtylvxhavh",
    host: "ec2-63-34-97-163.eu-west-1.compute.amazonaws.com",
    database: "dem18udcue6vjn",
    password: "4003a3d0545e4e16a1051f078b53be22fe0c955cbecf2e26d6c475814ec37b0b",
    port: 5432,
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})


app.get("/hotels", function (req, res) {
  pool.query("SELECT * FROM *")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
const poolVariable = "CREATE TABLE customers (email VARCHAR(120) NOT NULL)"
app.put("/hotel", function (req, res) {
  pool
    .query(poolVariable)
    .then((result) => res.json("result"))
    .catch((e) => console.error(e));
});
app.listen(port, () => console.log(`Listening on port ${port}`));

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
const videos = exampleResponse;



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




