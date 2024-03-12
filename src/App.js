import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
// import MyFooter from "./Components/MyFooter";
import { Container } from "react-bootstrap";
// import MyNavBar from "./Components/MyNavBar";
import ListBook from "./Components/ListBook";
import fantasy from "./Data/fantasy.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CommentArea from "./Components/CommentArea";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/ricerca" element={<ListBook />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
