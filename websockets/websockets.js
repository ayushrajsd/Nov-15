const express = require("express");
const http = require("http");
/**
 * if in a module, you have a default export, you can import it like this `import http from 'http'`
 * if you have named exports, you can import it like this `import { Server } from 'socket.io'`
 * export default Pagination
 * import Pagination from './Pagination'
 *
 * export const Pagination = () => {}
 * export const InfiniteScroll = () => {}
 * import { Pagination } from './Pagination'
 * import { InfiniteScroll } from './Pagination'
 * import react, {useState, useEffect} from 'react'
 *
 */
const { Server } = require("socket.io");

const app = express();
app.use(express.static("public"));
const server = http.createServer(app);

// this io is responsible for handling all the socket connections
const io = new Server(server);
let room; // room = 72 { A, B}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.emit("message", "message from server");
  //   setInterval(() => {
  //     socket.emit(
  //       "message",
  //       "messagr from server" +
  //         "-" +
  //         socket.id +
  //         "at" +
  //         new Date().toLocaleTimeString()
  //     );
  //   }, 2000);
  socket.on("message", (data) => {
    console.log("receiving message", data);
    socket.broadcast.emit("broadcast", data);
  });

  socket.on("create_grp", (roomId) => {
    console.log("group created", roomId);
    // first partcipant of the group
    room = roomId;
    socket.join(roomId);
  });

  socket.on("join_room", () => {
    console.log(socket.id, "joining room", room);
    socket.join(room);
  });

  socket.on("grp message", function (data) {
    socket.to(room).emit("serv_grp_message", data);
  });

  socket.on("leave_room", () => {
    console.log(socket.id, "leaving room", room);
    socket.leave(room);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
