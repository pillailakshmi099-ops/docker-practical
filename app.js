const http = require ('http');
http.createServer((req, res) => {
  res.end("Node App is Running for MCA25085!");
}).listen(3000);

