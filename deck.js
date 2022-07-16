const SUITS = ["♥","♦","♠","♣"]
const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

export default class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    //pop() returns the first card in the deck
    pop() {
        return this.cards.shift()
    }
    //push(card) puts card(s) at the bottom of the deck
    push(card) {
        this.cards.push(card)
    }
    
    //the shuffle function is basically a durstenfeld shuffle, but a better version from Fisher-Yates. 
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'
    }
//getHTML creates the card element, displays the value, and changes color depending on the suit (red or black).
    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}