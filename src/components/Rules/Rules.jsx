import React from 'react';
import rules from '../../data/rules';
import cards from '../../data/cards';

const Rules = () => {
  const handleOpenRules = (e) => {
    e.target.classList.toggle('active');
  }

  return (
    <div className="rules-wrapper">
      <button onClick={handleOpenRules} className="rules-btn btn">Les règles</button>
      <div className="rules-content">
        <h2> Les règles du Chochoï </h2>
        <p> Vous allez jouer avec 52 cartes. </p>
        <p> Chacun son tour, un joueur tire une carte.</p>
        <p className="mb-1"> Les cartes ont toutes un effet différent : </p>
        {rules.map((rule, i) => {
          return <p className="cards-rules" dangerouslySetInnerHTML={ {__html: `<span class="bolder">${cards[i]}</span> : ${rule.effect}` }} key={i}/>
        })}
      </div>
    </div>
  );
};

export default Rules;