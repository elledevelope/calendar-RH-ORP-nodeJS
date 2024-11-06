const express = require("express");
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server); //172.20.192.227
const { faker } = require('@faker-js/faker');

const ip = "127.0.0.1";
const port = 4000;
app.use(express.static('public'));
app.get('/',(req,res)=>{
   res.sendFile('index.html',{root:__dirname}); 
})


const salaries = [];
const salaries_count = 15;



io.on("connection",(socket)=>{

})

server.listen(port,ip,()=>{
    console.log("Demarer sur http://"+ip+":"+port);
    
})
