// import { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import Card from './Card';
import { useState } from 'react';

import artichokes from './img/artichokes.jpg';
import asparagus from './img/asparagus.jpg';
import avocados from './img/avocados.jpg';
import basil from './img/basil.jpg';
import beets from './img/beets.jpg';
import bellpepper from './img/bell-pepper.jpg';
import broccoli from './img/broccoli.jpg';
import carrots from './img/carrots.jpg';
import cauliflower from './img/cauliflower.jpeg';
import chestnuts from './img/chestnuts.jpg';
import chilis from './img/chilis.jpg';
import corn from './img/corn.jpg';
import cucumbers from './img/cucumbers.jpg';
import eggplant from './img/eggplant.jpg';
import favabeans from './img/fava-beans.jpg';
import garlic from './img/garlic.jpg';
import greenbeans from './img/green-beans.jpg';
import leeks from './img/leeks.jpg';
import lettuce from './img/lettuce.jpg';
import okra from './img/okra.jpg';
import peas from './img/peas.jpg';
import potatoes from './img/potatoes.jpg';
import pumpkins from './img/pumpkins.jpg';
import purplekale from './img/purple-kale.jpg';
import purplecauliflower from './img/purple-cauliflower.jpg';
import radishes from './img/radishes.jpg';
import redchard from './img/red-chard.jpg';
import rhubarb from './img/rhubarb.jpg';
import savoycabbage from './img/savoy-cabbage.jpg';
import spinach from './img/spinach.jpg';
import squash from './img/squash.jpg';
import tomatoes from './img/tomatoes.jpg';
import walnuts from './img/walnuts.jpg';
import zucchini from './img/zucchini.jpg';

const Game = (props) => {
  console.log('I am a line in Game.js. I am being run.');

  const [score, setScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(1);

  const drawCards = (numCards) => {
    let newCards = [];
    let veggies = [
      {'name': 'artichokes', 'image': artichokes,},
      {'name': 'asparagus', 'image': asparagus,},
      {'name': 'avocados', 'image': avocados,},
      {'name': 'basil', 'image': basil,},
      {'name': 'beets', 'image': beets,},
      {'name': 'bell pepper', 'image': bellpepper,},
      {'name': 'broccoli', 'image': broccoli,},
      {'name': 'carrots', 'image': carrots,},
      {'name': 'cauliflower', 'image': cauliflower,},
      {'name': 'chestnuts', 'image': chestnuts,},
      {'name': 'chilis', 'image': chilis,},
      {'name': 'corn', 'image': corn,},
      {'name': 'cucumbers', 'image': cucumbers,},
      {'name': 'eggplant', 'image': eggplant,},
      {'name': 'fava beans', 'image': favabeans,},
      {'name': 'garlic', 'image': garlic,},
      {'name': 'green beans', 'image': greenbeans,},
      {'name': 'leeks', 'image': leeks,},
      {'name': 'lettuce', 'image': lettuce,},
      {'name': 'okra', 'image': okra,},
      {'name': 'peas', 'image': peas,},
      {'name': 'potatoes', 'image': potatoes,},
      {'name': 'pumpkins', 'image': pumpkins,},
      {'name': 'purple kale', 'image': purplekale,},
      {'name': 'purple cauliflower', 'image': purplecauliflower,},
      {'name': 'radishes', 'image': radishes,},
      {'name': 'red chard', 'image': redchard,},
      {'name': 'rhubarb', 'image': rhubarb,},
      {'name': 'savoy cabbage', 'image': savoycabbage,},
      {'name': 'spinach', 'image': spinach,},
      {'name': 'squash', 'image': squash,},
      {'name': 'tomatoes', 'image': tomatoes,},
      {'name': 'walnuts', 'image': walnuts,},
      {'name': 'zucchini', 'image': zucchini,},
    ];

    for (let i=0; i<numCards; i++) {
        // pick a random card
      const randomDraw = Math.floor(Math.random() * veggies.length);
      const randomVeggie = veggies[randomDraw];

      // remove it from the list
      veggies.splice(randomDraw, 1);

      newCards.push({...randomVeggie, 'key': i});
    }

    return newCards;

  }

  const [cards, setCards] = useState(drawCards(props.numCards));

  const newGame = (numCards) => {
    setScore(0);
    setGameNumber(gameNumber + 1);
    setCards(drawCards(numCards));
  }

  const scorePoint = () => {
    setScore(score + 1);
  }

  return (
    <div className="Gameboard">
      <Scoreboard score={ score } max={props.numCards} />
      <div className="Cards">
        {console.table(cards)}
        { cards.map(card => <Card key={card.key} photo={ card.image } veggieName={ card.name } scorePoint={scorePoint} newGame={newGame} gameNumber={gameNumber} />) }
      </div>
    </div>
  );
}

export default Game;