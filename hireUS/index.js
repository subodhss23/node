const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res){
    console.log(req.url);
    if (req.url === "/"){
          res.writeHead(200, {'content-type': 'text/html'})
          const homePage = fs.readFileSync('home.html');
          res.write(homePage);
          res.end();
    } else if (req.url === "/home.css"){
            res.writeHead(200, {'content-type': 'text/css'})
            const homeStyle = fs.readFileSync('home.css');
            res.write(homeStyle);
            res.end();
    } else if (req.url === "/hack.jpg"){
            res.writeHead(200, {'content-type': 'image/jpg'})
            const homeimage = fs.readFileSync('hack.jpg');
            res.write(homeimage);
            res.end();
    } else {
            res.writeHead(404, {'content-type': 'text/html'});
            res.write('<h1>Page not found, 404!!</h1>');
            res.end();
    }
})

server.listen(3000, function(){
  console.log('serving port 3000');
})