import React from 'react';

const ResetGame = () => {
  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <p className="reset-game" onClick={handleReset} >Tu veux recommencer depuis le début ?</p>
  );
};

export default ResetGame;