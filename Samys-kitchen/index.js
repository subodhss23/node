const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function(req, res){
  if (req.url === '/'){
    res.writeHead(200, {'content-type':'text/html'});
    const homePage = fs.readFileSync('home.html');
    res.write(homePage);
    res.end();
  } else if (req.url === '/home.css') {
    res.writehead(200, {'content-type': 'text/css'});
    const homeStyle = fs.readFileSync('home.css');
    res.write(homeStyle);
    res.end();
  } else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.write('<h1>Page not found, 404!!!</h1>');
    res.end();
  }
})

server.listen(PORT, function(){
  console.log(`serving ${PORT}`);
})