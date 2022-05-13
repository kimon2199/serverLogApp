const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const cv = require('./commonVariablesNode');
const sql_head = cv.sql_head;

let sql_fields = "(";
let sql_question_marks = "(";
for (var i=0; i<sql_head.length; i++){
    sql_fields = sql_fields + sql_head[i] + ',';
    sql_question_marks = sql_question_marks + '?,';
}
sql_fields = sql_fields.slice(0, -1) + ')';
sql_question_marks = sql_question_marks.slice(0, -1) + ')';

const db = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || 'root',
    database: process.env.MYSQL_DB   || 'node_db'
});

const port = process.env.PORT || 8005;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req,res)=>{
    let fields = [];
    for (var i=0; i<sql_head.length; i++){
        fields.push(req.body[sql_head[i]]);
    }
    const sqlInsert = "INSERT INTO server_logs " + sql_fields + " VALUES " + sql_question_marks;
    db.query(sqlInsert, fields, (err, result)=>{
        console.log('backend received log to insert');
        res.send(result);
    });
});

app.get('/api/get/all', (req,res)=>{
    const sqlSelect = "SELECT * FROM server_logs";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    });
})

app.get('/api/get/count', (req,res)=>{
    const sqlCount = "SELECT COUNT(*) FROM server_logs";
    db.query(sqlCount, (err, result)=>{
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
    let fields = [];
    for (var i=0; i<sql_head.length; i++){
        fields.push(req.body[sql_head[i]]);
    }

    let sqlUpdate = "UPDATE server_logs SET ";
    for (var i=0; i<sql_head.length; i++){
        sqlUpdate = sqlUpdate + sql_head[i] + " = ?, ";
    }
    sqlUpdate = sqlUpdate.slice(0, -2) + " WHERE id=" + req.params.id;

    db.query(sqlUpdate, fields, (err, result)=>{
        res.send(result);
    });
})

app.listen(port, function(){
    console.log('Node listening on port ' + port);
});