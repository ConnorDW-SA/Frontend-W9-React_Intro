import { Navbar, Nav } from "react-bootstrap";

const MyNavBar = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="w-75 mx-auto d-flex justify-content-between">
        <Nav.Link href="#">{props.home}</Nav.Link>
        <Nav.Link href="#">{props.about}</Nav.Link>
        <Nav.Link href="#">{props.browse}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
