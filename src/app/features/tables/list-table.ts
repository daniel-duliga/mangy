import { DiceUtil } from "../dice/dice-util";
import { RangeTable } from "./range-table";

export class ListTable {
    constructor(
        private _rows: ListTableRow[]
    ) {}

    
    public get rows() : ListTableRow[] {
        return this._rows;
    }
    

    roll(): ListTableRow {
        const diceRoll = DiceUtil.rollDice(`1d${this._rows.length}`).sum;
        return this._rows[diceRoll - 1];
    }
}

export class ListTableRow {
    constructor(
        public value: string,
        public notes: string = '',
        public innerTable: RangeTable | null = null,
    ) {}
}