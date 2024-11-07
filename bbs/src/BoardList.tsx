import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button } from "react-bootstrap";

class BoardList extends Component{
 render(){
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
<th></th><th>번호</th><th>제목</th><th>작성자</th><th>작성일</th>
        </tr>
    </thead>
    <tbody>
        <tr>
<td><input type="checkbox" className="form-check"/></td>  
<td>1</td><td>게시글</td><td>hyi</td><td>2024-11-04</td>         
        </tr>
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