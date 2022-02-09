import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './styles/style.scss';
import Navbar from "./components/Navbar/Navbar";
import PlayBtn from "./components/PlayBtn/PlayBtn";
import CardDeck from "./components/CardDeck/CardDeck";
import CoffeeBtn from "./components/CoffeeBtn/CoffeeBtn";
import HeaderPic from "./components/HeaderPic/HeaderPic";
import Rules from "./components/Rules/Rules";

const App = () => {
  const gameID = localStorage.getItem('gameID') ? localStorage.getItem('gameID') : null;

  const [deckID, setDeckID] = useState(gameID);

  const handleSetDeckID = (id) => {
    setDeckID(id);
    localStorage.setItem('gameID', id);
  }

  return (
    <div className="global-wrapper">
        <Rules />
        <Navbar />
        {!deckID && <HeaderPic />}
        {!deckID && <PlayBtn onNewDeck={handleSetDeckID}/>}
        {deckID && <CardDeck deckID={deckID}/>} 
        {!deckID && <CoffeeBtn />}
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));