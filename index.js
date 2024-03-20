const express = require("express");
const path = require("path");
const { dbConnect } = require("./db/dbConnect");
const { studentModel } = require("./Model/studentModel");

const app = express();
//middleware for static the folder
app.use(express.static(path.join(__dirname, "view"))); //not require to write get method for css and blog page

//middleware for json(while getting input "from" that data should be in jason format, we need this middleware)
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.method);
  // res.send("hello i am express server");
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

//create document-using post method
app.post("/newstudent", async (req, res) => {
  console.log(req.body);

  const student = new studentModel(req.body);
  const response = await student.save();
  console.log(response);
  res.send({ msg: "Data recieved" });
});

//get documnet- read method(when you click Get students you will get all the mongo data on console)
app.get("/getstudents", async (req, res) => {
  let students = await studentModel.find();
  res.send(students);
});

// app.get("/blog", (req, res) => {
//   console.log(req.method);
//   // res.send("hello i am blog page");
//   res.sendFile(path.join(__dirname, "view", "pages", "blog.html"));
// });

// app.get("/index.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "view", "index.css"));
// });

app.listen(7000, "127.0.0.7", () => {
  console.log("Server started at http://127.0.0.7:7000");
  dbConnect();
});
