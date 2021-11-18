import { Button, Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaCartPlus, FaFlag } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar'


function Header() {
    return (
        <header id="header">

        <Navbar expand="lg" >
            <Container fluid>
                <Navbar.Brand className="col-lg-2 col-md-2" href="#">Profit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="col-lg-12 col-md-12"  navbarScroll>
                    <form class='d-flex col-md-4'>
                            <input class="form-control me-2 border-0 border-bottom" type="search" placeholder="Search" aria-label="O que está procurando?"/>
                            <i><FaSearch/></i>
                    </form>
                    <ul class="navbar-nav col-md-6 d-flex justify-content-end" >
                            <li class="nav-item">
                                <a class="nav-link" href="#">Minha Conta</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><FaCartPlus/></a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#"><FaFlag/></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><FaFlag/></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><FaFlag/></a>
                            </li>
                        </ul>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header> 
    );
}

export default Header;