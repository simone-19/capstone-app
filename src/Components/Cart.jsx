import { Row } from "react-bootstrap";
import MyFooter from "./MyFooter";
import MyNavBar from "./MyNavBar";
import ViewsCart from "./ViewsCart";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
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
  useEffect(() => {
    getUtente();
  }, [token]);
  // pagamento
  const handleClick = async (event) => {
    event.preventDefault();

    const stripe = await stripePromise;
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/create-checkout-session?userId=${user.id}&totale=${user.cart.totale}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Errore nella creazione della sessione di checkout");
      return;
    }

    const data = await response.json(); // Assumi che questa sia una risposta JSON valida
    const sessionUrl = data.url; // Accedi all'URL della sessione da oggetto JSON

    // Verifica l'URL prima del reindirizzamento
    if (sessionUrl.startsWith("https://checkout.stripe.com")) {
      window.location.href = sessionUrl; // Reindirizza l'utente all'URL di checkout
    } else {
      console.error("URL di checkout non valido.");
    }
  };

  return (
    <>
      <MyNavBar></MyNavBar>
      <Row className="mt-3">
        {user?.cart.books.map((b, index) => (
          <ViewsCart book={b} key={index} fUtente={getUtente} />
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <button id="buttonAcquista" onClick={handleClick}>
          Acquista Ora {user?.cart.totale}€
        </button>
      </div>
      <MyFooter></MyFooter>
    </>
  );
};
export default Cart;
