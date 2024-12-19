import {Button, Container,Row,Col, Card, Accordion, Spinner} from 'react-bootstrap';

const Skill = () => {
    return(
<>
<Container>
    <Row>
        <Col>
<Spinner animation='border' variant='warning'/>게임개발
<img src=""/>     
        </Col>
        <Col>
<Spinner animation='border' variant='warning'/>C#
<img src=""/>         
        </Col>
        <Col>
<Spinner animation='border' variant='warning'/>python  
<img src=""/>       
        </Col>
        <Col>
<Spinner animation='border' variant='warning'/>react
<img src=""/>         
        </Col>
    </Row>
</Container>
</>
    );
}
export default Skill;