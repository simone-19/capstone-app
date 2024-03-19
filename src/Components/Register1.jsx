import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import dragonball from "../Data/goku.jpg";
const Register1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  //   const [role, setRole] = useState("USER");

  const registraUtente = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        name: nome,
        surname: cognome,
        // role: role,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setUsername("");
          setEmail("");
          setPassword("");
          setNome("");
          setCognome("");
          //   setRole("");
          window.alert("Registrazione Effettuata con successo!");
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  };

  return (
    <span className="vh-100">
      <h2 className="text-center m-2">Registrati</h2>
      <form id="register-form" className="bg-section d-flex ">
        <div className="row justify-content-center align-items-center">
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center mt-2">Email</Form.Label>
          </InputGroup>
          <Form.Control
            className="w-100 m-auto"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center mt-2">Password</Form.Label>
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

          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center mt-2">Nome</Form.Label>
          </InputGroup>
          <Form.Control
            className="w-100 m-auto"
            required
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center mt-2">Cognome</Form.Label>
          </InputGroup>
          <Form.Control
            className="w-100 m-auto"
            required
            value={cognome}
            onChange={(e) => {
              setCognome(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center mt-2">Username</Form.Label>
          </InputGroup>
          <Form.Control
            className="w-100 m-auto"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
          <div className="text-center mt-3 mb-3">
            <Button
              className="save-button rounded-3 px-3 btnEdit cardUserGame btnLR"
              onClick={registraUtente}
            >
              Registrati
            </Button>
          </div>
        </div>
      </form>
    </span>
  );
};
export default Register1;
