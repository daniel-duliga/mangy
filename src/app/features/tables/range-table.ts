export class RangeTable {
    constructor(
        private _rows: RangeTableRow[]
    ) { }

    
    public get rows() : RangeTableRow[] {
        return this._rows;
    }
    

    roll(dice: number): RangeTableRow {
        return this._rows.filter(x => x.min <= dice && x.max >= dice)[0];
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