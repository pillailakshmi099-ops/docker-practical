const http = require ('http');
http.CreateServer((req, res) => {
  res.end("Node App is Running");
}).listen(3000);
