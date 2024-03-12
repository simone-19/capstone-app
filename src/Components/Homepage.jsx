import { useState } from "react";
import Login from "./Login";
import MyFooter from "./MyFooter";
import MyNavBar from "./MyNavBar";
// import Register from "./register";
import Register1 from "./Register1";

const Homepage = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <MyNavBar></MyNavBar>
      {login ? <Login></Login> : <Register1></Register1>}
      <div>
        {" "}
        <p onClick={() => setLogin(!login)}>
          {login
            ? "Non sei registrato? Registrati"
            : " Sei già registrato? Fai il login"}
        </p>
      </div>
      <MyFooter></MyFooter>
    </>
  );
};
export default Homepage;
