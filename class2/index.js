const express = require("express");
const path = require("path");

// create an Express app

const app = express();
app.use(express.json()); // it parsing the incoming request with JSON payloads and making it available under req.body property
app.use(express.static(path.join(__dirname, "public")));

const loggerMiddleware = (req, res, next) => {
  console.log(`[ ${new Date().toISOString()}] ${req.method} ${req.url} `);
  next();
  /**
   * next() is a function that is used to pass control to the next middleware function in the stack.
   * if user is authenticated call next else return res.status(401).json({message: "Unauthorized"})
   */
};

// app.use(loggerMiddleware);

// define a route
app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("received a POST request");
});
app.get("/data", (req, res) => {
  console.log("sending users");
  res.send("Data from get request");
});

// chaining middleware
app.get("/special", loggerMiddleware, (req, res) => {
  res.send("this route is special");
});

const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
];

app.post("/users", (req, res) => {
  const newUser = req.body; // name: "User 3"
  const userId = users.length + 1;
  newUser.id = userId; // { id: 3, name: "User 3" }
  users.push(newUser);
  res.status(201).json({ message: "User created successfully", user: newUser });
});

app.get("/users", (req, res) => {
  res.status(200).json({ message: "All users", users: users });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  console.log("userId", userId);
  const userIndex = users.findIndex((user) => user.id == userId);
  console.log("userIndex", userIndex);
  console.log("users", users);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  // remove user from users array
  users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted successfully" });
});

app.get("/search", (req, res) => {
  const queryParam = req.query;
  console.log("queryParam", queryParam);
  const { name, module } = queryParam;
  if (module !== "mern") {
    return res.status(400).json({ message: "Invalid module" });
  }
  res.status(200).json({ message: "Search results", queryParam });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
