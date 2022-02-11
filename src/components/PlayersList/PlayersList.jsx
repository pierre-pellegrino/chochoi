import React, {useRef, useEffect, useState} from 'react';
import PlayerForm from '../PlayerForm/PlayerForm';
import PlayBtn from '../PlayBtn/PlayBtn';

const PlayersList = ({onNewDeck, onGetPlayers}) => {

  const inputRef = useRef([]);

  const [playersNb, setPlayersNb] = useState(1);
  const [namedPlayersNb, setNamedPlayersNb] = useState(0);


  const handleNamedPlayers = (value) => {
    setNamedPlayersNb(namedPlayersNb + value);
  }

  useEffect(() => {
    inputRef.current = inputRef.current.slice(0, playersNb);    
  }, [playersNb, namedPlayersNb, inputRef]);

  const getArrayOfPlayers = () => {
    inputRef.current.forEach(input => onGetPlayers(input.firstElementChild.firstElementChild.value));
  }

  const removePlayer = () => {
    playersNb>1 && setPlayersNb(playersNb - 1);
  }

  const addPlayer = () => {
    playersNb<13 && setPlayersNb(playersNb + 1);
  }

  return (
    <div className="players-list">
      <form>
        {[...Array(playersNb)].map((player, i) => {
          return <div key={i} ref={el => inputRef.current[i] = el}> <PlayerForm nb={i+1} onInput={handleNamedPlayers}/> </div>
        })}

        <div className="players-btns">
          <button type="button" onClick={() => removePlayer()} className={`round-btn minus btn red ${playersNb<2 ? 'disabled' : ''}`}>-</button>
          <button type="button" onClick={() => addPlayer()} className={`round-btn minus btn green ${playersNb>11 ? 'disabled' : ''}`}>+</button>
        </div>
      </form>
      <div onClick={getArrayOfPlayers}><PlayBtn onNewDeck={onNewDeck} isDisabled={playersNb !== namedPlayersNb}/></div>
    </div>
  );
};

export default PlayersList;