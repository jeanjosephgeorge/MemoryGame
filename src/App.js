import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard'

function generateDeck(){
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];

  for (var i=0;i<16;i++){
    deck.push({isFlipped: false, symbol: symbols[i%8]})
  }
  shuffle(deck);
  return (deck);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deck : generateDeck(),
      pickedCards : []
    }
  }

  unflipCards(card1Index,card2Index){
    let card1 = {...this.state.deck[card1Index]}
    let card2 = {...this.state.deck[card2Index]}

    let newDeck = this.state.deck.map(card=>{
      return {...card};
    });
    
    card1.isFlipped = false;
    card2.isFlipped = false;

    this.setState({deck:newDeck})
  }

  pickCard(cardIndex){
    if(this.state.deck[cardIndex].isFlipped)
    return;

    let cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card,index)=>{
      return cardToFlip
    });

    if(newPickedCards===2){
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      if (card1Index.symbol !== card2Index.symbol){
        this.unflipCards(card1Index,card2Index)
      }
      let newPickedCards = [];
    }
    this.setState({deck:newDeck, pickedCards:newPickedCards})
  }

  render() {
    let cardsJSX = this.state.deck.map((card,index)=>{
      return (
      < MemoryCard
      key = {index}
      symbol = {card.symbol}
      isFlipped = {card.isFlipped}
      pickCard = {this.pickCard.bind(this, index)}
      />
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h2>Memory Game</h2>
          <p className="App-subtitle">Match Cards to Win</p>
        </header>
          <div>{cardsJSX.slice(0,4)}</div>
          <div>{cardsJSX.slice(4,8)}</div>
          <div>{cardsJSX.slice(8,12)}</div>
          <div>{cardsJSX.slice(12,16)}</div>

      </div>
    );
  }
}

export default App;
