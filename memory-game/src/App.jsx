import { useEffect, useState } from "react";
import Card from "../components/Card";

import "./App.css";
const small = [
  { src: "img/helmet-1.png", matched: false },
  { src: "img/potion-1.png", matched: false },
];

const medium = [
  { src: "img/helmet-1.png", matched: false },
  { src: "img/potion-1.png", matched: false },
  { src: "img/ring-1.png", matched: false },
  { src: "img/scroll-1.png", matched: false },
];
const large = [
  { src: "img/helmet-1.png", matched: false },
  { src: "img/potion-1.png", matched: false },
  { src: "img/ring-1.png", matched: false },
  { src: "img/scroll-1.png", matched: false },
  { src: "img/shield-1.png", matched: false },
  { src: "img/sword-1.png", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [game, setGame] = useState(large);
  const suffledCard = () => {
    const suffledCard = [...game, ...game]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(suffledCard);
    setTurns(0);
  };
  //handle choice
  const handleChoice = (card) => {
    //console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  //compare 2 selected card
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (choiceOne.src === card.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
        console.log("card match");
      } else {
        console.log("card are  different");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };
  const updateLevel = (event) => {
    if (event.target.value === "small") {
      setGame(small);
    } else if (event.target.value === "medium") {
      setGame(medium);
    } else {
      setGame(large);
    }
    suffledCard();
  };
  console.log(cards);
  return (
    <div className="App">
      <h1>Memory Game </h1>
      <button onClick={suffledCard}>New Game</button>
      <select onChange={updateLevel}>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </select>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={choiceOne === card || choiceTwo === card || card.matched}
          />
        ))}
      </div>
      <div>Turns:{turns}</div>
    </div>
  );
}

export default App;
