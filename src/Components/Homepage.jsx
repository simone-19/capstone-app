import { useState } from "react";
import Login from "./Login";
import MyFooter from "./MyFooter";
import MyNavBar from "./MyNavBar";
import Register1 from "./Register1";

const Homepage = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <MyNavBar></MyNavBar>
      <div className="vh-100">
        {login ? <Login></Login> : <Register1></Register1>}
        <div>
          {" "}
          <p className="inizialPar" onClick={() => setLogin(!login)}>
            {login
              ? "Non sei registrato? Registrati"
              : " Sei già registrato? Fai il login"}
          </p>
        </div>
      </div>
      <MyFooter></MyFooter>
    </>
  );
};
export default Homepage;
