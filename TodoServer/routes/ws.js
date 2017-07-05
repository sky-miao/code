let ws = require("nodejs-websocket")

// Scream server example: "hi" -> "HI!!!"
let server = ws.createServer(function (ws) {
  console.log("New connection", ws)
  ws.on("text", function (str) {
    ws.sendText(str.toUpperCase()+"!!!")
  })
  ws.on("close", function (code, reason) {
    console.log("Connection closed")
  })
}).listen(8001, function () {
  console.log('connected')
})