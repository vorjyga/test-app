// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require("http");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require("uuid");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { animals } = require("./animals");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const body = [...Array(100)].map((a, i) => {
    return {
      id: i,
      name: animals[i],
      items: [...Array(Math.floor(Math.random() * 10) + 1)].map((o, index) => {
        return {
          id: uuidv4(),
          name: animals[i] + index.toString()
        };
      })
    };
  });
  // console.log(body);
  res.end(JSON.stringify(body));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
