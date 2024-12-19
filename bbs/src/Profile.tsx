import {Button, Container,Row,Col, Card, Accordion} from 'react-bootstrap';

const Profile = () =>  {
    return(
<>
<Container>
<Row>
<Col>
<h1 className="my-5">profile</h1>
</Col>    
</Row>
<Row>
<Col>
<Card>
    <Card.Img variant='top' src="images/profile.jpg"/>
    <Card.Body>
<Card.Title>김련호</Card.Title>  
<Card.Text>
김련호의 프로필 입니다
</Card.Text> 
<Button variant="primary">more</Button>     
    </Card.Body>
</Card>
</Col>
<Col>
<Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
            취미는 ?
        </Accordion.Header>
        <Accordion.Body>
            제곧내
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey='1'>
        <Accordion.Header>
            취미는 ?
        </Accordion.Header>
        <Accordion.Body>
            제곧내
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
</Col>
</Row>
</Container>
</>
    );
}
export default Profile;