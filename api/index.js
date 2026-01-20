import { createServer } from "node:http";

const port = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

// starts a simple http server locally on port 3000
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

