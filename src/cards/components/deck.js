import {Card} from "./card";

export class Deck {
    _ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    _suits = ["C", "D", "H", "S"];
    _cards = [];

    constructor() {
        let svgsCache = {};
        const importAll = requireContext => requireContext.keys().forEach(
            key => svgsCache[key] = requireContext(key)
        );
        importAll(require.context('../images/svg-cards', true, /\.svg$/));
    
        const buildSVGFilename = (rank, suit) => `./${rank}${suit}.svg`;

        for (const rank of this._ranks) {
            for (const suit of this._suits) {
                let card = new Card(rank, suit);
                card.svg = svgsCache[buildSVGFilename(rank, suit)];

                this._cards.push(card);
            }
        }
    }

    toString() {
        return this._cards.map(card => card.toString()).join("");
    }

    get ranks() {
        return this._ranks;
    }

    get suits() {
        return this._suits;
    }

    get cards() {
        return this._cards;
    }

    shuffle() {
        for (let i = this._cards.length-1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i+1));

            // Swap card places
            [this._cards[randomIndex], this._cards[i]] = 
                [this._cards[i], this._cards[randomIndex]];
        }
        return this._cards;
    }

    getRandomCard() {
        const randomIndex = Math.floor(Math.random() * this._cards.length);
        return this._cards[randomIndex];
    }
}