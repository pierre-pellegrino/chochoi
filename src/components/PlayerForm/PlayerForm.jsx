import React, {useEffect, useState, useRef} from 'react';

const PlayerForm = ({nb, onInput}) => {
  const [valid, setValid] = useState(false);

  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = valid;
  }, [valid]);

  // There's something going wrong with it -> Sometimes it just substracts 5 players with no reason when it should delete one
  // e.g. : Name 1st player, then create 4 players in a row, name them all and try deleting one. NamedPlayers goes from 5 to 1 like WTF
  useEffect(() => {
    return () => valueRef.current && onInput(0);
  }, []);

  const handleChange = e => {
    if (e.target.value.trim().length > 0) {
      !valid && onInput(1);
      setValid(true);
     }
     else {
      valid && onInput(-1);
      setValid(false);
     } 
  }

  return (
    <div>
      <input className={`${valid ? '' : 'incorrect'}`} onChange={handleChange} type="text" placeholder={`Joueur ${nb}`}></input>
    </div>
  );
};

export default PlayerForm;