import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Card, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <p className='mt-5'/>
      <Col>

        <h2 className='text-center'>HELLO</h2>
        <p className='mt-5'/>

        <Row className="justify-content-center">
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Header as="h5">Hello</Card.Header>
              <Card.Body>
                <Card.Title>Lorem Ipsum!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">1 Chap</Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Header as="h5">Hello</Card.Header>
              <Card.Body>
                <Card.Title>Lorem Ipsum!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">1 Chap</Card.Subtitle>
                <Card.Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque et quasi architecto beatae vitae.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Header as="h5">Hello</Card.Header>
              <Card.Body>
                <Card.Title>Lorem Ipsum!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">1 Chap</Card.Subtitle>
                <Card.Text>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      
    </Container>
  );
}


export default Home;