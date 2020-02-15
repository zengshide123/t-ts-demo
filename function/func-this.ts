interface Card {
    suit: string
    card: number
}
interface Deck {
    suits: Array<string>
    cards: number[]
    createCardPicker(): () => Card
}
let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log('pickedCard: ', pickedCard);