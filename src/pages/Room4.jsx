import React, { useState } from 'react';
import '../Room4.css';

const pureCards = [
  { id: 1, color: 'Rosso', form: 'Goccia', number: 3, phrase: 'Solo la Goccia può dire la verità.' },
  { id: 2, color: 'Oro', form: 'Goccia', number: 3, phrase: 'La mia forma è quella dell’eletta.' },
  { id: 3, color: 'Nero', form: 'Polvere', number: 1, phrase: 'L’essenza rossa mente.' },
  { id: 4, color: 'Rosso', form: 'Fiamma', number: 5, phrase: 'Una sola essenza di forma Goccia è pura.' }
];

const correctId = 3;

const Room4 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [result, setResult] = useState(null);

  const handleSelect = (id) => {
    setSelectedCard(id);
    setResult(null);
  };

  const handleReveal = () => {
    if (selectedCard === null) return;
    const isCorrect = selectedCard === correctId;
    setResult(isCorrect ? 'Hai trovato la vera essenza. Lady Báthory ti osserva compiaciuta.' : 'Questa è una maschera. Riprova se osi.');
    setRevealed(true);
  };

  return (
    <div className="room-container">
      <h1>🔻 La Camera di Báthory</h1>
      <section className="narration">
        <h2>Enigma Finale – Lo Specchio dell’Anima</h2>
        <p>
          Davanti a te quattro essenze. Solo una è la vera anima non distorta dallo specchio d’argento.
          Le altre mentono, anche se sembrano pure.
        </p>
        <p>Scegli quella che dice la verità assoluta.</p>
      </section>

      <div className="card-grid">
        {pureCards.map(card => (
          <div
            key={card.id}
            className={`card ${selectedCard === card.id ? 'selected' : ''}`}
            onClick={() => handleSelect(card.id)}
          >
            <p><strong>{card.color}</strong></p>
            <p>{card.form}</p>
            <p>{card.number}</p>
            <p className="phrase">“{card.phrase}”</p>
          </div>
        ))}
      </div>

      <button onClick={handleReveal}>Specchia l’Essenza</button>

      {revealed && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Room4;
