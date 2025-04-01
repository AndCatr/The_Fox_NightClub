import React, { useState } from 'react';
import '../Room4.css';

const initialCards = [
  { id: 1, color: 'Rosso', form: 'Goccia', number: 3 },
  { id: 2, color: 'Nero', form: 'Pietra', number: 5 },
  { id: 3, color: 'Bianco', form: 'Nebbia', number: 2 },
  { id: 4, color: 'Oro', form: 'Polvere', number: 1 },
  { id: 5, color: 'Viola', form: 'Fiamma', number: 4 },
  { id: 6, color: 'Rosso', form: 'Fiamma', number: 5 },
  { id: 7, color: 'Oro', form: 'Goccia', number: 3 },
  { id: 8, color: 'Nero', form: 'Polvere', number: 1 },
  { id: 9, color: 'Viola', form: 'Nebbia', number: 5 },
  { id: 10, color: 'Rosso', form: 'Nebbia', number: 2 }
];

const isPure = (card) => {
  const validColors = ['Rosso', 'Oro', 'Nero'];
  const invalidForms = ['Nebbia'];
  return card.number % 2 === 1 && validColors.includes(card.color) && !invalidForms.includes(card.form);
};

const finalCards = [
  { id: 1, color: 'Rosso', form: 'Goccia', number: 3, phrase: 'Solo la Goccia può dire la verità.' },
  { id: 2, color: 'Oro', form: 'Goccia', number: 3, phrase: 'La mia forma è quella dell’eletta.' },
  { id: 3, color: 'Nero', form: 'Polvere', number: 1, phrase: 'L’essenza rossa mente.' },
  { id: 4, color: 'Rosso', form: 'Fiamma', number: 5, phrase: 'Una sola essenza di forma Goccia è pura.' }
];

const correctId = 3;

const Room4 = () => {
  const [step, setStep] = useState(1);
  const [revealed, setRevealed] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [result, setResult] = useState(null);

  const pureCardIds = initialCards.filter(isPure).map(c => c.id);

  const handleReveal = () => setRevealed(true);
  const handleAdvance = () => setStep(2);
  const handleSelectFinal = (id) => {
    setSelectedCard(id);
    setResult(null);
  };
  const handleFinalReveal = () => {
    if (selectedCard === null) return;
    const isCorrect = selectedCard === correctId;
    setResult(isCorrect ? 'Hai trovato la vera essenza. Lady Báthory ti osserva compiaciuta.' : 'Questa è una maschera. Riprova se osi.');
  };

  return (
    <div className="room-container">
      <h1>🔻 La Camera di Báthory</h1>

      {step === 1 && (
        <>
          <h2>Fase 1 – Analisi delle Essenze</h2>
          <p>
            Clicca su “Analizza essenze” per scoprire automaticamente quali delle 10 sono pure.
            <br />Non è richiesta alcuna selezione manuale.
          </p>
          <button onClick={handleReveal}>Analizza essenze</button>
          <div className="card-grid">
            {initialCards.map(card => {
              const pure = isPure(card);
              return (
                <div key={card.id} className={`card ${revealed ? (pure ? 'pure' : 'impure') : ''}`}>
                  <p>{card.color}</p>
                  <p>{card.form}</p>
                  <p>{card.number}</p>
                </div>
              );
            })}
          </div>
          {revealed && <button onClick={handleAdvance}>Continua con l’enigma finale</button>}
        </>
      )}

      {step === 2 && (
        <>
          <h2>Fase 2 – Lo Specchio dell’Anima</h2>
          <p>Solo una delle essenze pure riflette la verità. Le altre mentono per confonderti.</p>
          <div className="card-grid">
            {finalCards.map(card => (
              <div
                key={card.id}
                className={`card ${selectedCard === card.id ? 'selected' : ''}`}
                onClick={() => handleSelectFinal(card.id)}
              >
                <p><strong>{card.color}</strong></p>
                <p>{card.form}</p>
                <p>{card.number}</p>
                <p className="phrase">“{card.phrase}”</p>
              </div>
            ))}
          </div>
          <button onClick={handleFinalReveal}>Specchia l’Essenza</button>
          {result && <div className="result"><p>{result}</p></div>}
        </>
      )}
    </div>
  );
};

export default Room4;
