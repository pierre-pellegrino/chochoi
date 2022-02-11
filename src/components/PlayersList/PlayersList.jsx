import React from 'react';
import PlayerForm from '../PlayerForm/PlayerForm';

const PlayersList = () => {
  const [playersNb, setPlayersNb] = React.useState(1);

  const removePlayer = () => {
    playersNb>1 && setPlayersNb(playersNb - 1)
  }

  const addPlayer = () => {
    playersNb<13 && setPlayersNb(playersNb + 1)
  }

  return (
    <div className="players-list">
      <form>
        {[...Array(playersNb)].map((player, i) => {
          return <div key={i}> <PlayerForm nb={i+1} /> </div>
        })}

        <div className="players-btns">
          <button type="button" onClick={() => removePlayer()} className={`round-btn minus btn red ${playersNb<2 ? 'disabled' : ''}`}>-</button>
          <button type="button" onClick={() => addPlayer()} className={`round-btn minus btn green ${playersNb>11 ? 'disabled' : ''}`}>+</button>
        </div>
      </form>
    </div>
  );
};

export default PlayersList;