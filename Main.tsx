import Home from "./Home";
import App from './App';
import './App.css';
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav,NavItem } from 'react-bootstrap';

function Main() {
    return (
        <BrowserRouter>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand ><Link className="nav-link" to="/" style={{ color: 'white' }}><b style={{ color: 'blue', fontSize:'30px', display: 'contents' }}>.</b>this</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <NavItem><Link className="nav-link" to="/">Home</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/app">To Do</Link></NavItem>
                            <NavItem><Link className="nav-link" to="/contact">Contact</Link></NavItem>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path="/app" element={<App />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default Main;
