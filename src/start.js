const { spawn } = require("child_process");

// Run the react-scripts start command
const child = spawn("npm", ["start"], { stdio: "inherit" });

child.on("error", (error) => {
  console.error(`Failed to start subprocess: ${error.message}`);
});

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
