import { useState, useEffect, MouseEvent } from "react";

import oceanicBase from './img/store/OceanicBase.png'
import bottle from './img/store/bottle.png'
import jar from './img/store/plasticJar.png'
import tube from './img/store/tube.png'
import professional from './img/store/professional.png'
import productDesign from './img/store/productDesign.svg'
import Items0 from './img/store/0Items.svg'
import Items1 from './img/store/1Items.svg'
import Items2 from './img/store/2Items.svg'
import Items3 from './img/store/3Items.svg'
import background from "./img/p0010.jpg";
import logo from './img/AgencyLogo.png'

import { Container, Row, Form } from 'react-bootstrap';
import { useSpring, animated, to } from '@react-spring/web'
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Adooboo.scss';

const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x: number, y: number) => `translate3d(${x / 60}px,${y / 60}px,0)`
const trans2 = (x: number, y: number) => `translate3d(${x / -120}px,${y / -120}px,0)`

export default function Portofolio(props: any) {

  useEffect(() => {
    document.documentElement.scrollTo(0, 70);

  }, []);
  const [item1, setItem1] = useState<boolean>(false);
  const [item2, setItem2] = useState<boolean>(false);
  const [item3, setItem3] = useState<boolean>(false);
  const [itemsAmount, setItemsAmount] = useState<number>(0);

  const [props2, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  function handleChange(e: any) {
    // e.target.checked
    // if (e.target.checked) {
    //   // setItem1(!item1)
    // }
    e.target.checked ? setItemsAmount(itemsAmount + 1) : setItemsAmount(itemsAmount - 1)

    if (e.target.id === "checkbox1") setItem1(!item1)
    else if (e.target.id === "checkbox2") setItem2(!item2)
    else if (e.target.id === "checkbox3") setItem3(!item3)
    // else if (itemNumber === 2) {
    //   setItem2(!item2)
    //   item2 ? setItemsAmount(itemsAmount + 1) : setItemsAmount(itemsAmount - 1)
    // }
    // else if (itemNumber === 3) {
    //   setItem3(!item3)
    //   item3 ? setItemsAmount(itemsAmount + 1) : setItemsAmount(itemsAmount - 1)
    // }
  }
  return (
    <div style={{ backgroundImage: `url(${background})`, position: 'relative', zIndex: 1, backgroundSize: '2150px' }}>
      <Container>
        <div style={{ borderBottom: '5px solid #353535D0' }}>
          <Link className="nav-link py-0" to="/portofolio" onClick={() => {
            document.documentElement.scrollTo(0, 0);
          }}>
            <img src={logo} className={`nav-logo`} style={{ display: 'block', maxWidth: '115px', minWidth: '32px', maxHeight: '105px' }} />
          </Link>
        </div>
        <div style={{ height: '80vh' }}>
          <h1 className='position-relative' style={{ height: '0', color: '#353535D0', fontFamily: '"IBM Plex Mono", monospace' }}>Experience</h1>
          <Row className="d-flex h-100"
            onMouseMove={({ clientX: x, clientY: y }: MouseEvent) => set({ xy: calc(x, y) })}
          >
            <div className="m-auto w-auto adooView">
              <animated.div className="card1 position-relative" style={{ transform: to(props2.xy, trans1), zIndex: '-1' }}>
                <img className="position-absolute" src={professional} style={{ maxWidth: '97.7vh', opacity: '1', zIndex: '-1' }} />
                <img className="position-absolute" src={productDesign} style={{ maxWidth: '97.7vh', opacity: '1', zIndex: '-1' }} />
                <img className="position-absolute fade-1" src={Items0} style={{ maxWidth: '120vh', opacity: Number(itemsAmount === 0), zIndex: '-1' }} />
                <img className="position-absolute fade-1" src={Items1} style={{ maxWidth: '97.7vh', opacity: Number(itemsAmount === 1), zIndex: '-1' }} />
                <img className="position-absolute fade-1" src={Items2} style={{ maxWidth: '97.7vh', opacity: Number(itemsAmount === 2), zIndex: '-1' }} />
                <img className="position-absolute fade-1" src={Items3} style={{ maxWidth: '97.7vh', opacity: Number(itemsAmount === 3), zIndex: '-1' }} />
              </animated.div>
              <animated.div className="card1 position-relative" style={{ transform: to(props2.xy, trans2) }}>
                <Form className="d-flex" style={{ height: '0' }}>
                  <div key={`default-checkbox`} className="ms-auto " style={{ zIndex: 1, marginRight: '100px', color: '#414d5b', fontWeight: '400' }}>
                    <Form.Check type={'checkbox'} id={`checkbox1`} label={`Plastic Bottle`} onChange={(e) => handleChange(e)} />
                    <Form.Check type={'checkbox'} id={`checkbox2`} label={`Jar`} onChange={(e) => handleChange(e)} />
                    <Form.Check type={'checkbox'} id={`checkbox3`} label={`Tube`} onChange={(e) => handleChange(e)} />
                  </div>
                </Form>
                <div>
                  <img className="position-absolute fade-1" src={bottle} style={{ maxWidth: '97.7vh', opacity: Number(item1), }} />
                  <img className="position-absolute fade-1" src={jar} style={{ maxWidth: '97.7vh', opacity: Number(item2) }} />
                  <img className="position-absolute fade-1" src={tube} style={{ maxWidth: '97.7vh', opacity: Number(item3) }} />
                  <img className="" src={oceanicBase} style={{ maxWidth: '120vh' }} />
                </div>
              </animated.div>
            </div>

          </Row>
        </div >
      </Container>
    </div>);
}

