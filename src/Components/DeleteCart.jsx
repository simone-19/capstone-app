import { useEffect, useState } from "react";
import { Trash } from "react-bootstrap-icons";

const DeleteCart = ({ book, fUtente }) => {
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
      })
      .catch((err) => console.log("ERRORE!", err));
  };
  const remove = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND}/cart/${user.cart.id}/removeBook?bookId=${book.id}`,
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

      .then(() => {
        fUtente();
        alert("elemento cancellato");
      })

      .catch((err) => console.log("ERRORE!", err));
  };
  useEffect(() => {
    getUtente();
  }, [id]);
  return (
    <>
      {user && (
        <Trash
          id="removeInCart"
          className="d-flex"
          onClick={() => remove()}
        ></Trash>
      )}
    </>
  );
};
export default DeleteCart;
