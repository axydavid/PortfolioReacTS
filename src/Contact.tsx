import { Container, Col, Form, Row, Button } from 'react-bootstrap';
import { useRef, useState, useEffect } from "react";

import selfieB from './img/selfieB.png'
import selfieN from './img/selfieN.png'
import selfieS from './img/selfieS.png'
import emailjs from '@emailjs/browser';

function Contact(props: any) {
  const form = useRef<any>();
  const textC = useRef<any>();
  const smil = useRef<any>();
  const [top1, setTop] = useState('0px');
  const [rows, setRows] = useState(5);
  const [isDisabled, setDisabled] = useState(false);
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    handleChange(2);
    document.documentElement.scrollTo(0, 0);
    if (window.innerWidth < 366) setRows(2);
    else if (window.innerWidth < 720) setRows(3);
  }, []);


  function handleChange(vari: number) {
    props.onChange(vari)
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();

    textC.current.style.opacity = 0;
    emailjs.sendForm('service_p3u4adr', 'template_0jyarmn', form.current, '3-lia-PghOxw4NeYn')
      .then((result) => {

        // await delay(200);
        setDisabled(true);
        smil.current.style.opacity = 1;
        textC.current.innerHTML = "Your message has been received✔️<br>I will reply to you as soon as possible."
        textC.current.style.opacity = 1;
      }, (error) => {
        textC.current.style.opacity = 1;
        textC.current.innerHTML = "An error has occurred❌<br> Please try again."
      });


  };

  return (
    <Container className='d-flex flex-column contakCon' style={{ height: '80vh', color: 'rgba(3, 3, 3, 0.85)' }}>


      <Col className='m-auto text-center' style={{ maxWidth: "960px" }}>

        <Form ref={form} onSubmit={sendEmail} className='text-start formEmail h-100 d-flex flex-column' style={{ maxWidth: "640px" }}  >
          <div className="pe-none d-flex w-100" >
            <Row className="mx-auto logo position-relative " style={{ top: "-16vh", marginBottom: "-16vh" }}
              data-aos="fade-down" data-aos-delay="0">
              <img ref={smil} className="smil" src={selfieS} style={{ maxWidth: '22vh', zIndex: 1 }} />
              <img className="brows" src={selfieB} style={{ maxWidth: '22vh', top: top1 }} />
              <img className="pe-auto" onMouseEnter={() => setTop('-3px')} onMouseLeave={() => setTop('0px')} src={selfieN} style={{ maxWidth: '22vh' }} />
            </Row>
          </div>
          <h2 className='fw-normal recText text-center mt-auto' ref={textC} data-aos="fade-down" data-aos-delay="200">
            Thanks for reaching out to me. <br />How can I help you today?</h2>

          <Row className='mt-auto' data-aos="fade-down" data-aos-delay="300" >
            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" name="from_name" placeholder="" disabled={isDisabled} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="reply_to" placeholder="" disabled={isDisabled} />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" data-aos="fade-down" data-aos-delay="400">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={rows} disabled={isDisabled} />
          </Form.Group>
          <Row className='mb-3'>
            <Button className="m-auto btn-round " variant="outline-primary" type="submit" disabled={isDisabled} >
              Submit
            </Button>
          </Row>
        </Form>

      </Col>
    </Container>
  );
}


export default Contact;