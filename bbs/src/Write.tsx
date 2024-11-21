import {Component} from "react";
import {Form, Button} from "react-bootstrap";
import Axios from "axios";// 리액트에서 데이터베이스를 사용하려면 필요함

class Write extends Component{

// 모든 초기화
state = {
    isModifyMode:false,//수정모드 사용하지 않음
    title:"",//타이틀 공백
    content:"",//내용 공백
}
//최초에 글을 쓰기
write = () =>{
    Axios.post("http://localhost:8000/insert",{
        title: this.state.title,//타이틀에 스테이트 타이틀을 대입
        content: this.state.content,//콘텐츠에 스테이트 콘텐츠를 대입
    }).then((res) =>{
        console.log(res);
    }).catch((e) =>{
        console.error(e);
    });
};
//수정하기
update = () => {
    Axios.post("http://localhost:8000/update",{
        title: this.state.title,
        content: this.state.content,
    })
    .then((res) =>{
     console.log(res); 
    })
    .catch((e) => {
    console.error(e);    
    })
}

//각각의 마무리
handleChange = (e: any) => {
    this.setState({
[e.target.name] : e.target.value,
    });
};





    render(){
        return(
<>
<Form>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>제목</Form.Label>
        <Form.Control 
        type="text" 
        onChange={this.handleChange}
        placeholder="제목을 입력하세요"
        />
    </Form.Group>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea"
        onChange={this.handleChange}
        placeholder="내용을 입력하세요"
        />
    </Form.Group>
</Form>
<div className="d-flex justify-content-end">
    <div className="btn-group">
<Button 
variant="info" 
onClick={this.state.isModifyMode ? this.write : this.update}
>
작성완료
</Button>
<Button variant="secondary">취소</Button>
    </div>
</div>
</>  
        );
    }
}
export default Write;