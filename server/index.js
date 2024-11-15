const express = require('express');
const cors = require("cors");//출처허용 옵션
const app = express();
const mysql = require("mysql");
//상수 mysql은 mysql모듈을 사용하겠다는 의미
const PORT = process.env.port || 8000;
const bodyParser = require("body-parser");


let corsOptions = {
    orgin:"http://localhost:3000",
    credential:true,
}


app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createPool({
//database bbs에 접속하는 커넥션 풀
host:"localhost",
user:"root",
password:"1234",
database:"bbs",
});

app.get("/list",(req, res) => {
const sqlQuery = 
"select board_id, board_title, register_id, date_format(register_date, '%Y-%m-%d') as register_date from board;";
db.query(sqlQuery,(err, result) => {
res.send(result);
});
});

app.post("/detail",(req, res) => {
const id = req.body.id;
const sqlQuery =
"select board_id, board_title, board_content from board where board_id = ?;";
db.query(sqlQuery,[id],(err,result) =>{
res.send(result);
});
});

//글쓰기
app.post("/insert", (req, res) =>{
    const title = req.body.title;//제목
    const content = req.body.content;//내용

const sqlQuery =
"insert into board (board_title, board_content, register_id) values (?,?,'hwang');";
db.query(sqlQuery,[title, content],(err, result) =>{
res.send(result);
});
});

//수정 update
app.post("/update",(req, res) =>{
const id = req.body.id;
const title = req.body.title;
const content = req.body.content;

const sqlQuery =
"update board set board_title = ?, board_content = ?, updater_id ='hwang' where board_id = ?;";
db.query(sqlQuery,[title, content, id], (err, result) =>{
res.send(result);
});
});

//delete
app.post("/delete",(req, res) => {
const id = req.body.boardIdList;

const sqlQuery=`delete from board where board_id in (${id.join()})`;
db.query(sqlQuery,(err, result) => {
res.send(result);
});
});

app.listen(PORT, ()=>{
console.log(`running on port ${PORT}`);
});

