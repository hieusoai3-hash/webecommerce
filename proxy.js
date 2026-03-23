const http = require('http');
const net = require('net');

const PORT = process.env.PORT || 3000;
const TARGET_PORT = 8080;

const server = http.createServer((req, res) => {
  const options = {
    hostname: 'localhost',
    port: TARGET_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxy = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxy.on('error', (err) => {
    res.writeHead(502);
    res.end('Spring Boot not ready yet: ' + err.message);
  });

  req.pipe(proxy, { end: true });
});

server.listen(PORT, () => {
  console.log('Proxy running on port ' + PORT);
});
