import {Component} from "react";
import {Form, Button} from "react-bootstrap";

class Write extends Component{
    render(){
        return(
<>
<Form>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>제목</Form.Label>
        <Form.Control type="email" placeholder="이메일을 적으세요"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea"/>
    </Form.Group>
</Form>
<div className="d-flex justify-content-end">
    <div className="btn-group">
<Button variant="info">작성완료</Button>
<Button variant="secondary">취소</Button>
    </div>
</div>
</>  
        );
    }
}
export default Write;