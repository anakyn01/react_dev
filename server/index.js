const express = require('express');
const app = express();
let corsOptions = {
    orgin:"*",
    credential:true,
}

const cors = require("cors");//출처허용 옵션
const mysql = require("mysql");
//상수 mysql은 mysql모듈을 사용하겠다는 의미
const PORT = process.env.port || 8000;

const db = mysql.createPool({
//database bbs에 접속하는 커넥션 풀
host:"localhost",
user:"root",
password:"1234",
database:"bbs",
});

app.get("/",(req, res) => {
//console.log("requested.");
    const sqlQuery = "INSERT INTO requested(rowno) VALUES(1)"
    //로컬호스트에 접속할때 마다 값으로 1을 집어넣음
    db.query(sqlQuery,(err, result) => {
        res.send("success!");
    });
});

app.listen(PORT, ()=>{
console.log(`running on port ${PORT}`);
});

app.use(cors(corsOptions));