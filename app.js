const http = require ('http');
http.createServer((req, res) => {
  res.end("Node App is Running");
}).listen(3000);
