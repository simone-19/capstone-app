import { Row } from "react-bootstrap";
import MyFooter from "./MyFooter";
import MyNavBar from "./MyNavBar";
import ViewsCart from "./ViewsCart";
import { useEffect, useState } from "react";

const Cart = () => {
  const token = localStorage.getItem("authToken");
  const id = localStorage.getItem("authId");
  const [user, setUser] = useState();

  fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: ` Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella fetch");
      }
    })
    .then((data) => {
      setUser(data);
      console.log(data);
    })
    .catch((err) => console.log("ERRORE!", err));

  return (
    <>
      <MyNavBar></MyNavBar>
      <Row className="g-5 mt-3">
        {user?.cart.books.map((b) => (
          <ViewsCart book={b} key={b.id} />
        ))}
      </Row>
      <MyFooter></MyFooter>
    </>
  );
};
export default Cart;
