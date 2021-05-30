const express = require("express");
//deals w file paths
const path = require("path");
const app = express();
//date/time library
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//init middleware
//so everytime this app runs= whatever is defined here will happen
//app.use(logger);

//this is a route
app.get("/", (req, res) => {
  //res.send("<h1>Hello World</h1>");
  //join puts / in between for url parameters
  var x = path.join("Users", "Refsnes", "demo_path.js");
  console.log(x);
  //join the directory with index.html as a url
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//static server
//from this folder, you'll be able to go to any of the path names without explicitly defining them
app.use(express.static(path.join(__dirname, "static")));

//members api route
app.use("/api/members", require("./routes/api/members"));
