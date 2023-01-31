import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './components/CartWidget/CartWidget';
import './Navbar.css';

function Menu() {
    return (
        <Navbar className='color-navbar' expand="lg">
            <Container className='container'>
                <Navbar.Brand href="#home"><img src="/images/logo-Enlace-Util.jpg" alt="logo-enlace-util" className='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"><span className='item-navbar'>Adhesivos</span></Nav.Link>
                        <Nav.Link href="#link"><span className='item-navbar'>Lapices</span></Nav.Link>
                        <NavDropdown className='item-navbar' title="Marcadores" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Marcadores al Agua</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Marcadores Permanentes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Marcadores Especiales</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Resaltadores
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div >
                            <div>                                
                                <CartWidget/>                               
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;