// src/pages/Room4.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Room4.css';

const AccessoRoom4 = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (digit) => {
    if (code.length < 4) {
      setCode(prev => prev + digit);
    }
  };

  const handleClear = () => {
    setCode('');
    setError(false);
  };

  const handleConfirm = () => {
    if (code === '5555') {
      localStorage.setItem('accessGrantedRoom4', 'true');
      navigate('/room4-carte');
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
      <div className="door-frame">
        <div className="door">
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
