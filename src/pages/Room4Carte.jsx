import React, { useState } from "react";
import "../Room4.css";

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

  return (
    <div className="room4-carte-container">
      <h2 className="room4-title">🔻 Seleziona 3 figure per Lady Báthory</h2>
      <div className="carte-grid">
        {carte.map((card, index) => (
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
        </div>
      )}
    </div>
  );
};

export default Room4Carte;
