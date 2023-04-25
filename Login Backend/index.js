const express = require("express"); // Import express
const app = express(); // Make express app
const connectDB = require("./MongoConnect.js"); // Import connectDB function from MongoConnect.js
const bodyParser = require("body-parser"); // Import body-parser
const cors = require("cors"); // Import cors
const dotenv = require("dotenv"); // Import dotenv
const validator = require("email-validator"); // Import email-validator
dotenv.config(); // Configure dotenv

app.use(bodyParser.json()); // Use body-parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./Model/User.js"); // Import User model from Model/User.js

app.get("/", (req, res) => {
  // Create a GET route
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  // Create a POST route

  const email = req.body.email; // Get email from request body
  const password = req.body.password; // Get password from request body

  if (!email || !password) {
    // Check if email or password is empty
    return res.send("Please enter email and password");
  }

  if (!validator.validate(email)) {
    // Check if email is valid
    return res.send("Please enter a valid email");
  }

  const isexistUser = await User.findOne({ email: email }); // Check if user already exist
  if (isexistUser) {
    return res.send("User already exist");
  }

  const user = new User({
    // Create a new user
    email: email,
    password: password,
  });

  await user.save(); // Save user to database

  res.send({
    message: "User created successfully",
    user: user,
  });
});

app.post("/login", async (req, res) => {
  // Create a POST route
  const email = req.body.email; // Get email from request body
  const password = req.body.password; // Get password from request body

  if (!email || !password) {
    // Check if email or password is empty
    return res.send({
      message: "Please enter email and password",
      user: "--",
    });
  }

  if (!validator.validate(email)) {
    // Check if email is valid
    return res.send({ message: "Please enter a valid email", user: "--" });
  }

  const userexist = await User.findOne({ email: email }); // Check if user already exist
  if (!userexist) {
    return res.send({ message: "User does not exist", user: "--" });
  }

  if (userexist.password != password) {
    // Check if password is correct
    return res.send({ message: "Password is incorrect", user: "--" });
  }

  res.send({
    // Send response
    message: "Login successful",
    user: userexist,
  });
});

app.listen(process.env.PORT, async () => {
  // Listen to port
  await connectDB(); // Connect to database
  console.log("Example app listening on port" + process.env.PORT);
});
