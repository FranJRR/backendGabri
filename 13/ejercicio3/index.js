const http = require('http');

const routes = {
  primera: (req, res) => {
    res.writeHead(200);
    res.end('pagina1');
  },

  default: (req, res) => {
    res.writeHead(404);
    res.end('Error 404');
  },
};

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const path = req.url.substring(1);
    const controller = routes[path] || routes.default;
    controller(req, res);
  })
  .listen(3000);
