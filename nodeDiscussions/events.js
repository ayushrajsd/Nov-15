const eventEmitter = require("events");

const myEmitter = new eventEmitter();
// const customEventEmitter = new MyEvents();
// listeners

myEmitter.on("myEvent", (...args) => {
  console.log("There is a new event", args);
});

// myEmitter.on("myEvent", (...args) => {
//   console.log("another listener for the new event", args);
//   console.log("-------------------");
// });
const secondCb = (...args) => {
  console.log("another listener for the new event", args);
  console.log("-------------------");
};
myEmitter.on("myEvent", secondCb);
// emit an event
myEmitter.emit("myEvent");
myEmitter.emit("myEvent", 1, 2);
myEmitter.off("myEvent", secondCb);
myEmitter.emit("myEvent", [1, 2, 3]);

// class MyEvents{
//    constructor() {
//     this.events = {};
//    }
//    on(eventName, cb){
//     if(this.events[eventName]){
//         this.events[eventName].push(cb);
//     }else{
//         this.events[eventName] = [cb];
//     }
//    }
//    emit(eventName, ...args){
//     if(this.events[eventName]){
//         this.events[eventName].forEach(cb => cb(...args));
//     }

//    }
//    off(event, cb){}
// }

/**
 *
 *
 * events emitter class
 *
 * 1. we create a cusotm event emitter class
 * 2. we create an object to store the events
 * 3. we create listeners for the events
 * 4. every listener is stored in an array because we can have multiple listeners for the same event
 * 5. emit the event -> we loop through the listeners and call them
 */
