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
        //const aceOfSpades = svgsCache[buildSVGFilename(rank, suit)];

        for (const rank of this._ranks) {
            for (const suit of this._suits) {
                let card = new Card(rank, suit);
                card.svg = svgsCache[buildSVGFilename(rank, suit)];

                this._cards.push(card);
            }
        }
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

    getRandomCard() {
        const randomIndex = Math.floor(Math.random() * this._cards.length);
        return this._cards[randomIndex];
    }
}