import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Row, Col } from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";
import Slide from "./Slide";

//list까지 완료

const Board = ({
id, 
title, 
content,
registerId, 
registerDate, 
props,//필드
}:{
id:number; 
title:string; 
content:string;
registerId:string; 
registerDate:string; 
props:any;//필드 타입
}) =>{
return(
<tr>
    <td>
        <input 
        type="checkbox" 
        className="form-check"
        value={id}
        onChange={(e) =>{
props.onCheckboxChange(e.currentTarget.checked, e.currentTarget.value);            
        }}
        /></td>
    <td>{id}</td>
    <td><a href="/detail">{title}</a></td>
    <td>{content}</td>
    <td>{registerId}</td>
    <td>{registerDate}</td>
</tr>
);
};
interface IProps{// 인터페이스 바디가 없는 구현체 자바(본문이 없고 핵심 줄만 있는것)
boardId: number;
handleCancel:() => void;   
}
class Detail extends Component<IProps>{

constructor(props:any){
    super(props);
    this.state = {
        boardList:[],
        checkList:[], 
    }
}

 state = {boardList:[], checkList:[],};//상태 = 어레이 초기화


 onCheckboxChange = (checked:boolean, id:any) =>{
    const list: Array<string> = this.state.checkList.filter((v) =>{
        return v != id;
    });
    if(checked){
        list.push(id);
    }
    this.setState({
        checkList:list,
    });
 }


 //데이터를 렌더하기전에 붙임
 /*componentDidMount(){
     this.getList();
 }
 componentDidUpdate(){
    if(!this.props.isComplete){
        this.getList();
    } 
 }*/

 render(){

    const{boardList}:{boardList:any} = this.state;

    return(
<>


<Container>
    <Row>
        <Col>
<h1 className="my-5">Read</h1>
<Table striped bordered hover>
    <colgroup>
<col style={{"width":"10%"}}/>
<col style={{"width":"10%"}}/>
<col style={{"width":"50%"}}/>
<col style={{"width":"10%"}}/>
<col style={{"width":"10%"}}/>
<col style={{"width":"10%"}}/>     
    </colgroup>
    <thead>
        <tr className="text-center">
<th>체크박스</th><th>번호</th><th>제목</th><th>내용</th><th>작성자</th><th>작성일</th>
        </tr>
    </thead>
    <tbody>
{
boardList.map((v:any) => {
    return(
<Board 
id={v.BOARD_ID} 
title={v.BOARD_TITLE} 
content={v.BOARD_CONTENT}
registerId={v.REGISTER_ID} 
registerDate={v.REGISTER_DATE}
key={v.BOARD_ID}
props={this}
/>
    );
})
}
    </tbody>
</Table>
<div className="d-flex justify-content-end my-5">
<div className="btn-group">
    <Link to="/">
        <Button variant="info">home</Button>
    </Link>
    <Link to="/write">
    <Button 
        variant="secondary"
    >
        수정하기</Button>
    </Link>

<Button 
variant="danger" 
>삭제하기</Button>
</div>
</div>
</Col>
</Row>
</Container>

</>
    );
 }
}
export default Detail;

/*
데이터를 콘트롤 할때 사용함
const submitTest = () =>{
    Axios.get("http://localhost:8000/",{}).then(() =>{
        alert("등록완료");
    });
}
*/