const http = require('http');
const PORT = 5500;
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write("This is the Home Page");
        res.end();
    } else if (req.url === '/about') {
        res.write("This is the About Page");
        res.end();
    }
    else if (req.url === '/contact') {
        res.write("This is the Contact Page");
        res.end();
    } else if (req.url === '/file-write'){
        fs.writeFile('demo.txt', 'hello world', ()=>{
            res.write('file write successfully');
            res.end();
        })
    }
    

})

server.listen(PORT,()=>{
    console.log(`it is listening on port ${PORT}`);
})