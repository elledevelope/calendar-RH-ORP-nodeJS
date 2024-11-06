const express = require("express");
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server); //172.20.192.227
const { faker } = require('@faker-js/faker'); // faker

const ip = "127.0.0.1";
const port = 4000;
app.use(express.static('public'));
app.get('/',(req,res)=>{
   res.sendFile('index.html',{root:__dirname}); 
})


// faker
const salaries = [];
const salaries_count = 15;
//id_salarie : faker.string.alphanumeric(5) // '3e5V7'
// fullName_salarie : faker.person.fullName()
//lastName_salarie : faker.person.lastName()

for (let index = 0; index < salaries_count; index++) {
    console.log(index); 
}







io.on("connection",(socket)=>{

})

server.listen(port,ip,()=>{
    console.log("Demarer sur http://"+ip+":"+port);
    
})
