import { DiceUtil } from "../dice/dice-util";

export class RangeTable {
    constructor(
        private _rows: RangeTableRow[]
    ) { }

    
    public get rows() : RangeTableRow[] {
        return this._rows;
    }
    

    public roll(dice: number | null = null): RangeTableRow {
        const lastRow = this._rows[this._rows.length - 1];
        const diceRoll = dice ?? DiceUtil.rollDice(`1d${lastRow.max}`).sum;
        const result = this._rows.filter(
            x => 
                x.min <= diceRoll && 
                x.max >= diceRoll
        )[0];
        return result;
    }
}

export class RangeTableRow {
    constructor(
        public min: number,
        public max: number,
        public value: string,
        public notes: string = '',
        public innerTable: RangeTable | null = null,
    ) { }
}