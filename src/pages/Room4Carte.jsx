// src/pages/Room4Carte.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Room4Carte.css';

const carte = [
  { id: 1, nome: 'Il Corvo', descrizione: 'Messaggero delle ombre, annuncia verità nascoste.', immagine: '/assets/carte/102_o.jpeg' },
  { id: 2, nome: 'La Chiave Antica', descrizione: 'Apre porte spirituali sigillate dal tempo.', immagine: '/assets/carte/201_a.jpeg' },
  { id: 3, nome: 'L’Occhio Inverso', descrizione: 'Vede ciò che è celato, ma distorce la realtà.', simbolo: '👁️' },
  { id: 4, nome: 'La Coppa del Sangue', descrizione: 'Contiene il potere di un giuramento eterno.', simbolo: '🩸' },
  { id: 5, nome: 'Il Sigillo Perduto', descrizione: 'Marchio dimenticato di un antico patto oscuro.', simbolo: '🔮' },
  { id: 6, nome: 'La Fiamma Eterna', descrizione: 'Brucia le illusioni e rivela l’essenza.', simbolo: '🔥' }
];

const Room4Carte = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const access = localStorage.getItem('accessGrantedRoom4');
    if (!access) {
      navigate('/room4');
    }
  }, [navigate]);

  useEffect(() => {
  // const access = sessionStorage.getItem('accessGrantedRoom4');
  // if (!access) {
  //   navigate('/room4');
  // }
}, [navigate]);
  
  return (
    <div className="carte-container">
      <h1>🃏 Le Sei Carte del Destino</h1>
      <div className="carte-grid">
        {carte.map((carta) => (
          <div
            key={carta.id}
            className={`carta ${selectedId === carta.id ? 'selected' : ''}`}
            onClick={() => setSelectedId(carta.id)}
          >
            <div className="simbolo">{carta.simbolo}</div>
            <h2>{carta.nome}</h2>
            <p>{carta.descrizione}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room4Carte;
