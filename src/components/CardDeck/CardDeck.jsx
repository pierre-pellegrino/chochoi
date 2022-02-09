import React, { useEffect, useState } from 'react';
import cardBack from '../../assets/card-back.png'
import rules from '../../data/rules';
import ResetGame from '../ResetGame/ResetGame';

const CardDeck = ({deckID}) => {
  const [currentCard, setCurrentCard] = useState(null);

  const drawCard = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then((response => response.json()))
    .then((card => {
      setCurrentCard([card.cards[0].images.png, card.cards[0].code[0], card.remaining]);
    }))
  }

  const clearStorage = () => {
    localStorage.clear();
  }

  return (
    <div className="cardboard-wrapper">
      <div className="card-wrapper">
        <img className="current-card" src={currentCard ? currentCard[0] : cardBack} alt="current card" />
      </div>
      <p dangerouslySetInnerHTML={ {__html: currentCard && rules.find(rule => rule.value === currentCard[1]).effect} } />
      {!currentCard && <button onClick={drawCard} className="btn draw-btn">Piocher une carte</button>}
      {currentCard && currentCard[2]>0 && <button onClick={drawCard} className="btn draw-btn">Carte suivante</button>}

      {currentCard && currentCard[2]>9 && <p className="small mt-1">Encore <span className="colored">{currentCard[2]}</span> cartes.</p>}
      {currentCard && currentCard[2]<10 && currentCard[2]>0 && <p className="small mt-1">Plus que <span className="colored">{currentCard[2]}</span> carte{currentCard[2]===1 ? '' : 's'}, courage !</p>}
      {currentCard && currentCard[2]<1 && <p className="small mt-1"><span className="colored">Terminé !</span></p>}

      {currentCard && currentCard[2]===0 && <button onClick={ () => window.location.reload()} className="btn draw-btn">T'en veux encore ?</button>}

      {currentCard && currentCard[2]===0 && clearStorage()}

      <ResetGame />
    </div>
  );
};

export default CardDeck;