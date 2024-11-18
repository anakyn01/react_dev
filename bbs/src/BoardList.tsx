import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button } from "react-bootstrap";
import Axios from "axios";

//list까지 완료

const Board = ({
id, title, registerId, registerDate,//필드
}:{
id:number; title:string; registerId:string; registerDate:string;//필드 타입
}) =>{
return(
<tr>
    <td><input type="checkbox" className="form-check"/></td>
    <td>{id}</td>
    <td>{title}</td>
    <td>{registerId}</td>
    <td>{registerDate}</td>
</tr>
);
};


class BoardList extends Component{

 state = {boardList:[],};//상태 = 어레이 초기화

 getList = () => {
    Axios.get("http://localhost:8000/list", {})
    .then((res) =>{
        const {data} = res;
        this.setState({
            boardList: data,
        });
    })
    .catch((e) => {
        console.error(e);
    });
 };

 //데이터를 렌더하기전에 붙임
 componentDidMount(){
     this.getList();
 }

 render(){

    const{boardList}:{boardList:any} = this.state;

    return(
<>
<h1 className="my-5">게시판</h1>
<Table striped bordered hover>
    <colgroup>
<col style={{"width":"10%"}}/>
<col style={{"width":"10%"}}/>
<col style={{"width":"60%"}}/>
<col style={{"width":"10%"}}/>
<col style={{"width":"10%"}}/>    
    </colgroup>
    <thead>
        <tr className="text-center">
<th>체크박스</th><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th>
        </tr>
    </thead>
    <tbody>
{
boardList.map((v:any) => {
    return(
<Board 
id={v.BOARD_ID} 
title={v.BOARD_TITLE} 
registerId={v.REGISTER_ID} 
registerDate={v.REGISTER_DATE}
key={v.BOARD_ID}
/>
    );
})
}
    </tbody>
</Table>
<div className="d-flex justify-content-end my-5">
<div className="btn-group">
    <Button variant="info">글쓰기</Button>
    <Button variant="secondary">수정하기</Button>
    <Button variant="danger">삭제하기</Button>
</div>
</div>






</>
    );
 }
}
export default BoardList;

/*
데이터를 콘트롤 할때 사용함
const submitTest = () =>{
    Axios.get("http://localhost:8000/",{}).then(() =>{
        alert("등록완료");
    });
}
*/