let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            return {
                suit: this.suits[pickedSuit],
                cards: pickedCard % 13
            }
        }
    }
}
let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
console.log('pickedCard: ', pickedCard);