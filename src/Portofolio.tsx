import React, { useState, useEffect, useRef, useCallback, MutableRefObject } from "react";
import { buttons, data, data3, data4 } from "./Data";
import Modal from 'react-bootstrap/Modal'
import git from './img/git.svg'
import dribbble from './img/dribbble.svg'
import home from './img/home.svg'
// import backvid from './img/slowBookeh.mp4'
import bcgr from './img/accentAssetBlu.svg'
import mntn from './img/mountain.png'

import { Container, Col, Card, Button } from 'react-bootstrap';
import { Masonry } from 'react-plock';
import { useNavigate } from "react-router-dom";
import WordCloud from 'react-d3-cloud';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 720 && window.matchMedia("(pointer: coarse)").matches) {
      return (true)
    } else {
      return (false)
    }
  };
  const [isMobile, setIsMobile] = useState(handleResize);
  const [buttons2, setButtons2] = useState(buttons);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 10,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  useEffect(() => {
    // if (isMobile===true) setButtons2([
    //   'Design', 'Development',]);
    handleData1('All');
    handleChange(1);
  }, []);

  const titleRef = useRef<(HTMLDivElement | null)[]>([]);
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
      if (item !== null) return item.className = `p-0 mClass fake-container mClassShowDown`;
    });
    await delay(150);

    filter !== "All"
      ? setfilterDataState(filterData(filter))
      : setfilterDataState(getData());

    await delay(30);
    colRef.current!.map(item => {
      if (item !== null) return item.className = `p-0 mClass fake-container mClassShow`;
    });

  }

  const handleData1 = async (filter: any) => {
    colRef.current!.map(item => {
      if (item !== null) return item.className = `p-0 mClass fake-container mClassShowDown`;
    });
    await delay(150);

    filter !== "All"
      ? setfilterDataState(filterData(filter))
      : setfilterDataState(getData());

    await delay(30);
    colRef.current!.map(item => {
      if (item !== null) return item.className = `p-0 mClass fake-container mClassShow`;
    });

  }


  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
  ): KeenSliderPlugin {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add("active")
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }

      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }


  }
  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        ref={titleRef4}
      >
        <Modal.Header className="flex-wrap border-0 d-flex " closeButton></Modal.Header>
        <div className="swiper-container mx-auto pt-5">
          <div ref={sliderRef} className="keen-slider">
            {books.img.map((book: string, index: number) => (
              <div className={`keen-slider__slide number-slide${index + 1}`}><img className='m-auto cImg' src={book} /></div>
            ))}
          </div>
          <div className="h-0">

            <div ref={thumbnailRef} className="keen-slider thumbnail justify-content-center z-3">
              <div className="d-flex keen-thumb-panel p-2 px-1">
                {books.img.map((book: string, index: number) => (
                  <div className={`keen-slider__slide mx-1 keen-thumb-slide number-slide${index + 1}`}><img className='thumbnail-img' src={book} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Container className="p-5 pt-3">
          <div className="d-flex pt-2">
            <div className="fake-title mr-auto align-self-baseline"><h5>{books.title}</h5></div>
            <div className="button-container d-flex flex-grow-1" style={{ gap: "10px" }}>
              {
                books.git !== undefined && <Button className='fw-bold btn-blu' style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" variant="outline-primary" onClick={(e) => {
                  e.preventDefault();
                  window.open(books.git);
                }}>
                  <img className="position-relative imgButton" src={git} style={{ maxWidth: '26px', top: "-2px" }} />
                  &nbsp;GitHub</Button>
              }
              {
                books.case !== undefined && <Button className='fw-bold btn-blu' style={{ minWidth: '160px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" variant="outline-primary" onClick={(e) => {
                  e.preventDefault();
                  window.open(books.case);
                }}>
                  <img className="position-relative imgButton" src={dribbble} style={{ maxWidth: '26px', top: "-2px" }} />
                  &nbsp;Case Study</Button>
              }
                            {
                books.dri !== undefined && <Button className='fw-bold btn-blu' style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" variant="outline-primary" onClick={(e) => {
                  e.preventDefault();
                  window.open(books.dri);
                }}>
                  <img className="position-relative imgButton" src={dribbble} style={{ maxWidth: '26px', top: "-2px" }} />
                  &nbsp;Dribbble</Button>
              }
              {
                books.loc !== undefined && <Button className="fw-bold btn-blu" style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" variant="outline-primary" onClick={(e) => {
                  e.preventDefault();
                  window.open(books.loc);
                }}>
                  <img className="position-relative imgButton" src={home} style={{ maxWidth: '26px', top: "-2px" }} />
                  &nbsp;Visit</Button>
              }
              {
                books.link !== undefined && window.innerWidth > 999 && <Button className="fw-bold btn-blu" style={{ minWidth: '130px', borderRadius: '50px', borderWidth: '2px', color: 'white' }} size="sm" variant="outline-primary" onClick={(e) => {
                  e.preventDefault();
                  navigate(`${books.link}`);
                }}>
                  <img className="position-relative imgButton" src={home} style={{ maxWidth: '26px', top: "-2px" }} />
                  &nbsp;Enter</Button>
              }
            </div>
          </div>
          <div className="fake-content pt-2">{books.content}</div>
        </Container>
      </Modal >
    );
  }

  const onClick = async () => {
    if (titleRef4 !== null) {
      titleRef4.current.backdrop.style.opacity = `0`;
      titleRef4.current.dialog.className = `fade kool modal`;
    }
    await delay(250);
    setModalShow(false)
    await delay(15);
    colRef.current!.map(item => {
    });
  }

  const onCleck = async (data: any) => {

    if (!isMobile) {
      await delay(140);
    }
    setModalShow(true);
    updateBooks(data);

  }
 
  var sizeCache = '0px';
  var wordCache: any = 0;
  var activeCache: any = 0;

  const onWordMouseOver = useCallback((word: any) => {
    sizeCache = word.target.style.fontSize;
    if (word.target.classList[0] !== 'active') word.target.style.fontSize = `${Number(sizeCache.replace(/\D/g, '')) + 1}px`;
    // console.log(word.target.classList);


  }, []);

  const onWordMouseOut = useCallback((word: any) => {
    if (word.target.classList[0] !== 'active') word.target.style.fontSize = sizeCache;
  }, []);

  const onWordClick = useCallback((word: any) => {
    handleData1(word.target.textContent);
    word.target.classList.add('active');
    try {
      wordCache.target.classList.remove('active');
      wordCache.target.style.fontSize = activeCache;
    }
    catch {
    }
    activeCache = sizeCache;
    wordCache = word;
  }, []);

  return (
    <div className=' position-relative '>
      <div className=" ">
        <div style={{ position: "relative", top: '30em' }}><img className="blurVid" src={bcgr} /></div>
        <div style={{ position: "relative", top: '-30em' }}><img className="blurVid2" src={bcgr} /></div>
        <div style={{ position: "relative", top: '-30em' }}><img className="blurVid3" src={mntn} /></div>
      </div>
      {isMobile === false &&
        <div className="d-flex justify-content-center flex-wrap " style={{ marginTop: '-2em' }}>

          <div className="word-cloud z-3 position-relative ">
            <WordCloud data={data4}
              onWordMouseOver={onWordMouseOver}
              onWordMouseOut={onWordMouseOut}
              onWordClick={onWordClick}
              width={160}
              height={100}
              font={''}
              fill={'#c8f9fed9'}

            />
          </div>

          <div className="word-cloud z-3 position-relative ">
            <WordCloud data={data3}
              onWordMouseOver={onWordMouseOver}
              onWordMouseOut={onWordMouseOut}
              onWordClick={onWordClick}
              width={160}
              height={100}
              font={''}
              fill={'#c8f9fed9'}

            />
          </div>


        </div>}
      <Container>

        <MyVerticallyCenteredModal className="kool" show={modalShow} onHide={onClick} />
        <Col className="m-auto butList" style={{ maxWidth: "1100px" }} data-aos="fade-down" data-aos-delay="0">
          {isMobile &&
            buttons2.map((type, index) => (
              <>
                <button style={{ opacity: 0.7 }} className="btn btn-outline-light btn-sm aSpecial" key={index} value={type} onClick={handleData}>
                  {type}
                </button>
              </>
            ))}
        </Col>

        <Container className='mContainer py-1 pb-5 mb-5 ' style={{ maxWidth: '1120px' }} data-aos="fade-down" data-aos-delay="100">
          <Masonry items={filterDataState!} config={{
            columns: [1, 1, 2],
            gap: [30, 30, 30],
            media: [576, 768, 1200],
          }}
            render={type => ( //{ cursor: 'pointer'}, 
              <Col ref={(element: HTMLDivElement) => { colRef.current[type.id] = element }} className='p-0 mClass fake-container' onClick={() => onCleck(type)}>
                <div className='m-auto fake-card' key={type.id} >
                  <img src={type.img[0]} />
                  <div className='d-flex flex-column p-0 overflow-hidden' >
                    <div ref={(element: HTMLDivElement) => { titleRef.current[type.id] = element }} className='p-0'>
                    </div>
                  </div>
                  <div className="fake-card-content w-100">
                    <div className="d-flex w-100 pt-3">
                      <div className="pb-1 flex-shrink-0 tags pt-2" >{`${type.tipo[0]}`}</div>
                      <div className="pb-1 flex-shrink-0 tags pt-2" style={{ marginLeft: 'auto' }}>{`#${type.tipo[1]}`}</div>
                    </div>
                    <div className='fake-title mr-auto pt-2 align-self-baseline'><h5>{type.title}</h5></div>

                    <div className='fake-content pt-2 w-100'>
                      {type.content}
                    </div>
                    <div className="proj-tags tags p-1 pt-4 flex-shrink-0 align-self-end">Read More</div>
                  </div>
                </div>
              </Col>
            )}
          />
        </Container>


      </Container>
    </div>

  );
}

