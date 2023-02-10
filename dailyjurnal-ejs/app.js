//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Saya Ronald Gustavo, lulusan Mahasiswa Binus University jurusan Information System angkatan tahun 2019. Memiliki Hobi dalam berolahraga dan mengembangkan skill yang telah Saya miliki. Saya bertanggung jawab dalam setiap pekerjaan yang Saya lakukan dan menyelesaikan tepat waktu on schedule. Saya memiliki skill dalam Microsoft Office, Web Development sebagai Front end Developer, UI/UX Designer, System Analyst, Public Speaking, Critical Thinking, Leadership, and Problem Solving. Saya memiliki minat berkarir sebagai seorang Web Development fullstack (Frontend & Backend), UI/UX Designer,dan System Analyst.";
const contactContent = "Email: RonaldGustavo.rg@Gmail.com";



const app = express();

// page ejs harus dalam folder views
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// css style dalam file public
app.use(express.static("public"));

var postsArray = []

app.get("/", function (req, res) {
  res.render("home", {
    startingHomeContent: homeStartingContent,
    posts: postsArray
  })
  console.log(postsArray);
});

app.get("/about", function (req, res) {
  res.render("about", { startingAboutContent: aboutContent })
});

app.get("/contact", function (req, res) {
  res.render("contact", { startingContactContent: contactContent })
});

app.get("/compose", function (req, res) {
  res.render("compose")
});


app.post("/compose", function (req, res) {
  console.log(req.body.postBody);
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  }

  postsArray.push(post)

  res.redirect("/")
})

app.get("/posts/:postName", function (req, res) {
  // console.log(req.params.postName);
  const requestedTitlte = _.lowerCase(req.params.postName)

  postsArray.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title)

    if (storedTitle === requestedTitlte) {
      console.log("Match Found!");
      res.render("post", {
        title: post.title,
        content: post.content
      })

    } else {
      console.log("Dont Found!");
    }

  })
})



app.listen(3000, function () {
  console.log("Server started on port 3000");
});
