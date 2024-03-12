import { Container } from "react-bootstrap";

const MyFooter = () => (
  <>
    <Container id="Footer" className="d-flex justify-content-center">
      <div className="speech-bubble speech-bubble-top mt-2 mb-2 p-2">
        <strong>CAPSTONE</strong> - Copyright {new Date().getFullYear()}
      </div>
    </Container>
  </>
);

export default MyFooter;
