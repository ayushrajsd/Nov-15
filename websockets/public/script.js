const socket = io();
socket.on("message", (data) => {
  console.log("receiving message", data);
});

const btn = document.getElementById("send");
const input = document.getElementById("message");
const ul = document.getElementById("list");
const grpBtn = document.getElementById("createGrp");
const joinGrp = document.getElementById("joinGrp");
const stg = document.getElementById("stg");
const leaveRoomBtn = document.getElementById("leave");

btn.addEventListener("click", () => {
  const value = input.value;
  const div = document.createElement("div");
  div.setAttribute("class", "sender");
  const li = document.createElement("li");
  li.innerText = value;
  const para = document.createElement("p");
  para.innerText = "sender";
  div.appendChild(para);
  div.appendChild(li);
  ul.appendChild(div);
  socket.emit("message", value);
  input.value = "";
});

socket.on("broadcast", (data) => {
  console.log("broadcast", data);
  const div = document.createElement("div");
  div.setAttribute("class", "receiver");
  const li = document.createElement("li");
  li.innerText = data;
  const para = document.createElement("p");
  para.innerText = "receiver";
  div.appendChild(para);
  div.appendChild(li);
  ul.appendChild(div);
});

grpBtn.addEventListener("click", () => {
  console.log("creating group");
  socket.emit("create_grp", Math.floor(Math.random(0, 1) * 1000));
});

joinGrp.addEventListener("click", () => {
  console.log("joining group");
  socket.emit("join_room");
});

stg.addEventListener("click", () => {
  let value = input.value;
  if (value) {
    socket.emit("grp message", value);
  }
});

socket.on("serv_grp_message", function (data) {
  console.log("group message", data);
});

leaveRoomBtn.addEventListener("click", () => {
  console.log("leaving room");
  socket.emit("leave_room");
});
