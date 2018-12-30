const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url } = req;
  const { method } = req;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");

    return res.end();
  }
  if (url === "/" && method === "POST") {
    fs.writeFileSync("create-user.txt", "DUMMY");
    return res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });

    req.on("end", () => {
      const bodyFromBuffer = Buffer.concat(body).toString();

      console.log(bodyFromBuffer);
    });
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<ul><li>Users</li></ul>");
    return res.end();
  }
});
console.log("Server is running");
server.listen(4000);
