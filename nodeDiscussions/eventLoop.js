console.log("1. Start");

setTimeout(() => {
  console.log("2. Timeout 1");
}, 100);
setTimeout(() => {
  console.log("3. Timeout 2");
}, 0);
setImmediate(() => {
  console.log("4. Immediate 1");
});
process.nextTick(() => {
  console.log("5. Next Tick 1");
});
Promise.resolve().then(() => {
  console.log("7. Promise 1");
});
console.log("6. End");
