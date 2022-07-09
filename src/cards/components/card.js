export class Card {
    constructor(rank, suit) {
        this._rank = rank;
        this._suit = suit;
    }

    get rank() {
        return this._rank;
    }

    get suit() {
        return this._suit;
    }

    get svg() {
        return this._svg;
    }

    set svg(value) {
        this._svg = value;
    }

    compare(card) {
        if (this._rank < card.rank) {
            return -1;
        } else if (this._rank > card.rank) {
            return 1;
        } else {
            return 0;
        }
    }

    toString() {
        return `${this._rank}${this._suit}`;
    }

    async getSVG() {
        let svg = await import(`../images/svg-cards/${this.rank}${this.suit}.svg`);
        return svg;
    }
}