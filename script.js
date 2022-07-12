import Deck from "./deck.js"

const computerCardSlot = document.querySelector('.computer-card-slot')
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const playerCardSlot = document.querySelector('.player-card-slot')
const text = document.querySelector('.text')

let playerDeck, computerDeck;

startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle()

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    console.log(playerDeck)
    console.log(computerDeck)
    cleanBeforeRound()
}

function cleanBeforeRound() {
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerText = ''

    updateDeckCount()
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}