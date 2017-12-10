var spawn = require("child_process").spawn
let version = require("./package.json").version
let parts = version.split(".")
let last = parts.splice(-1, 1)[0]
version = parts.join(".") + "." + (parseInt(last || 0) + 1)

var ls = spawn("cmd.exe", ["/c", `release.bat ${version}`])

ls.stdout.on("data", function(data) {
  console.log("stdout: " + data)
})

ls.stderr.on("data", function(data) {
  console.log("stderr: " + data)
})

ls.on("exit", function(code) {
  console.log("child process exited with code " + code)
})
