// src/pages/Room4.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Room4.css';

const AccessoRoom4 = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const beepSound = useRef(null);
  const unlockSound = useRef(null);

  const handleButtonClick = (digit) => {
    if (code.length < 4) {
      setCode(prev => prev + digit);
      if (beepSound.current) beepSound.current.play();
    }
  };

  const handleClear = () => {
    setCode('');
    setError(false);
    if (beepSound.current) beepSound.current.play();
  };

  const handleConfirm = () => {
    if (code === '5555') {
      if (unlockSound.current) unlockSound.current.play();
      setOpen(true);
      setTimeout(() => navigate('/room4-carte'), 1500);
    } else {
      setError(true);
      setTimeout(() => {
        setCode('');
        setError(false);
      }, 1000);
    }
  };

  return (
    <div className="access-container">
      <audio ref={beepSound} src="/sounds/beep.mp3" preload="auto" />
      <audio ref={unlockSound} src="/sounds/unlock.mp3" preload="auto" />

      <div className="door-frame">
        <div className={`door ${open ? 'open' : ''}`}>
          <h2 className="door-title">🔻 Porta della Camera di Báthory</h2>
          <div className={`display ${error ? 'error' : ''}`}>{code.padEnd(4, '_')}</div>
          <div className="keypad">
            {[1,2,3,4,5,6,7,8,9,0].map((n, i) => (
              <button key={i} onClick={() => handleButtonClick(n)}>{n}</button>
            ))}
            <button className="clear" onClick={handleClear}>↺</button>
            <button className="enter" onClick={handleConfirm}>✔</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoRoom4;
