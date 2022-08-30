import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
type cardInfo = {
  accesibility: number,
  activity: string,
  key: string,
  link: string,
  participants: 1,
  price: number,
  type: string
}

function App() {

  const [cards, setCards] = useState<cardInfo[]>([])

  useEffect(() => {
    pingAPI();
  }, []);

  const pingAPI = () => {
    fetch('http://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then((data: cardInfo) => {
        setCards([...cards, ...[data]]);
      });
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        pingAPI().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
      <Button style={{ maxWidth: '145px' }} className="mx-auto" variant="primary" size="lg" disabled={isLoading} onClick={!isLoading ? handleClick : undefined}>
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }
  return (
    <div className="App">
      <Container>
        <p className='mt-5' />
        <Row><LoadingButton /></Row>
        <p className='mt-5' />
        <Row className='gap-1 justify-content-center '>
          {cards.map((item: cardInfo, index: number) => {
            return <Col className="justify-content-center" md="auto">
              <Card style={{ width: '18rem' }}>
                <Card.Header as="h5">Type: {item.type}</Card.Header>
                <Card.Body>
                  <Card.Title>Persons: {item.participants}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Cost: {item.price * 100}$</Card.Subtitle>
                  <Card.Text>
                    Description: {item.activity}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
