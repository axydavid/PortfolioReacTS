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
import portfolio from './img/portfolio3.svg'
import cv from './Resume-Axy-David.design.pdf';
import { Container, Col, Card, Row, Button } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { data2, data } from "./Data";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


function Home(props: any) {
  const [top1, setTop] = useState('0px');
  const navigate = useNavigate();

  useEffect(() => {

    function handleChange(vari: number) {
      props.onChange(vari)
    }

    handleChange(0);
  }, []);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  let scroll2 = useScroll({
    target: ref1,
    offset: ["end end", "start start"]
  });

  let scroll3 = useScroll({
    target: ref2,
    offset: ["end end", "start start"]
  });
  // for border radius
  let scrollYProgress2 = useSpring(scrollYProgress, { stiffness: 1250, damping: 10 })
  let coolProgress = useTransform(scrollYProgress2, [0, 1], ["40%", "44%"]);

  //for rest
  let scrollYProgress1 = useSpring(scrollYProgress, { stiffness: 1250, damping: 100 })

  let scaleProgress = useTransform(scrollYProgress1, [0, 1], [0, 2400]);
  let scaleProgressXY = useTransform(scrollYProgress1, [0, 1], [0, 2400]);

  let scrollY2Progress1 = useSpring(scroll2.scrollYProgress, { stiffness: 1000, damping: 100 })
  let scaleHeight = useTransform(scrollY2Progress1, [0, 0.01, 0.5], [0, -400, -3000]);
  let scaleOpacity = useTransform(scrollY2Progress1, [0, 0.02], [1, 0]);
  let scaleOpacity1 = useTransform(scrollY2Progress1, [0.6, 1], [0, -250]);
  let scaleZIndex = useTransform(scrollY2Progress1, [0.85, 0.86, 1], [-1, 0, 1]);

  let scrollFade = useSpring(scroll3.scrollYProgress, { stiffness: 1250, damping: 100 })
  let scaleFade = useTransform(scrollFade, [0, 0.2, 0.4, .7], [1, 1, .5, 0]);


  return (<div style={{ overflow: 'clip' }}>
    <div style={{ position: 'sticky' }} className='popul'>
      <div className='d-grid position-sticky bubble-container z-3'>
        <motion.div
          className='texZ justify-content-center align-content-center d-flex z-1'
          style={{ width: scaleProgressXY, height: scaleProgressXY, borderRadius: '50%', opacity: scaleFade }}
        >
          <div className='align-self-center flex-shrink-0 text-white ' style={{ maxWidth: '820px', width: '80vw' }}>
            <h3 className="text-center ">Hi there, I'm David!</h3>
            <div className="text-center pt-4">My journey as a Designer & Developer began over seven years ago, I have worked for various agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am committed, naturally curious, and perpetually working on improving my chops one project at a time.
            </div>
          </div>
        </motion.div>
        <motion.div
          //the thing that makes the purple bubble appear
          style={{ width: scaleProgress, height: scaleProgress, borderRadius: coolProgress, top: scaleHeight }}
          className="boxZ"
          animate={{
            rotate: [-360, 0, 360]
          }}
          transition={{
            duration: 10,
            times: [0, .5, 1],
            repeat: Infinity,
            ease: "linear"
            // repeatDelay: 0
          }}
        >
        </motion.div>

      </div>
      <motion.div style={{ opacity: scaleOpacity }}>
        <section className="d-flex flex-column" style={{ height: '80vh', color: 'rgba(3, 3, 3, 0.85)' }}>

          <Container className='d-flex flex-column h-100'>
            <h1 className='text-center frontText' style={{ marginTop: '3vh' }} data-aos="fade-down" data-aos-delay="0">I am a <ReactTypingEffect typingDelay={1000} eraseDelay={2000} eraseSpeed={200} speed={120} cursorClassName="homeCur" text={["Product Designer", "Full-Stack Developer", "Consultant"]} /></h1>
            <div className='text-center lead' style={{ marginTop: '2vh' }} data-aos="fade-down" data-aos-delay="100">Love to design & develop everything web ❤️</div>
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

            <div className="d-flex flex-column position-relative " style={{ zIndex: -1, bottom: '-3.68vw' }}>
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
      </motion.div>
    </div>
    <motion.div ref={ref} />

    <section style={{ opacity: 0, paddingBottom: '30rem' }}>
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

      <Container className="" style={{ marginTop: "-10rem", fontSize: "17px", borderWidth: "1px" }}>
        <motion.div ref={ref2} />

        <motion.div className='position-relative d-flex flex-column ' style={{ top: scaleOpacity1 }} >

          <Card className=" br-30 cardServe mClass fake-container-cl mClassShow align-self-center " style={{ maxWidth: "1000px" }}>
            <a className='text-decoration-none ' href={data[0].case}>
              <div className="d-flex flex-wrap lh-base sCardC">
                <div className=" p-5 w-100 d-flex flex-column flex-sm-row" style={{}} >
                  <Col className='main-port-pic'>
                    <img className='imgTri br-30 w-100 mb-4 mb-sm-0' src={data[0].img[0]} style={{}} />
                  </Col>
                  <Col className='d-flex flex-column ps-0 ps-sm-5 content-front-card'>
                    <h5 className="fw-bold mb-3 ">{data[0].title}</h5>
                    <p className="">{data[0].content}</p>
                    <div className="fw-bold mt-auto ms-auto " style={{ color: '#6a2fea' }}>Read More</div>
                  </Col>
                </div>
              </div>
            </a>
          </Card>

          <Card className=" br-30 cardServe mClass fake-container-cl mClassShow align-self-center " style={{ maxWidth: "1000px" }}>
            <a className='text-decoration-none ' href={data[1].case}>
              <div className="d-flex flex-wrap lh-base sCardC">
                <div className=" p-5 w-100 d-flex flex-column flex-sm-row" style={{}} >
                  <Col className='main-port-pic'>
                    <img className='imgTri br-30 w-100 mb-4 mb-sm-0' src={data[1].img[0]} style={{}} />
                  </Col>
                  <Col className='d-flex flex-column ps-0 ps-sm-5 content-front-card'>
                    <h5 className="fw-bold mb-3 ">{data[1].title}</h5>
                    <p className="">{data[1].content}</p>
                    <div className="fw-bold mt-auto ms-auto " style={{ color: '#6a2fea' }}>Read More</div>
                  </Col>
                </div>
              </div>
            </a>
          </Card>

          <Card className=" br-30 cardServe mClass fake-container-cl mClassShow align-self-center " style={{ maxWidth: "1000px" }}>
            <a className='text-decoration-none ' href={data[6].dri}>
              <div className="d-flex flex-wrap lh-base sCardC">
                <div className=" p-5 w-100 d-flex flex-column flex-sm-row" style={{}} >
                  <Col className='main-port-pic'>
                    <img className='imgTri br-30 w-100 mb-4 mb-sm-0' src={data[6].img[0]} style={{}} />
                  </Col>
                  <Col className='d-flex flex-column ps-0 ps-sm-5 content-front-card'>
                    <h5 className="fw-bold mb-3 ">{data[6].title}</h5>
                    <p className="">{data[6].content}</p>
                    <div className="fw-bold mt-auto ms-auto " style={{ color: '#6a2fea' }}>Read More</div>
                  </Col>
                </div>
              </div>
            </a>
          </Card>

          <Card className=" br-30 cardServe mClass fake-container-cl mClassShow align-self-center " style={{ maxWidth: "1000px" }}>
            <a className='text-decoration-none ' href={data[3].dri}>
              <div className="d-flex flex-wrap lh-base sCardC">
                <div className=" p-5 w-100 d-flex flex-column flex-sm-row" style={{}} >
                  <Col className='main-port-pic'>
                    <img className='imgTri br-30 w-100 mb-4 mb-sm-0' src={data[3].img[0]} style={{}} />
                  </Col>
                  <Col className='d-flex flex-column ps-0 ps-sm-5 content-front-card'>
                    <h5 className="fw-bold mb-3 ">{data[3].title}</h5>
                    <p className="">{data[3].content}</p>
                    <div className="fw-bold mt-auto ms-auto " style={{ color: '#6a2fea' }}>Read More</div>
                  </Col>
                </div>
              </div>
            </a>
          </Card>

          <Card className=" br-30  ">
            <Row>
              <Col className="text-center p-5" >
                <Row className="justify-content-center mb-4 " >
                  <img className={'imgTri'} src={design} style={{ maxHeight: '48px', width: 'auto' }} />
                </Row>
                <h5 className="fw-bold mb-2">Design</h5>
                <p>Committed to crafting captivating user-centric experiences</p>
                <p className="text-primary fw-bold  mt-5 mb-1">Concepts:</p>
                <p>Product Design, UX, UI, Web, Apps</p>
                <p className="text-primary fw-bold mt-5 mb-1">Tools:</p>
                <ul className="list-unstyled">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Indesign</li>
                  <li>Pen &amp; Paper</li>
                  <li>Calligrapher</li>
                </ul>
              </Col>

              <Col className="text-center lh-base p-5" >
                <Row className="justify-content-center mb-4" >
                  <img className={'imgTri'} src={frontEnd} style={{ maxHeight: '48px', width: 'auto' }} />
                </Row>
                <h5 className="fw-bold mb-2">Front-end Development</h5>
                <p>Bringing projects to life within the browser environment</p>
                <p className="text-primary fw-bold mt-5 mb-1">Languages:</p>
                <p>HTML, CSS, JavaScript, TypeScript</p>
                <p className="text-primary fw-bold mt-5 mb-1">Tools:</p>
                <ul className="list-unstyled">
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>Github</li>
                  <li>NodeJS</li>
                  <li>Codepen</li>
                </ul>
              </Col>

              <Col className="text-center lh-base p-5" >
                <Row className="justify-content-center mb-4 " >
                  <img className={'imgTriL'} src={backEnd} style={{ maxHeight: '60px', width: 'auto', marginTop: '-11px' }} />
                </Row>
                <h5 className="fw-bold mb-2">Back-end Development</h5>
                <p>Crafting databases and overseeing the flow exchange between them and users</p>
                <p className="text-primary fw-bold mt-5 mb-1">Languages:</p>
                <p>PHP, Python, Java, JavaScript</p>
                <p className="text-primary fw-bold mt-5 mb-1">Tools:</p>
                <ul className="list-unstyled">
                  <li>MySQL</li>
                  <li>NodeJS</li>
                  <li>Apache</li>
                  <li>LAMP</li>
                  <li>WAMP</li>
                  <li>Express</li>
                </ul>

              </Col>
            </Row>
          </Card>


        </motion.div>

      </Container>

    </section>


    <section style={{ color: 'rgba(3, 3, 3, 0.85)' }}>
      <Container>
        <Row className="mx-auto pt-5 mt-5" style={{ maxWidth: '720px' }}>
          {/* <h3 className="text-center ">I'm thrilled to have partnered with these fantastic companies:</h3> */}
        </Row>
        {/* <motion.div className='position-relative ' style={{ zIndex: scaleZIndex }}>
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
        </motion.div> */}

      </Container>
    </section>

    <motion.div ref={ref1} />
    <img src={layer3} className='w-100' style={{ zIndex: -1 }} />

    <section className="visitSec" >

      <Container className="position-relative conCard" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay='0'>
        <Row className="m-auto" style={{ maxWidth: '1200px', zIndex: 2 }}>

          <Card bg={'dark'} key={'dark'} text={'white'} className="mb-2 cerd br-30" >
            <Card.Body className="m-4" >
              <div className="align-content-center d-flex flex-column flex-sm-row gap-4 gap-sm-0 ">
                <div className="level-item d-flex">
                  <h3 className="title m-auto">Seize the opportunity</h3>
                </div>
                <div className="level-item d-flex mx-auto">
                  <p className="m-auto text-center" style={{ fontSize: '18px' }}>Take your vision to the next level!
                    <br />Here's my <a href={cv} ><b style={{ fontWeight: '600' }} >CV</b></a>, don't hesitate to <a href={'#/contact'} onClick={(e) => {
                      e.preventDefault();
                      navigate(`/contact`);
                    }}><b style={{ fontWeight: '600' }} >Reach Out!</b></a>
                  </p>
                </div>
                <div className="level-item d-flex ">
                  <Button style={{ minWidth: '200px', maxHeight: '54px', borderRadius: '50px', borderWidth: '2px', fontWeight: 'bold', color: 'white' }} className="m-auto" variant="outline-primary" onClick={(e) => {
                    e.preventDefault();
                    navigate(`/portfolio`);
                    window.scrollTo(0, 0);

                  }}>
                    <img className="position-relative imgButton1" src={portfolio} style={{ maxWidth: '26px', top: "-2px", }} />
                    &nbsp;Portfolio
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Row>

      </Container>

    </section>
  </div>
  );
}


export default Home;