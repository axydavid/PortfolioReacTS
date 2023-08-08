import Home from "./Home";
import { data } from "./Data";

import { useState, useRef, useEffect } from "react";
import Portofolio from './Portofolio';
import Contact from "./Contact";
import Adooboo from "./Adooboo";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from './img/newLogo.svg'
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import ScrollToTop from "react-scroll-to-top";
import 'aos/dist/aos.css'
import AOS from 'aos'
import { motion, useScroll, useSpring } from "framer-motion"

AOS.init({
    duration: 400,
    easing: 'ease'
    //once:'false'
});

export default function Main() {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    const [colorL, setColorL] = useState<any>('');
    const [page, setPage] = useState<number>();

    const hashRev = useRef<(HTMLDivElement | null)>(null);
    document.body.style.transition = 'background .15s ease-out';
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        hashRev.current!.className = 'cClass cClassShow';


        //preload img
        data.forEach((item: any) => {
            item.img.forEach((imge: any) => {
                const img = new Image();
                img.src = imge;
            });
        });
    }, []);

    const hideNav = (e?: any) => {
        if (e.button === 2) return;
        let butText = Number(e!.target.childNodes[0].innerText);
        if (window.innerWidth > 720 && (butText !== page)) hashRev.current!.className = 'cClass';
    }

    const switchNav = async (color: boolean = false, e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        //e!.preventDefault();
        if (window.innerWidth < 720) hashRev.current!.className = 'cClass';

        if (window.innerWidth > 720) await delay(100);
        else await delay(0)
        hashRev.current!.className = 'cClass cClassShow';
        let active: any = document.getElementsByClassName('nactive')[0];
        if (color) {
            setColorL('#f5e7ff80');
            document.body.style.backgroundColor = "#0f172a";
            document.body.style.color = "white";
            console.log(active.style);
        }
        else {
            setColorL('#381e4b80');
            document.body.style.backgroundColor = "unset";
            document.body.style.color = "unset";
        }

    }

    async function handleChange(vari: number) {
        setPage(vari)
        switchNav(vari === 1 ? true : false);
        await delay(1000);
        AOS.refresh();
    }

    return (

        <HashRouter>
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
            <div className="nClass" >
                <ScrollToTop smooth />
                <Navbar className="" style={{ marginBottom: '6vh', marginTop: '3vh', height: '11vh', zIndex: 1 }}>
                    <Container>
                        <Navbar.Brand>
                            <Link style={{ color: colorL }} onMouseDown={(e) => hideNav(e)} className={`nav-link py-0 ${page === 0 && 'pe-none'}`} to="/">
                                <Logo className='nav-logo' style={{ display: 'block', maxWidth: '115px', minWidth: '32px', height: '105px' }} />
                            </Link>
                        </Navbar.Brand>
                        <Nav className="justify-content-end nav-bubble px-2">
                            <NavItem ><Link style={{ color: colorL }} onMouseDown={(e) => hideNav(e)} className={`nav-link ${page === 0 && 'nactive'}`} to="/" ><div className='d-none'>0</div>Home</Link></NavItem>
                            <NavItem ><Link style={{ color: colorL }} onMouseDown={(e) => hideNav(e)} className={`nav-link ${page === 1 && 'nactive'}`} to="/portofolio"><div className='d-none'>1</div>Portofolio</Link></NavItem>
                            <NavItem ><Link style={{ color: colorL }} onMouseDown={(e) => hideNav(e)} className={`nav-link ${page === 2 && 'nactive'}`} to="/contact"><div className='d-none'>2</div>Contact</Link></NavItem>
                            {/* <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link" to="/app">Labs</Link></NavItem> */}
                        </Nav>
                    </Container>
                </Navbar>
                <div className="cClass content" ref={hashRev}>
                    <Routes>
                        <Route path='/' element={<Home onChange={handleChange} />}></Route>
                        <Route path="/portofolio" element={<Portofolio onChange={handleChange} />}></Route>
                        <Route path="/contact" element={<Contact onChange={handleChange} />}></Route>
                        <Route path="/adooboo" element={<Adooboo onChange={handleChange} />}></Route>
                    </Routes>
                </div>
            </div >
        </HashRouter >
    );
}