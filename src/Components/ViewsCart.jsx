import { Col } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import DeleteCart from "./DeleteCart";

const ViewsCart = ({ book, fUtente }) => {
  return (
    <>
      <div id="cardCart" className="card mb-3">
        <div className="row g-0 d-flex">
          <div className="col-12 d-flex">
            <img
              src={book.immagine}
              className="img-fluid rounded-start d-flex"
              alt="copertina-libro"
              style={{ width: "150px", margin: "10px", border: "1px solid" }}
            />
            <div className="d-flex flex-column align-items-center justify-content-around ms-5">
              <h3 className="card-title">{book.titolo}</h3>
              <p className="card-text">
                Il fumetto è il genere più semplice ed immediato in quanto
                l’unione di parole e immagini ci dà subito la possibilità di
                immedesimarci in ciò che stiamo leggendo attraverso la
                creatività sia di chi ha scritto che di chi ha disegnato. Queste
                sono certamente le caratteristiche che lo fanno apprezzare ai
                più giovani e che fanno sì che gli adulti lo propongano ai
                piccoli lettori tra le prime esperienze con la carta stampata.
              </p>
              <p className="card-text">
                <b> {book.prezzo}€ -Spedizione gratuita-</b>
              </p>
            </div>
          </div>
        </div>
        {/* tasto remove */}
        <div className="d-flex justify-content-end align-items-center">
          <span className="d-flex me-1">Rimuovi articolo</span>
          <DeleteCart book={book} fUtente={fUtente} />
        </div>
      </div>
    </>
  );
};
export default ViewsCart;
