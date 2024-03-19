import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import ListBook from "./Components/ListBook";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Library from "./Components/Library";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/ricerca" element={<ListBook />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
