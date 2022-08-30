import 'bootstrap/dist/css/bootstrap.min.css';
import lep from './img/lep.png'
import lepL from './img/lepL.svg'
import selfieN from './img/selfieN.png'
import selfieB from './img/selfieB.png'
import frontEnd from './img/frontEnd.png'
import design from './img/design.png'
import backEnd from './img/backEnd.png'
import layerp1 from './img/layerp1.svg'
import layerp2 from './img/layerp2.svg'
import layerp3 from './img/layerp3.svg'
import layer2 from './img/layer2.svg'
import layer3 from './img/layer3.svg'
import chat from './img/email.svg'
import cv from './img/CV - David.pdf';
import { Container, Col, Card, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { data2 } from "./Data";


function Home(props: any) {
  const [top1, setTop] = useState('0px');
  const navigate = useNavigate();

  useEffect(() => {

    function handleChange(vari: number) {
      props.onChange(vari)
    }

    handleChange(0);
  }, []);





  return (<>
    <section className="d-flex flex-column" style={{ height: '80vh', color: 'rgba(3, 3, 3, 0.85)' }}>

      <Container className='d-flex flex-column h-100'>
        <h1 className='text-center frontText' style={{ marginTop: '3vh' }} data-aos="fade-down" data-aos-delay="0">I am a <ReactTypingEffect typingDelay={1000} eraseDelay={2000} eraseSpeed={200} speed={120} cursorClassName="homeCur" text={["Designer", "Full-Stack Developer", "Consultant"]} /></h1>
        <div className='text-center lead' style={{ marginTop: '2vh' }} data-aos="fade-down" data-aos-delay="100">Love to develop and code web applications ❤️</div>
        <Row className="justify-content-center position-relative" style={{ marginTop: '5vh' }} data-aos="fade-down" data-aos-delay="200">
          <img className="brows pe-none" src={selfieB} style={{ maxWidth: '25vh', top: top1 }} />
          <img className="" onMouseEnter={() => setTop('-4px')} onMouseLeave={() => setTop('0px')} src={selfieN} style={{ maxWidth: '25vh' }} />
        </Row>

      </Container>

      <div className="justify-content-center mt-auto">
        <div className="d-flex flex-column mt-auto ">
          <div className="mx-auto position-relative" style={{ bottom: '-1px' }}>
            <img src={lepL} className='position-absolute lightB w-100 px-2' style={{ maxWidth: '60vh', zIndex: 2 }} />
            <img src={lep} className='w-100 position-relative px-2' style={{ maxWidth: '60vh', zIndex: 1 }} />
          </div>
        </div>

        <div className="d-flex flex-column position-relative" style={{ zIndex: -1, bottom: '-3.68vw' }}>
          <div className="w-100 position-absolute overflow-hidden p-0" style={{ bottom: '-3.2vw' }}>
            <img src={layerp3} className='w-100 layerp1' />
          </div>
          <div className="w-100 position-absolute overflow-hidden p-0" style={{ bottom: '-2.2vw' }}>
            <img src={layerp2} className='w-100 layerp2' />
          </div>
          <div className="w-100 position-absolute overflow-hidden p-0" style={{ bottom: '0' }}>
            <img src={layerp1} className='w-100 layerp3' />
          </div>
        </div>
      </div>

    </section>

    <section style={{ backgroundColor: '#6a2fea', color: 'white', paddingBottom: '10rem' }}>
      <Container className='py-10' >
        <Row className="mx-auto" style={{ maxWidth: '820px' }}>
          <h3 className="text-center ">Hi, I’m David. Nice to meet you.</h3>
          <div className="text-center pt-4">My journey as a full-stack developer began nearly 7 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          </div>
        </Row>
      </Container>
    </section>
    <section className="pb-5" style={{ color: 'rgba(3, 3, 3, 0.85)' }}>
      <div className="h-0" style={{ height: 0, marginTop: '-1px' }}>
        <img src={layer2} className='w-100 ' style={{ zIndex: -1 }} />
      </div>

      <Container style={{ marginTop: "-10rem", fontSize: "17px", borderWidth: "1px" }}>

        <div data-aos="fade-up" data-aos-anchor-placement="top" data-aos-offset='100' >
          <Card className=" br-30 cardServe">
            <div className="d-flex flex-wrap lh-base sCardC">
              <Col className="text-center p-5" >
                <Row className="justify-content-center mb-4 " >
                  <img className={'imgTri'} src={design} style={{ maxHeight: '48px', width: 'auto' }} />
                </Row>
                <h5 className="fw-bold mb-2">Designer</h5>
                <p>I do simple content structures, clean design principles, and meaningful interactions.</p>
                <p className="text-primary fw-bold  mt-5 mb-1">Things I enjoy designing:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="text-primary fw-bold mt-5 mb-1">Design Tools:</p>
                <ul className="list-unstyled">
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Indesign</li>
                  <li>Canvas</li>
                  <li>Pen &amp; Paper</li>
                  <li>Calligrapher</li>
                </ul>
              </Col>

              <Col className="text-center lh-base p-5" >
                <Row className="justify-content-center mb-4" >
                  <img className={'imgTri'} src={frontEnd} style={{ maxHeight: '48px', width: 'auto' }} />
                </Row>
                <h5 className="fw-bold mb-2">Front-end Developer</h5>
                <p>I enjoy coding things from the ground up and bringing them to life in the browser. </p>
                <p className="text-primary fw-bold mt-5 mb-1">Languages:</p>
                <p>HTML, CSS, JavaScript, TypeScript</p>
                <p className="text-primary fw-bold mt-5 mb-1">Dev Tools:</p>
                <ul className="list-unstyled">
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>jQuery</li>
                  <li>Github</li>
                  <li>VS Code</li>
                  <li>Terminal</li>
                  <li>Codepen</li>
                  <li>Node.js</li>
                </ul>
              </Col>

              <Col className="text-center lh-base p-5" >
                <Row className="justify-content-center mb-4 " >
                  <img className={'imgTriL'} src={backEnd} style={{ maxHeight: '60px', width: 'auto', marginTop: '-11px' }} />
                </Row>
                <h5 className="fw-bold mb-2">Back-end Developer</h5>
                <p>I enjoy designing databases and seeing the data flow between them and the user.</p>
                <p className="text-primary fw-bold mt-5 mb-1">Languages:</p>
                <p>PHP, Python, Java, JavaScript</p>
                <p className="text-primary fw-bold mt-5 mb-1">Dev Tools:</p>
                <ul className="list-unstyled">
                  <li>MySQL</li>
                  <li>VS Code</li>
                  <li>Terminal</li>
                  <li>Apache</li>
                  <li>WAMP/LAMP</li>
                  <li>Express/Node.JS</li>
                </ul>
              </Col>
            </div>
          </Card>
        </div>

      </Container>

    </section>

    <section style={{ borderTop: '1px solid rgba(0, 0, 0, 0.125)', color: 'rgba(3, 3, 3, 0.85)' }}>
      <Container>
        <Row className="mx-auto pt-5 mt-5" style={{ maxWidth: '720px' }}>
          <h3 className="text-center ">I'm thrilled to have partnered with these fantastic companies:</h3>
        </Row>
        <Swiper
          grabCursor={true}
          modules={[Autoplay]}
          className="mySwiper3"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {data2.map((book: string) => (
            <SwiperSlide className='d-flex' style={{ boxShadow: 'none', height: '300px' }}><img className='m-auto cImg h-100 w-100' src={book} style={{ objectFit: 'contain' }} /></SwiperSlide>
          ))}

        </Swiper>
      </Container>

    </section>
    <img src={layer3} className='w-100' style={{ zIndex: -1 }} />

    <section className="visitSec" >

      <Container className="position-relative conCard" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay='0'>
        <Row className="m-auto" style={{ maxWidth: '1200px', zIndex: 2 }}>

          <Card bg={'dark'} key={'dark'} text={'white'} className="mb-2 cerd br-30" >
            <Card.Body className="m-4" >
              <Row className="align-content-center sRow">
                <Col className="column level-item d-flex">
                  <h3 className="title m-auto">Start a project</h3>
                </Col>
                <Col className="column level-item d-flex">
                  <p className="m-auto text-center" style={{ fontSize: '18px' }}>Interested in joining forces together? <br />Check out my <a href={cv} ><b style={{ fontWeight: '600' }} >CV</b></a> & let's have a talk!</p>
                </Col>
                <Col className="column level-item d-flex">
                  <Button style={{ minWidth: '200px', maxHeight: '54px', borderRadius: '50px', borderWidth: '2px', fontWeight: 'bold', color: 'white' }} className="m-auto" variant="outline-primary" onClick={(e) => {
                    e.preventDefault();
                    navigate(`/contact`);
                  }}>
                    <img className="position-relative imgButton1" src={chat} style={{ maxWidth: '26px', top: "-2px", }} />
                    &nbsp;Contact Me
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

      </Container>

    </section>
  </>
  );
}


export default Home;