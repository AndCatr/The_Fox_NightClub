// src/pages/AccessoRoom4.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Room4.css';

const AccessoRoom4 = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (digit) => {
    if (code.length < 4) {
      const newCode = code + digit;
      setCode(newCode);
      if (newCode.length === 4) {
        if (newCode === '5555') {
          sessionStorage.setItem('accessGrantedRoom4', 'true');
          navigate('/room4');
        } else {
          setError(true);
          setTimeout(() => {
            setCode('');
            setError(false);
          }, 1000);
        }
      }
    }
  };

  const handleClear = () => {
    setCode('');
    setError(false);
  };

  return (
    <div className="access-container">
      <div className="door-frame">
        <div className="door">
          <h2 className="door-title">🔻 Porta della Camera di Báthory</h2>
          <div className={`display ${error ? 'error' : ''}`}>{code.replace(/./g, '•')}</div>
          <div className="keypad">
            {[1,2,3,4,5,6,7,8,9,0].map((num) => (
              <button key={num} onClick={() => handleButtonClick(num.toString())}>{num}</button>
            ))}
            <button onClick={handleClear} className="clear">Cancella</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoRoom4;
