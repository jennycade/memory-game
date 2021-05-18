import { useState } from 'react';
import Card from './Card';

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

const Gameboard = (props) => {
  // images
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
  const generateCard = () => {
    // pick a random card
    const randomDraw = Math.floor(Math.random() * veggies.length);
    const randomVeggie = veggies[randomDraw];

    // really should remove it from the list
    veggies.splice(randomDraw, 1);

    return randomVeggie;
  }

  const shuffleCards = (cards) => {
    let cardOrder = [];
    for (let i=0; i<cards.length; i++) {
      cardOrder.push(i);
    }
    // Fisher-Yates shuffle
    let m = cardOrder.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = cardOrder[m];
      cardOrder[m] = cardOrder[i];
      cardOrder[i] = t;
    }
    
    // set new Order props
    for (let i=0; i<cards.length; i++) {

      cards[i] = <Card order={cardOrder[i]} /> // nope, replaces <Card /> instead of updating it.
    }

  }

  let initialCards = [];

  for (let i=0; i<props.numCards; i++) {
    const newVeggie = generateCard();
    initialCards.push(<Card key={i} order={i} shuffleCards={ () => shuffleCards(cards) } photo={ newVeggie.image } veggieName={ newVeggie.name } />);
  }

  const [cards, setCards] = useState(initialCards);

  

  

  return (
    <div className="Gameboard">
      { cards }
    </div>
  );
}

export default Gameboard;