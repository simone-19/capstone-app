import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";

const MyNavBar = () => {
  const navigate = useNavigate;
  return (
    <Navbar expand="lg" className="mb-3 color-word" id="nav">
      <Container fluid>
        <Navbar.Brand href="#" className="color-word">
          <div className="speech-bubble speech-bubble-top p-1">COMIC BOOKS</div>
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav id="secondNav" className="color-word">
            <div className="speech-bubble speech-bubble-top mt-2 me-1 mb-4">
              <Nav.Link
                href="#"
                className="color-word"
                onClick={() => navigate("/")}
              >
                HOME
              </Nav.Link>
            </div>
            <div className="speech-bubble speech-bubble-top mt-2 me-1 mb-4">
              <Nav.Link className="color-word">
                {/* comment area */}
                AREA COMMENTI
              </Nav.Link>
            </div>
            <div className="speech-bubble speech-bubble-top mt-2 me-1 mb-4">
              <Nav.Link
                href="#"
                className="color-word"
                onClick={() => navigate("/ricerca")}
              >
                RICERCA
                {/* in listbook prendere il form e inserirlo qui */}
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
