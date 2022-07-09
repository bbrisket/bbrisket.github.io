import React from 'react';
import '../cards/cards.css';
import {Deck} from '../cards/components/deck';

function Cards() {
  const deck = new Deck();
  const randomCard = deck.getRandomCard();
  const randomCardSVG = randomCard.svg;

  console.log(deck.toString());
  deck.shuffle();
  console.log(deck.toString());

  return (
    <div className="Cards">
      <header className="Cards-header">
        <img src={randomCardSVG} className="Cards-logo" alt="ace of spades" />
        <p>
          It do be a spinning card.
        </p>
      </header>
    </div>
  );
};


export default Cards;
