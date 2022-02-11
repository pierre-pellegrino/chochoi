import React from 'react';

const PlayerForm = ({nb}) => {
  return (
    <div>
      <input type="text" placeholder={`Joueur ${nb}`}></input>
    </div>
  );
};

export default PlayerForm;