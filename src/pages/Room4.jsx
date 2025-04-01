import React, { useState } from 'react';
import './Room4.css';

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

const Room4 = () => {
  const [cards, setCards] = useState(initialCards);
  const [revealed, setRevealed] = useState(false);

  const revealPureCards = () => {
    setRevealed(true);
  };

  return (
    <div className="room-container">
      <h1>🔻 La Camera di Báthory</h1>
      <section className="narration">
        <h2>Atmosfera</h2>
        <p>
          Un ambiente opulento e inquietante, dominato dal rosso cremisi e dall’oro. Alle pareti, drappi di velluto e specchi che riflettono ogni angolo della stanza. Candelabri bassi diffondono una luce fioca, mentre nell'aria si percepisce il profumo inebriante di incenso e petali di rosa.
        </p>
        <p>
          Il lusso nasconde una perversione più oscura: la stanza è un teatro di umiliazione, dove le donne subiscono, senza via di fuga.
        </p>
        <h2>Pratiche</h2>
        <p>
          Qui le ragazze, sotto gli occhi di chi si eccita nell’osservare, non vengono sottomesse dagli uomini, ma da un’altra donna: <strong>Lady Bàthory</strong>, una Mistress esperta e priva di scrupoli che infligge punizioni tremende alle sue prede, imponendo posture, ordini e umiliazioni.
        </p>
        <p>
          Le ragazze possono essere costrette a gare di sottomissione tra loro, eseguendo rituali volti a dimostrare chi è la più devota e obbediente. L’uso di strumenti e accessori estremizza il gioco di potere e disciplina imposto dalla Mistress.
        </p>
        <p>
          Alle donne vittime di Lady Bàthory viene impedito di emettere anche un solo fiato o lamento, spesso imbavagliate con le cose più assurde e umilianti. Tutto si svolge in sussurri autoritari e ordini freddi della Mistress, mentre chi assiste sorseggia champagne godendosi lo spettacolo.
        </p>
      </section>

      <section className="selector">
        <h2>🔬 Scegli l'essenza pura</h2>
        <button onClick={revealPureCards}>Analizza essenze</button>
        <div className="card-grid">
          {cards.map(card => {
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
      </section>
    </div>
  );
};

export default Room4;
