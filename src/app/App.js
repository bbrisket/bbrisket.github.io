import './App.css';
import {Deck} from '../components/deck';

function App() {
  const deck = new Deck();
  const randomCard = deck.getRandomCard();
  const randomCardSVG = randomCard.svg;
  console.log(randomCard.rank);
  console.log(randomCard.suit);
  console.log(randomCard.svg);

  return (
    <div className="App">
      <header className="App-header">
        <img src={randomCardSVG} className="App-logo" alt="ace of spades" />
        <p>
          It do be a spinning card.
        </p>
      </header>
    </div>
  );
}


export default App;
