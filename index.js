const express = require("express");
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server); //172.20.192.227
const { faker } = require('@faker-js/faker'); // faker
const mysql = require('mysql2'); // MySQL

const ip = "127.0.0.1";
const port = 4000;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

// ------------------ connection MySQL
con = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "",
    database: "calendar"
});


// ------------------ faker
const salaries = [];
const salaries_count = 15;
for (let i = 0; i < salaries_count; i++) {
    // console.log(i);

    salaries[i] = ({
        id_salarie: faker.string.alphanumeric(5),
        fullName_salarie: faker.person.fullName()
    });
    // console.dir(salaries);
};



// ------------------ connection MySQL
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // ------------------ socket.io (server)
    io.on("connection", (socket) => {
        socket.on("selectDates", (info) => {
            // console.dir(info);

            // ------------------ insert MySQL
            const sql = `INSERT INTO conges (id_salarie, start, end) 
            VALUES ('djjf4565', '${info.start}', '${info.end}')`;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });

        });
    });

});



server.listen(port, ip, () => {
    console.log("Démarrer sur http://" + ip + ":" + port);

});
