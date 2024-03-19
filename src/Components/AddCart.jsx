import { useEffect, useState } from "react";
import { CartPlus } from "react-bootstrap-icons";

const AddCart = ({ book }) => {
  const token = localStorage.getItem("authToken");
  const id = localStorage.getItem("authId");
  const [user, setUser] = useState();

  const getUtente = () => {
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
  };
  const add = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND}/cart/${user.cart.id}/addBook?bookId=${book.id}`,
      {
        method: "POST",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })

      .catch((err) => console.log("ERRORE!", err));
  };
  useEffect(() => {
    getUtente();
  }, [id]);
  return <CartPlus onClick={() => add()}></CartPlus>;
};
export default AddCart;
