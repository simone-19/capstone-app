import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import dragonball from "../Data/goku.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUtente = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setPassword("");
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authId", data.id);
        navigate("/ricerca");
      })
      .catch((err) => console.log("ERRORE!", err));
  };

  return (
    <>
      <div className="d-flex justify-content-around row vh-100">
        <form id="login-form" className="bg-section col-md-6 col-xs-12">
          <h2 className="text-center">Login</h2>
          <InputGroup className="d-flex flex-column">
            <Form.Label className="text-center ">Email</Form.Label>
          </InputGroup>
          <Form.Control
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center  mt-3">Password</Form.Label>
          </InputGroup>
          <Form.Control
            className="w-100"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
          <div className="text-center mt-3">
            <Button
              className="save-button rounded-3 px-3 btnEdit cardUserGame btnLR mb-2"
              onClick={loginUtente}
            >
              Login
            </Button>
          </div>
        </form>
        <div className="d-flex col-md-6 col-xs-12 justify-content-center">
          <img
            id="img-login"
            className="flicker-out-1"
            src={dragonball}
            alt="dragon-ball"
          />
        </div>
      </div>
    </>
  );
};
export default Login;
