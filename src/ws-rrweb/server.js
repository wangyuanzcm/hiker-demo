// 获得 WebSocketServer 类型
var WebSocketServer = require("ws").Server;
var WebSocket = require("ws");
var readFileSync = require("fs").readFileSync;

// 创建 WebSocketServer 对象实例，
// 监听指定端口
var wss = new WebSocketServer({
  port: 3600,
  cert: readFileSync("../../auth/cert.pem"),
  key: readFileSync("../../auth/key.pem"),
});
// 创建保存所有已连接到服务器的客户端对象的数组
// 为服务器添加 connection 事件监听，
// 当有客户端连接到服务端时，
// 立刻将客户端对象保存进数组中。
wss.on("connection", function (ws) {
  console.log("一个客户端连接到服务器");
  // 为每个 client 对象绑定 message 事件，
  // 当某个客户端发来消息时，自动触发
  ws.on("message", function (msg) {
    console.log(msg, "接收到客户端发送消息");
    wss.clients.forEach(function (client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  ws.on("close", function () {
    for (var c of wss.clients) {
      if (c === this) {
        wss.clients.splice(c.index, 1);
        break;
      }
    }
  });
}); // node server.js
