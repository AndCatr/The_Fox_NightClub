import React, { useState } from "react";
import "../Room4.css";
import emailjs from '@emailjs/browser';

const carte = [
  "08FD.jpg",
  "102_o.jpeg",
  "201_a.jpeg",
  "2731.JPG",
  "card5.jpg",
  "card6.jpg"
];

const Room4Carte = () => {
  const [selected, setSelected] = useState([]);
  const [finalCard, setFinalCard] = useState(null);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSelect = (card) => {
    if (finalCard) return;
    if (selected.includes(card)) {
      setSelected(selected.filter(c => c !== card));
    } else if (selected.length < 3) {
      setSelected([...selected, card]);
    }
  };

  const handleDraw = () => {
    if (selected.length === 3) {
      const randomCard = selected[Math.floor(Math.random() * 3)];
      setFinalCard(randomCard);
    }
  };

  const sendEmail = async () => {
    setSending(true);
    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        {
          to_email: email,
          card_url: `${window.location.origin}/assets/carte/${finalCard}`
        },
        'your_public_key'
      );
      setEmailSent(true);
    } catch (error) {
      console.error("Errore invio email:", error);
    }
    setSending(false);
  };

  return (
    <div className="room4-carte-container">
      <h2 className="room4-title">🔻 Seleziona 3 figure per Lady Báthory</h2>
      <div className="carte-grid">
        {(finalCard ? [finalCard] : carte).map((card, index) => (
          <img
            key={index}
            src={`/assets/carte/${card}`}
            alt={`Carta ${index + 1}`}
            className={`carta ${selected.includes(card) ? "selected" : ""}`}
            onClick={() => handleSelect(card)}
          />
        ))}
      </div>
      {selected.length === 3 && !finalCard && (
        <button className="draw-button" onClick={handleDraw}>
          Sorteggia una tra le 3 carte
        </button>
      )}
      {finalCard && (
        <div className="final-card-display">
          <h3>La carta prescelta da Lady Báthory è...</h3>
          <img
            src={`/assets/carte/${finalCard}`}
            alt="Carta selezionata"
            className="final-card"
          />
          {!emailSent ? (
            <div className="email-form">
              <input
                type="email"
                placeholder="Inserisci email di Eric"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={sendEmail} disabled={!email || sending}>
                {sending ? "Invio..." : "Invia via email"}
              </button>
            </div>
          ) : (
            <p className="success-message">📩 Email inviata con successo a {email}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Room4Carte;
