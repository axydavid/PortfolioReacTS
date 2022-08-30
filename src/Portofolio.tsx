import React, { useState, useEffect, useRef } from "react";
import { buttons, data } from "./Data";
import Modal from 'react-bootstrap/Modal'
import git from './img/git.svg'
import house from './img/house.svg'
import backvid from './img/slowBookeh.mp4'

import { Container, Col, Card, Button } from 'react-bootstrap';
import { Plock } from 'react-plock';
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function getData(): typeof data {
  const dataInst = data;
  return dataInst;
}

function filterData(pokeType: string): typeof data {
  return getData().filter((type) => {
    if (Array.isArray(type.tipo)) return type.tipo.find((type2) => type2 === pokeType);
    else return type.tipo === pokeType;
  });
}

export default function Portofolio(props: any) {
  const [filterDataState, setfilterDataState] = useState<typeof data>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 720) {
      return (true)
    } else {
      return (false)
    }
  };
  const [isMobile, setIsMobile] = useState(handleResize);
  const [buttons2, setButtons2] = useState(buttons);

  useEffect(() => {
    if (isMobile) setButtons2([
      'All', 'Full-Stack', 'Front-End', 'Back-End', 'SASS', 'JavaScript', 'TypeScript', 'Bootstrap',
      'React', 'jQuery', '.NET', 'PHP', 'MySQL']);
    let e: any = { currentTarget: { value: 'All' } };
    handleData(e);
    handleChange(1);
    if (videoRef !== null) videoRef.current!.playbackRate = 0.5;
  }, []);



  const titleRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef2 = useRef<(HTMLDivElement | null)[][]>([]);
  const titleRef3 = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef4 = useRef<any>(null);
  const colRef = useRef<(HTMLDivElement | null)[]>([]);

  const [modalShow, setModalShow] = React.useState(false);
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  const [books, updateBooks] = React.useState<typeof data[0]>(data[0]);

  function handleChange(vari: number) {
    props.onChange(vari)

  }

  const handleData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let filter = e.currentTarget.value;
    colRef.current!.map(item => {
      if (item !== null) return item.className = `p-0 mClass mClassShowDown`;
    });
    await delay(150);

    filter !== "All"
      ? setfilterDataState(filterData(filter))
      : setfilterDataState(getData());

    await delay(30);
    colRef.current!.map(item => {
      if (item !== null) return item.className = `p-0 mClass mClassShow`;
    });

  }

  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        ref={titleRef4}
      >
        <Modal.Header className="flex-wrap" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {books.title}
          </Modal.Title>
          <div className="button-container d-flex flex-grow-1" style={{ gap: "10px" }}>
            {
              books.url !== undefined && <Button style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" className="fw-bold" variant="outline-primary" onClick={(e) => {
                e.preventDefault();
                window.open(books.url);
              }}>
                <img className="position-relative imgButton" src={git} style={{ maxWidth: '26px', top: "-2px" }} />
                &nbsp;GitHub</Button>
            }
            {
              books.loc !== undefined && <Button style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" className="fw-bold" variant="outline-primary" onClick={(e) => {
                e.preventDefault();
                window.open(books.loc); navigate(`/contact`);
              }}>
                <img className="position-relative imgButton" src={house} style={{ maxWidth: '25px', top: "-2px", filter: "invert()" }} />
                &nbsp;Visit</Button>
            }
            {
              books.link !== undefined && window.innerWidth > 999 && <Button style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" className="fw-bold" variant="outline-primary" onClick={(e) => {
                e.preventDefault();
                navigate(`${books.link}`);
              }}>
                <img className="position-relative imgButton" src={house} style={{ maxWidth: '25px', top: "-2px", filter: "invert()" }} />
                &nbsp;Enter</Button>
            }
          </div>
        </Modal.Header>
        <Modal.Body>

          <Swiper
            grabCursor={true}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[Navigation, Pagination]}
            //modules={[Navigation, Pagination]}
            className="mySwiper3"
            navigation
            pagination={{ clickable: true }}
            autoHeight={true}
          >
            {books.img.map((book: string) => (
              <SwiperSlide className='h-auto d-flex' style={{ backgroundColor: '#212529' }}><img className='m-auto cImg' src={book} /></SwiperSlide>
            ))}

          </Swiper>

        </Modal.Body>
        <Modal.Footer className="text-center">
          <p className="mx-auto">
            {books.content}
          </p>
        </Modal.Footer>
      </Modal >
    );
  }

  const onEnter = (e: React.MouseEvent<HTMLElement>, id: number) => {
    // e.preventDefault();
    if (titleRef !== null) titleRef.current[id]!.style.height = `${titleRef.current[id]!.scrollHeight - 1}px`;
    if (titleRef3 !== null) titleRef3.current[id]!.className = 'pe-none text-center p-1 hid-box4';
    titleRef2.current[id]!.map(item => {
      return item!.style.opacity = `.9`;
    });
    // return setShowResults(id);
  }
  const onExit = (e: React.MouseEvent<HTMLElement>, id: number) => {
    // e.preventDefault();
    if (titleRef !== null) titleRef.current[id]!.style.height = '48px';
    if (titleRef3 !== null) titleRef3.current[id]!.className = 'pe-none text-center p-1 hid-box5';
    titleRef2.current[id]!.map(item => {
      return item!.style.opacity = `0`;
    });
    // return setShowResults(id);
  }
  const onClick = async () => {
    if (titleRef4 !== null) {
      titleRef4.current.backdrop.style.opacity = `0`;
      titleRef4.current.dialog.className = `fade kool modal`;
    }
    //titleRef4.current.style.display = `none`;
    await delay(250);
    setModalShow(false)
    await delay(15);
    colRef.current!.map(item => {
      if (item !== null) return item.className = `p-0 mClass mClassShow`;
    });
  }

  const onCleck = async (data: any) => {

    if (!isMobile) {
      if (titleRef !== null) titleRef.current[data.id]!.style.height = '48px';
      if (titleRef3 !== null) titleRef3.current[data.id]!.className = 'pe-none text-center p-1 hid-box5';
      titleRef2.current[data.id]!.map(item => {
        return item!.style.opacity = `0`;
      });

      await delay(140);
    }
    setModalShow(true);
    updateBooks(data);

  }


  return (
    <div>
      <video className="blurVid" autoPlay loop src={backvid} ref={videoRef} />

      <Container>

        <MyVerticallyCenteredModal className="kool" show={modalShow} onHide={onClick} />
        <Col className="m-auto butList" style={{ maxWidth: "1100px" }} data-aos="fade-down" data-aos-delay="0">
          {buttons2 &&
            buttons2.map((type, index) => (
              <>
                <button style={{ opacity: 0.7 }} className="btn btn-outline-light btn-sm aSpecial" key={index} value={type} onClick={handleData}>
                  {type}
                </button>
              </>
            ))}
        </Col>

        <Container className='mContainer py-6 ' style={{ maxWidth: '1000px' }} data-aos="fade-down" data-aos-delay="100">
          <Plock breakpoints={[{ size: 576, columns: 1 }, { size: 768, columns: 1 }, { size: 1200, columns: 2 }]} gap={'2em'} >
            {filterDataState &&
              filterDataState.map((type: any) => ( //{ cursor: 'pointer'}, 
                <Col ref={(element: HTMLDivElement) => { colRef.current[type.id] = element }} style={{ cursor: 'pointer' }} className='p-0 mClass ' onClick={() => onCleck(type)} onMouseEnter={(e) => onEnter(e, type.id)} onMouseLeave={(e) => onExit(e, type.id)}>
                  <Card className='m-auto  ' bg='dark' text='white' key={type.id} >

                    <Card.Img src={type.img[0]} />
                    <Card.ImgOverlay className='d-flex flex-column p-0 overflow-hidden' >

                      <div className='pe-none text-center p-1 hid-box5' ref={(element: HTMLDivElement) => { titleRef3.current[type.id] = element }}>
                        {type.tipo.map((type2: string, index: number) => (



                          <div className="btn btn-dark btn-sm hid-box3 btn-sm2" ref={(element: HTMLDivElement) => {
                            titleRef2.current[type.id] = titleRef2.current[type.id] || [];
                            titleRef2.current[type.id][index] = element;
                          }}>
                            {type2}
                          </div>
                        ))}
                      </div>

                      <div ref={(element: HTMLDivElement) => { titleRef.current[type.id] = element }} className='hid-box p-0' style={{ background: 'rgba(0,0,0,.5)' }}>

                        <Card.Header style={{ background: 'rgba(0,0,0,.3)' }} className='text-center '><h6>{type.title}</h6></Card.Header>
                        <Card.Body style={{ background: 'rgba(0,0,0,.2)' }} className='text-center flex-grow-0 '>{type.content}</Card.Body>
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
          </Plock>
        </Container>


      </Container>
    </div>

  );
}

