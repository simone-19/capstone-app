import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import dragonball from "../Data/wp4349883.webp";

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
        navigate("/ricerca");
      })
      .catch((err) => console.log("ERRORE!", err));
  };

  return (
    <>
      <div className="d-flex">
        <form id="login-form" className="bg-section">
          <h2 className="text-center">Login</h2>
          <InputGroup className="d-flex flex-column">
            <Form.Label className="text-center ">Email</Form.Label>
          </InputGroup>
          <Form.Control
            className="m-auto"
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
            className="w-100 m-auto"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
          <div className="text-center mt-3">
            <Button
              className="save-button rounded-3 px-3 btnEdit cardUserGame btnLR"
              onClick={loginUtente}
            >
              Login
            </Button>
          </div>
        </form>
        <div className="d-flex">
          <img id="img-login" src={dragonball} alt="dragon-ball" />
        </div>
      </div>
    </>
  );
};
export default Login;
