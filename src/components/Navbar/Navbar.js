import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function NavBar() {
    return (
        <Navbar className='color-navbar' expand="lg">
            <Container className='container'>
                <Link to="/"><img src="/images/logo-Enlace-Util.jpg" alt="logo-enlace-util" className='logo' /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to='/' className='item-navbar'><span >Inicio</span></NavLink>
                        <NavLink to='/categoria/adhesivos' className='item-navbar'><span >Adhesivos</span></NavLink>
                        <NavLink to='/categoria/lapices' className='item-navbar'><span >Lapices</span></NavLink>
                        <NavLink to='/categoria/marcadores' className='item-navbar'><span >Marcadores</span></NavLink>
                        <div >
                            <div>
                                <CartWidget />
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;