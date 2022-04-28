const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    port: '3307',
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'server_logs_db'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req,res)=>{
    const type = req.body.type;
    const host = req.body.host;
    const hostname = req.body.hostname;
    const os = req.body.os;
    const ip = req.body.ip;
    const disk = req.body.disk;
    const datastore = req.body.datastore;
    const ram = req.body.ram;
    const cores = req.body.cores;
    const vlan = req.body.vlan;
    const sw = req.body.sw;
    const physPort = req.body.physPort;

    const sqlInsert = "INSERT INTO server_logs (server_type,host,hostname,os,ip,disk,datastore,ram,cores,vlan,sw,physical_port) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [type,host,hostname,os,ip,disk,datastore,ram,cores,vlan,sw,physPort], (err, result)=>{
        console.log('backend received log to insert');
        res.send(result);
    });
});

app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM server_logs";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    });
})

app.delete('/api/delete/:id', (req,res) => {
    const sqlDelete = "DELETE FROM server_logs WHERE id=" + req.params.id;
    db.query(sqlDelete, (err, result)=>{
        res.send(result);
    });
})

app.put('/api/edit/:id', (req,res) => {
    const type = req.body.type;
    const host = req.body.host;
    const hostname = req.body.hostname;
    const os = req.body.os;
    const ip = req.body.ip;
    const disk = req.body.disk;
    const datastore = req.body.datastore;
    const ram = req.body.ram;
    const cores = req.body.cores;
    const vlan = req.body.vlan;
    const sw = req.body.sw;
    const physPort = req.body.physPort;

    const sqlUpdate = "UPDATE server_logs \
    SET server_type = ?, host = ?, hostname= ?, os = ?, ip = ?, disk = ?,\
    datastore = ?, ram = ?, cores = ?, vlan= ?, sw = ?, physical_port = ?\
    WHERE id=" + req.params.id;
    db.query(sqlUpdate, [type,host,hostname,os,ip,disk,datastore,ram,cores,vlan,sw,physPort], (err, result)=>{
        res.send(result);
    });
})

app.listen(3001, () =>{
    console.log('runnig on port 3001');
});