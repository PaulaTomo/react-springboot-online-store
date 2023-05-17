import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import Logo from "../Images/Logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faHeart} from "@fortawesome/free-solid-svg-icons";


const Navigation = () => {

    return (
        <>
            <Navbar className="nav-link  text-uppercase  " collapseOnSelect expand="md" variant="dark">
                <Container className="container">
                    <Navbar.Brand href="/">
                        <img src={Logo} width="50" height="50" alt="Logo" className=" rounded-5"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle " aria-controls="responsive-navbar-nav "/>
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="nav-link ms-auto px-4 ">
                            <Link className="nav-link  " to="/">Home</Link>
                            <Link className="nav-link " to="/newCollection">New Collection</Link>
                            <Link className="nav-link " to="/summerCollection">Summer</Link>
                            <Link className="nav-link " to="/discount">Discount%</Link>
                            <Link className="nav-link"> <FontAwesomeIcon icon={faHeart} size="lg"
                                                                         style={{color: "#cc5c5c",}}/>
                            </Link>
                            <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faBagShopping} beat size="lg"
                                                                                   style={{color: "#cc5c5c",}}/>
                            </Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet/>
        </>
    )
}
export default Navigation;
