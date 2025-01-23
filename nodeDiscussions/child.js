// const { execFile, exec, spawn } = require("child_process");

// /**
//  * 1. exec - runs a command in a shell
//  * 2. execFile - runs a command in a shell and buffers the output
//  * 3. spawn - runs a command in a new process
//  * 4. fork - a special case of spawn used specifically to run node processes
//  */

// // exec("ls -lh", (error, stdout, stderr) => {
// //   if (error) {
// //     console.log(`error: ${error.message}`);
// //     return;
// //   }
// //   console.log(`stdout: ${stdout}`);
// //   console.error(`stderr: ${stderr}`);
// // });

// const scriptPath = "./script.sh";

// const args = ["arg1", "arg2"];

// // execFile(scriptPath, args, (error, stdout, stderr) => {
// //   if (error) {
// //     console.log(`error: ${error.message}`);
// //     return;
// //   }
// //   console.log(`stdout: ${stdout}`);
// //   console.error(`stderr: ${stderr}`);
// // });

// const cp = require("child_process");
// cp.spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
//   "https://www.youtube.com",
//   "--incognito",
// ]);
