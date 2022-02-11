import React from 'react';

const PlayBtn = ({onNewDeck, isDisabled}) => {
  
  const getDeckID = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(deck => {
      onNewDeck(deck.deck_id);
    });
  };

  return (
    <button disabled={isDisabled || null}className={`play-btn btn`} onClick={getDeckID} type="button">Nouvelle partie</button>
  );
};

export default PlayBtn;