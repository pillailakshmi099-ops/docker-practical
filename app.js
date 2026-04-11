const http = require ('http');
http.createServer((req, res) => {
  res.end("Node App is Running MCA25085!");
}).listen(3000);
